/**
 * Données centrales du site. Tout ce qui est marqué « À COMPLÉTER » doit être
 * remplacé par les informations réelles de la galerie avant la mise en ligne.
 */
export const SITE = {
  name: 'Galleria Antica',
  legalName: 'Galleria Antica S.r.l.',
  // À COMPLÉTER : domaine définitif (utilisé pour canonical, sitemap, Open Graph, JSON-LD)
  url: 'https://www.galleria-antica.it',
  locale: 'it_IT',
  city: 'Milano',
  region: 'Lombardia',
  email: 'info@galleria-antica.it',
  phone: '+39 351 472 4339',
  address: 'Cadorna, Milano',
  hours: 'Su appuntamento',
};

export const NAV = [
  { href: '/collezioni/', label: 'Collezioni' },
  { href: '/acquisto-antiquariato/', label: 'Vendi con noi' },
  { href: '/valutazioni-e-stime/', label: 'Valutazioni e stime' },
  { href: '/chi-siamo/', label: 'Chi siamo' },
  { href: '/contatti/', label: 'Contatti' },
];

export const CTA = {
  stima: { href: '/contatti/', label: 'Richiedi una stima gratuita' },
  valutazione: { href: '/valutazioni-e-stime/', label: 'Valutazione opere' },
  contatta: { href: '/contatti/', label: 'Contatta la Galleria' },
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  image: string;
  alt: string;
  title: string; // <title>
  description: string; // meta description
  h1: string;
  lead: string;
  body: string[];
  items: string[];
  faq: { q: string; a: string }[];
};

