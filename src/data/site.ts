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
  address: 'Quadrilatero della Moda, Milano',
  hours: 'Su appuntamento',
};

export const NAV = [
  { href: '/collezioni', label: 'Collezioni' },
  { href: '/acquisto-antiquariato', label: 'Vendi con noi' },
  { href: '/stima-perizie-opere-d-arte', label: 'Stime e perizie' },
  { href: '/la-galleria', label: 'La Galleria' },
  { href: '/contatti', label: 'Contatti' },
];

export const CTA = {
  stima: { href: '/contatti', label: 'Richiedi una stima gratuita' },
  valutazione: { href: '/stima-perizie-opere-d-arte', label: 'Valutazione opere' },
  contatta: { href: '/contatti', label: 'Contatta la Galleria' },
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
    slug: 'dipinti-antichi',
    name: 'Dipinti antichi',
    short: 'Olii su tela e tavola, dal Seicento all’Ottocento',
    image: 'landscape',
    alt: 'Dipinto antico a olio raffigurante un paesaggio pastorale con alberi e gregge',
    title: 'Dipinti antichi a Milano | Galleria Antica',
    description:
      'Acquisto, stima e vendita di dipinti antichi a Milano: olii su tela e tavola, paesaggi, ritratti e scene storiche. Perizia e ritiro a domicilio in Lombardia.',
    h1: 'Dipinti antichi a Milano: acquisto, stima e vendita',
    lead: 'Paesaggi, ritratti, scene di genere e soggetti sacri: la Galleria seleziona e valuta dipinti antichi con occhio attento a qualità, stato di conservazione e provenienza.',
    body: [
      'Un dipinto antico racconta un’epoca, una bottega, un gusto. Per questo la valutazione parte sempre dall’opera: supporto, tecnica, cornice, eventuali restauri e documentazione disponibile.',
      'Se possiedi un quadro ereditato o acquistato in passato e vuoi conoscerne il valore, puoi inviarci alcune fotografie via email o telefonarci: ti risponderemo con una prima indicazione e, se l’opera è interessante, fisseremo una visita.',
    ],
    items: ['Olii su tela e su tavola', 'Paesaggi e vedute', 'Ritratti e scene di genere', 'Soggetti sacri e storici', 'Cornici antiche'],
    faq: [
      {
        q: 'Come posso sapere se il mio dipinto ha valore?',
        a: 'Invia fotografie del fronte, del retro e dei dettagli (firma, cornice, etichette) via email. Una prima valutazione è gratuita e senza impegno.',
      },
      {
        q: 'Acquistate anche dipinti non firmati?',
        a: 'Sì. Molte opere di qualità non sono firmate: ne valutiamo stile, epoca, tecnica e stato di conservazione.',
      },
    ],
  },
  {
    slug: 'mobili-antichi',
    name: 'Mobili antichi',
    short: 'Commode, consolle, tavoli e sedute d’epoca',
    image: 'chair',
    alt: 'Poltroncina capitonné con gambe tornite, esempio di seduta di gusto classico',
    title: 'Mobili antichi a Milano: stima e acquisto | Galleria Antica',
    description:
      'Valutiamo e acquistiamo mobili antichi a Milano e in Lombardia: commode, consolle, tavoli, sedute e arredi d’epoca. Stima gratuita e ritiro a domicilio.',
    h1: 'Mobili antichi a Milano: stima, acquisto e vendita',
    lead: 'Commode, credenze, consolle, tavoli, sedute e arredi d’epoca: mobili che uniscono ebanisteria, materiali pregiati e carattere.',
    body: [
      'Nel mobile antico contano essenza, costruzione, patina, originalità delle parti e stato di conservazione. Una stima corretta distingue gli arredi autentici dalle riproduzioni e valorizza quelli di maggior pregio.',
      'Per arredi di grandi dimensioni organizziamo sopralluogo e ritiro a domicilio, con imballaggio e trasporto in sicurezza.',
    ],
    items: ['Commode e comò', 'Credenze e vetrine', 'Consolle e tavoli', 'Sedute e poltrone', 'Specchiere e lampadari'],
    faq: [
      {
        q: 'Ritirate mobili ingombranti a domicilio?',
        a: 'Sì, in tutta la Lombardia e nel Nord Italia. Dopo la stima concordiamo data, imballaggio e trasporto.',
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
    title: 'Argenti e bronzi antichi a Milano | Galleria Antica',
    description:
      'Compriamo e valutiamo argenti, bronzi e sculture antiche a Milano. Perizia di punzoni e firme, stima gratuita e ritiro a domicilio in Lombardia e Nord Italia.',
    h1: 'Argenti, bronzi e sculture antiche: stima e acquisto a Milano',
    lead: 'Argenteria da tavola, centrotavola, bronzi, marmi e sculture: oggetti in cui la materia e la mano dell’artigiano si leggono a colpo d’occhio.',
    body: [
      'Per argenti e bronzi sono decisivi punzoni, fonderia, qualità della cesellatura e patina. Esaminiamo ogni pezzo con attenzione a marchi, firme e stato di conservazione.',
      'Hai servizi completi o singoli pezzi? Fotografa i marchi sul fondo e sui bordi: sono la prima informazione utile per la stima.',
    ],
    items: ['Argenteria e servizi da tavola', 'Bronzi e fusioni', 'Marmi e sculture', 'Vasi e ceramiche', 'Oggetti d’arredo'],
    faq: [
      {
        q: 'Acquistate argenteria anche incompleta?',
        a: 'Sì: valutiamo sia servizi completi sia singoli pezzi, considerando peso, punzoni e qualità di manifattura.',
      },
      {
        q: 'Come si riconosce un bronzo antico?',
        a: 'Contano patina, fusione, ritocchi a freddo e firma della fonderia. Una perizia in presenza permette di valutarli correttamente.',
      },
    ],
  },
  {
    slug: 'orologi-e-oggetti-da-collezione',
    name: 'Orologi e oggetti da collezione',
    short: 'Orologi da tasca, strumenti e curiosità d’epoca',
    image: 'watch',
    alt: 'Orologio da tasca antico appeso a una catena con sfondo sfocato',
    title: 'Orologi antichi e oggetti da collezione a Milano',
    description:
      'Valutazione e acquisto di orologi da tasca, pendole e oggetti da collezione a Milano. Stima gratuita, perizia in galleria e ritiro a domicilio in Lombardia.',
    h1: 'Orologi antichi e oggetti da collezione: valutazione a Milano',
    lead: 'Orologi da tasca, pendole, strumenti scientifici e piccoli oggetti da collezione: pezzi che il tempo ha reso preziosi.',
    body: [
      'Nei piccoli oggetti da collezione contano rarità, integrità del meccanismo, marchi e provenienza. Anche un pezzo non funzionante può avere valore se originale e ben conservato.',
      'Invia fotografie di quadrante, cassa, movimento e firme: ti indicheremo se vale la pena procedere con una perizia in galleria.',
    ],
    items: ['Orologi da tasca e da polso d’epoca', 'Pendole e orologi da tavolo', 'Strumenti scientifici', 'Libri antichi e stampe', 'Curiosità e oggetti d’arte'],
    faq: [
      {
        q: 'Valutate orologi che non funzionano?',
        a: 'Sì. Il valore dipende da marca, rarità, originalità delle parti e stato generale, non solo dal funzionamento.',
      },
      {
        q: 'Acquistate anche libri e stampe antiche?',
        a: 'Valutiamo libri antichi, incisioni e stampe di pregio: invia fotografie di frontespizio, tavole e stato di conservazione.',
      },
    ],
  },
  {
    slug: 'tappeti-e-tessili-antichi',
    name: 'Tappeti e tessili',
    short: 'Tappeti orientali, arazzi e tessuti d’epoca',
    image: 'carpet',
    alt: 'Tappeto antico arrotolato con motivi decorativi e frange',
    title: 'Tappeti antichi e tessili d’epoca a Milano | Galleria Antica',
    description:
      'Stima e acquisto di tappeti antichi, arazzi e tessili d’epoca a Milano. Valutazione gratuita su fotografie e ritiro a domicilio in Lombardia e Nord Italia.',
    h1: 'Tappeti antichi, arazzi e tessili d’epoca a Milano',
    lead: 'Tappeti orientali annodati a mano, arazzi e tessuti d’epoca: trame che uniscono arte decorativa e artigianato.',
    body: [
      'Per un tappeto antico si guardano provenienza, nodo, tinture, disegno e condizioni. Una stima accurata richiede di osservare retro, frange e bordi.',
      'Se possiedi un tappeto di famiglia, fotografalo steso, di dettaglio e sul retro: è tutto ciò che serve per una prima valutazione.',
    ],
    items: ['Tappeti orientali annodati a mano', 'Arazzi e tessuti antichi', 'Ricami e merletti', 'Passamanerie e velluti', 'Tessili d’arredo'],
    faq: [
      {
        q: 'Come devo fotografare un tappeto per la stima?',
        a: 'Steso su pavimento chiaro, con una foto d’insieme, una del retro e una dei bordi e delle frange.',
      },
      {
        q: 'Valutate anche tappeti consumati?',
        a: 'Sì: l’usura incide sul valore ma non lo azzera, soprattutto per pezzi antichi o di manifattura pregiata.',
      },
    ],
  },
  {
    slug: 'opere-e-sculture-d-arte',
    name: 'Opere d’arte e sculture',
    short: 'Pittura, scultura e arte tra Ottocento e Novecento',
    image: 'portrait',
    alt: 'Dipinto ottocentesco di una donna in abito popolare con brocca davanti a un muro',
    title: 'Opere d’arte e sculture: stima e acquisto a Milano',
    description:
      'Acquistiamo e valutiamo opere d’arte, dipinti dell’Ottocento e sculture a Milano. Stima gratuita, perizia in galleria e ritiro a domicilio in Lombardia.',
    h1: 'Opere d’arte e sculture dell’Ottocento e del Novecento a Milano',
    lead: 'Dipinti figurativi, scene di genere, sculture e opere d’arte tra Ottocento e Novecento: una selezione con attenzione alla qualità e alla storia di ogni pezzo.',
    body: [
      'Un’opera ottocentesca può nascondere nomi e scuole di grande interesse. Ne verifichiamo stile, supporto, firma, cornice e documentazione, per darti una valutazione chiara.',
      'Hai una collezione da dividere o da vendere? Possiamo valutarla in blocco o per singoli pezzi, con la massima riservatezza.',
    ],
    items: ['Pittura dell’Ottocento', 'Arte del Novecento', 'Sculture in marmo, bronzo, terracotta', 'Disegni e incisioni', 'Collezioni e eredità'],
    faq: [
      {
        q: 'Gestite l’intera eredità o collezione?',
        a: 'Sì. Possiamo valutare e, se interessati, acquistare l’intera collezione o selezionare i pezzi migliori, con piena riservatezza.',
      },
      {
        q: 'Serve un certificato di autenticità?',
        a: 'Non è necessario per una prima stima. Se disponibile, la documentazione (certificati, fatture, cataloghi) aiuta a definire il valore.',
      },
    ],
  },
];

export const FAQ_HOME = [
  {
    q: 'La stima è davvero gratuita?',
    a: 'Sì. La prima valutazione, a partire da fotografie, è gratuita e senza impegno. Se l’opera è interessante, proponiamo una visita per la perizia in presenza.',
  },
  {
    q: 'Che cosa potete valutare?',
    a: 'Dipinti, mobili, argenti, bronzi, sculture, orologi, tappeti, libri antichi e oggetti da collezione. Se hai dubbi, scrivici: ti diremo subito se è un pezzo che trattiamo.',
  },
  {
    q: 'Venite a casa a ritirare le opere?',
    a: 'Sì, a Milano, in tutta la Lombardia e nel Nord Italia. Concordiamo giorno e orario, e ci occupiamo di imballaggio e trasporto in sicurezza.',
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

export const ZONES = ['Milano e provincia', 'Brianza e Como', 'Bergamo e Brescia', 'Pavia e Lodi', 'Piemonte', 'Veneto ed Emilia-Romagna'];
