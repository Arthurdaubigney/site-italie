"""Télécharge les photos Unsplash (licence libre), génère les variantes WebP
et le logo détouré (fond transparent). Usage: python3 scripts/prepare-assets.py <logo.jpg>"""
import sys, json, io, urllib.request
from pathlib import Path
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "img"
OUT.mkdir(parents=True, exist_ok=True)

PHOTOS = {
    "gallery-wall": "1554907984-15263bfd63bd",
    "vitrines": "1564399579883-451a5d44ec08",
    "statue": "1566054757965-8c4085344c96",
    "portrait": "1577720643272-265f09367456",
    "landscape": "1578301978693-85fa9c0320b9",
    "battle": "1580136579312-94651dfd596d",
    "hall": "1518998053901-5348d3961a04",
    "visitor": "1582555172866-f73bb12a2ab3",
    "books": "1507842217343-583bb7270b66",
    "watch": "1509048191080-d2984bad6ae5",
    "carpet": "1600166898405-da9535204843",
    "chair": "1567538096630-e0c55bd6374c",
}
dims = {}
for name, pid in PHOTOS.items():
    url = f"https://images.unsplash.com/photo-{pid}?w=1800&q=80&fm=jpg"
    im = Image.open(io.BytesIO(urllib.request.urlopen(url, timeout=60).read())).convert("RGB")
    for w, q in ((640, 74), (1400, 74)):
        r = im.copy(); r.thumbnail((w, w * 3))
        r.save(OUT / f"{name}-{w}.webp", "WEBP", quality=q, method=6)
        if w == 1400:
            dims[name] = list(r.size)
(ROOT / "src/data/images.json").write_text(json.dumps(dims, indent=2))

# --- Logo : fond blanc -> alpha
src = Image.open(sys.argv[1]).convert("RGB")
a = np.asarray(src).astype(float)
alpha = np.clip((255 - a.min(axis=2)) / 255 * 1.12, 0, 1)
col = np.where(alpha[..., None] > 0.02, (a - 255 * (1 - alpha[..., None])) / np.maximum(alpha[..., None], 0.02), 0)
col = np.clip(col, 0, 255)
rgba = np.dstack([col, alpha * 255]).astype("uint8")
logo = Image.fromarray(rgba, "RGBA")
logo = logo.crop(logo.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox())
def save(img, name, maxw):
    i = img.copy(); i.thumbnail((maxw, maxw))
    i.save(OUT / name, "WEBP", quality=92, method=6)
    return list(i.size)
meta = {"logo": save(logo, "logo.webp", 900)}
# version claire (bleu marine -> ivoire) pour fonds sombres
arr = np.asarray(logo).copy()
navy = (arr[..., 2] > arr[..., 0] + 8)
arr[navy, 0:3] = (246, 242, 234)
gold = (~navy) & (arr[..., 0] > arr[..., 2] + 30)
arr[gold, 0:3] = np.clip(arr[gold, 0:3].astype(float) * 1.3 + 15, 0, 255).astype('uint8')
light = Image.fromarray(arr, "RGBA")
meta["logo-light"] = save(light, "logo-light.webp", 900)
# monogramme
W, H = src.size
mark = logo.crop((0, 0, logo.size[0], int(logo.size[1] * 0.50)))
mark = mark.crop(mark.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox())
meta["mark"] = save(mark, "mark.webp", 400)
pad = int(max(mark.size) * 0.12); s = max(mark.size) + pad * 2
sq = Image.new("RGBA", (s, s), (246, 242, 234, 255))
sq.alpha_composite(mark, ((s - mark.size[0]) // 2, (s - mark.size[1]) // 2))
for n, px in (("favicon-32.png", 32), ("apple-touch-icon.png", 180), ("icon-512.png", 512)):
    sq.resize((px, px), Image.LANCZOS).convert("RGB").save(ROOT / "public" / n)
(ROOT / "src/data/logo.json").write_text(json.dumps(meta, indent=2))
print(dims, meta)