export const CATEGORIES: Category[] = [
  {
    slug: 'opere-e-sculture-d-arte',
    name: 'Opere d’arte e sculture',
    short: 'Pittura, olio su tela, scultura e arte tra Ottocento e Novecento',
    image: 'landscape',
    alt: 'Dipinto antico a olio raffigurante un paesaggio pastorale con alberi e gregge',
    title: 'Opere d’Arte e Sculture: Dipinti e Sculture Antiche',
    description:
      'Valutiamo e acquistiamo dipinti antichi, sculture e opere d’arte tra Ottocento e Novecento. Valutazione gratuita e ritiro a domicilio in tutta Italia.',
    h1: 'Opere d’arte e sculture: dipinti antichi, Ottocento e Novecento',
    lead: 'Paesaggi, ritratti, scene di genere, soggetti sacri, dipinti figurativi, sculture e opere d’arte tra Ottocento e Novecento, selezionati e valutati con attenzione alla qualità, allo stato di conservazione e alla provenienza di ogni pezzo.',
    body: [
      'Ogni opera racconta un’epoca, una storia e uno stile. Per questo valutiamo attentamente qualità, tecnica, supporto, firma, cornice, stato di conservazione, eventuali restauri e provenienza, considerando anche la documentazione disponibile.',
      'Possiedi un dipinto ereditato, una collezione o un’opera acquistata in passato? Puoi inviarci alcune fotografie via email o contattarci telefonicamente: ti forniremo una prima indicazione gratuita e, se l’opera è di nostro interesse, fisseremo una visita. Il tutto con la massima professionalità e riservatezza.',
    ],
    items: [
      'Dipinti antichi, oli su tela e su tavola',
      'Paesaggi, vedute, ritratti e scene di genere',
      'Soggetti sacri e storici',
      'Pittura dell’Ottocento e arte del Novecento',
      'Sculture in marmo, bronzo e terracotta',
      'Disegni, incisioni e cornici antiche',
      'Collezioni, eredità e singole opere',
    ],
    faq: [
      {
        q: 'Come posso sapere se il mio dipinto ha valore?',
        a: 'Invia fotografie del fronte, del retro e dei dettagli (firma, cornice, etichette) via email o contattaci telefonicamente. Una prima valutazione è gratuita e senza impegno.',
      },
      {
        q: 'Acquistate anche dipinti non firmati?',
        a: 'Sì. Molte opere di qualità non sono firmate: ne valutiamo stile, epoca, tecnica e stato di conservazione.',
      },
      {
        q: 'Gestite l’intera eredità o collezione?',
        a: 'Sì. Possiamo valutare e, se interessati, acquistare l’intera collezione o selezionare i pezzi migliori, con piena riservatezza.',
      },
    ],
  },
  {
    slug: 'mobili-antichi',
    name: 'Mobili antichi',
    short: 'Commode, consolle, tavoli e sedute d’epoca',
    image: 'chair',
    alt: 'Poltroncina capitonné con gambe tornite, esempio di seduta di gusto classico',
    title: 'Mobili antichi: valutazione e acquisto a domicilio',
    description:
      'Valutiamo e acquistiamo mobili antichi in tutta Italia: commode, consolle, tavoli, sedute e arredi d’epoca. Valutazione gratuita e ritiro a domicilio.',
    h1: 'Mobili antichi: valutazione, acquisto e vendita',
    lead: 'Commode, credenze, consolle, tavoli, sedute e arredi d’epoca: mobili che uniscono ebanisteria, materiali pregiati e carattere.',
    body: [
      'Nel mobile antico contano essenza, costruzione, patina, originalità delle parti e stato di conservazione. Una valutazione corretta distingue gli arredi autentici dalle riproduzioni e valorizza quelli di maggior pregio.',
      'Per arredi di grandi dimensioni organizziamo sopralluogo e ritiro a domicilio, con imballaggio e trasporto in sicurezza.',
    ],
    items: ['Commode e comò', 'Credenze e vetrine', 'Consolle e tavoli', 'Sedute e poltrone', 'Specchiere e lampadari'],
    faq: [
      {
        q: 'Ritirate mobili ingombranti a domicilio?',
        a: 'Sì, in tutta Italia. Dopo la valutazione concordiamo data, imballaggio e trasporto.',
      },
      {
        q: 'Un mobile restaurato mantiene valore?',
        a: 'Dipende da come è stato restaurato. Un intervento conservativo e ben documentato può essere accettabile; ripassature pesanti riducono il valore.',
      },
    ],
  },
  {
    slug: 'argenti-e-bronzi',
    name: 'Argenti e bronzi',
    short: 'Argenteria, sculture, vasi e oggetti da tavola',
    image: 'statue',
    alt: 'Dettaglio di una scultura classica in marmo con volto e spalla in primo piano',
    title: 'Argenti e bronzi antichi: valutazione e acquisto',
    description:
      'Compriamo e valutiamo argenti, bronzi e sculture antiche. Esame di punzoni e firme, valutazione gratuita e ritiro a domicilio in tutta Italia.',
    h1: 'Argenti, bronzi e sculture antiche: valutazione e acquisto',
    lead: 'Argenteria da tavola, centrotavola, bronzi, marmi e sculture: oggetti in cui la materia e la mano dell’artigiano si leggono a colpo d’occhio.',
    body: [
      'Per argenti e bronzi sono decisivi punzoni, fonderia, qualità della cesellatura e patina. Esaminiamo ogni pezzo con attenzione a marchi, firme e stato di conservazione.',
      'Hai servizi completi o singoli pezzi? Fotografa i marchi sul fondo e sui bordi: sono la prima informazione utile per la valutazione.',
    ],
    items: ['Argenteria e servizi da tavola', 'Bronzi e fusioni', 'Marmi e sculture', 'Vasi e ceramiche', 'Oggetti d’arredo'],
    faq: [
      {
        q: 'Acquistate argenteria anche incompleta?',
        a: 'Sì: valutiamo sia servizi completi sia singoli pezzi, considerando peso, punzoni e qualità di manifattura.',
      },
      {
        q: 'Come si riconosce un bronzo antico?',
        a: 'Contano patina, fusione, ritocchi a freddo e firma della fonderia. Una valutazione in presenza permette di giudicarli correttamente.',
      },
    ],
  },
  {
    slug: 'orologi-e-gioielli',
    name: 'Orologi e gioielli',
    short: 'Orologi da tasca, oggetti da collezione e curiosità d’epoca',
    image: 'watch',
    alt: 'Orologio da tasca antico appeso a una catena con sfondo sfocato',
    title: 'Orologi e Gioielli Antichi: Valutazione e Acquisto',
    description:
      'Valutiamo e acquistiamo orologi da tasca, gioielli, bigiotteria di valore e oggetti da collezione. Valutazione gratuita e ritiro a domicilio in tutta Italia.',
    h1: 'Orologi e gioielli: orologi da tasca, bigiotteria e oggetti da collezione',
    lead: 'Orologi da tasca, oggetti da collezione e curiosità d’epoca, bigiotteria e gioielli di valore: pezzi che il tempo ha reso preziosi.',
    body: [
      'Nei piccoli oggetti da collezione contano rarità, integrità del meccanismo, marchi e provenienza. Anche un pezzo non funzionante può avere valore se originale e ben conservato.',
      'Invia fotografie di quadrante, cassa, movimento, punzoni e firme: ti indicheremo se vale la pena procedere con una valutazione in presenza.',
    ],
    items: [
      'Orologi da tasca e da polso d’epoca',
      'Pendole e orologi da tavolo',
      'Bigiotteria e gioielli di valore',
      'Strumenti scientifici',
      'Libri antichi e stampe',
      'Curiosità e oggetti d’arte',
    ],
    faq: [
      {
        q: 'Valutate orologi che non funzionano?',
        a: 'Sì. Il valore dipende da marca, rarità, originalità delle parti e stato generale, non solo dal funzionamento.',
      },
      {
        q: 'Acquistate anche bigiotteria e gioielli?',
        a: 'Sì, valutiamo gioielli e bigiotteria di valore: invia fotografie del pezzo, dei punzoni e di eventuali firme o scatole originali.',
      },
    ],
  },
  {
    slug: 'tappeti-e-tessili-antichi',
    name: 'Tappeti e tessili',
    short: 'Tappeti orientali, arazzi e tessuti d’epoca',
    image: 'carpet',
    alt: 'Tappeto antico arrotolato con motivi decorativi e frange',
    title: 'Tappeti antichi e tessili d’epoca: valutazione e acquisto',
    description:
      'Valutazione e acquisto di tappeti antichi, arazzi e tessili d’epoca. Valutazione gratuita su fotografie e ritiro a domicilio in tutta Italia.',
    h1: 'Tappeti antichi, arazzi e tessili d’epoca',
    lead: 'Tappeti orientali annodati a mano, arazzi e tessuti d’epoca: trame che uniscono arte decorativa e artigianato.',
    body: [
      'Per un tappeto antico si guardano provenienza, nodo, tinture, disegno e condizioni. Una valutazione accurata richiede di osservare retro, frange e bordi.',
      'Se possiedi un tappeto di famiglia, fotografalo steso, di dettaglio e sul retro: è tutto ciò che serve per una prima valutazione.',
    ],
    items: ['Tappeti orientali annodati a mano', 'Arazzi e tessuti antichi', 'Ricami e merletti', 'Passamanerie e velluti', 'Tessili d’arredo'],
    faq: [
      {
        q: 'Come devo fotografare un tappeto per la valutazione?',
        a: 'Steso su pavimento chiaro, con una foto d’insieme, una del retro e una dei bordi e delle frange.',
      },
      {
        q: 'Valutate anche tappeti consumati?',
        a: 'Sì: l’usura incide sul valore ma non lo azzera, soprattutto per pezzi antichi o di manifattura pregiata.',
      },
    ],
  },
  {
    slug: 'pellicce-e-moda-vintage',
    name: 'Pellicce e moda vintage',
    short: 'Capi d’abbigliamento vintage, accessori e pezzi di moda d’epoca',
    image: 'fashion',
    alt: 'Abiti e capispalla vintage appesi su una stanga in un negozio di moda d’epoca',
    title: 'Pellicce e Moda Vintage: Valutazione e Acquisto',
    description:
      'Valutiamo e acquistiamo pellicce, abbigliamento vintage, capi firmati e accessori di moda d’epoca. Valutazione gratuita e ritiro a domicilio in tutta Italia.',
    h1: 'Pellicce e moda vintage: valutazione e acquisto a domicilio',
    lead: 'Capi d’abbigliamento vintage, accessori e pezzi di moda d’epoca: cappotti, giacche e accessori in pelliccia, capi firmati e pezzi di stilisti.',
    body: [
      'Ogni capo racconta un’epoca, uno stile e una storia. Per questo valutiamo attentamente la qualità dei materiali, lavorazione, marca, autenticità, stato di conservazione, rarità e valore nel mercato vintage.',
      'Possiedi una pelliccia ereditata, un capo firmato o una collezione di abbigliamento vintage? Puoi inviarci alcune fotografie via email o contattarci telefonicamente: ti forniremo una prima indicazione gratuita e, se gli articoli sono di nostro interesse, fisseremo un appuntamento per visionarli. Il tutto con la massima professionalità e riservatezza.',
    ],
    items: [
      'Cappotti, giacche e accessori in pelliccia',
      'Abbigliamento vintage e di alta moda',
      'Capi firmati e pezzi di stilisti',
      'Borse, accessori e articoli di moda d’epoca',
      'Capi sartoriali e pezzi da collezione',
      'Guardaroba vintage e intere collezioni',
    ],
    faq: [
      {
        q: 'Acquistate anche pellicce datate?',
        a: 'Sì. Valutiamo pellicce e capi vintage anche datati: contano materiali, lavorazione, marca, stato di conservazione e rarità.',
      },
      {
        q: 'Come devo fotografare un capo per la valutazione?',
        a: 'Il capo intero, l’etichetta interna, le cuciture e gli eventuali difetti, con luce naturale e senza filtri.',
      },
    ],
  },
];

export const FAQ_HOME = [
  {
    q: 'La stima è davvero gratuita?',
    a: 'Sì. Una prima valutazione sulla base delle fotografie è gratuita e senza impegno. Qualora gli oggetti siano di nostro interesse, proponiamo una visita a domicilio, anch’essa gratuita, per esaminarli direttamente.',
  },
  {
    q: 'Che cosa potete valutare?',
    a: 'Dipinti, mobili, argenti, bronzi, sculture, orologi, gioielli, tappeti, pellicce e moda vintage e oggetti da collezione. Se hai dubbi, scrivici: ti diremo subito se è un pezzo che trattiamo.',
  },
  {
    q: 'Venite a casa a ritirare le opere?',
    a: 'Sì, in tutta Italia, senza alcun costo di spostamento. Concordiamo giorno e orario, e ci occupiamo di imballaggio e trasporto in sicurezza.',
  },
  {
    q: 'Come vengo pagato se vendo alla Galleria?',
    a: 'Una volta accettata la proposta, il pagamento avviene in modo tracciabile e concordato: i dettagli ti vengono spiegati prima di qualsiasi decisione.',
  },
  {
    q: 'I miei dati e le mie opere restano riservati?',
    a: 'Sì. Le informazioni su te e sui tuoi beni sono trattate con la massima discrezione.',
  },
];

export const ZONES = ['Milano e Lombardia', 'Torino e Piemonte', 'Veneto e Triveneto', 'Emilia-Romagna e Toscana', 'Roma e Lazio', 'Sud Italia e Isole'];
