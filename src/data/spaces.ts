export interface SpacePhoto {
  id: number
  src: string
  alt: string
  span?: 'wide' | 'tall' | 'large'
}

export interface SpaceSpec {
  icon: string
  title: string
  subtitle: string
}

export interface SpaceRoom {
  key: string
  label: string
  photos: SpacePhoto[]
  specs: SpaceSpec[]
}

export interface SpaceConfig {
  slug: string
  name: string
  badge: string
  description: string
  heroImage: string
  card: {
    rooms: string
    image: string
  }
  rooms: SpaceRoom[]
}

export const spacesList: SpaceConfig[] = [
  // ─── Salles de conférence ──────────────────────────────
  {
    slug: 'conferences',
    name: 'Salles de conférence',
    badge: 'Salles de conférence',
    description:
      "Des salles équipées pour vos conférences et événements d'envergure internationale.",
    heroImage:
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934763/CCI/salles/amphi/amphi_2_raqzt5.jpg',
    card: {
      rooms: 'Amphithéâtre - Emeraude - Rubis - Cristal',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934762/CCI/salles/amphi/amphi_1_txvun1.jpg',
    },
    rooms: [
      {
        key: 'amphitheatre',
        label: 'Amphithéâtre',
        photos: [
          {
            id: 1,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774607487/CCI/salles/amphi/amphitheatre-decor_zzgvm7.jpg',
            alt: 'Amphithéâtre décoré',
            span: 'large',
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934763/CCI/salles/amphi/amphi_2_raqzt5.jpg',
            alt: 'Amphithéâtre — Vue intérieure',
            span: 'tall',
          },
          {
            id: 3,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934762/CCI/salles/amphi/amphi_1_txvun1.jpg',
            alt: 'Amphithéâtre — Scène',
            span: 'tall',
          },
          {
            id: 4,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774607487/CCI/salles/amphi/amphitheatre-decor-2_opet7u.jpg',
            alt: 'Amphithéâtre décoré',
            span: 'large',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '1 103 M²', subtitle: 'de surface' },
          { icon: 'Users', title: '1 070 PLACES', subtitle: 'forme théâtre' },
          { icon: 'Ruler', title: '35,8 × 30,8 M', subtitle: 'dimension de la salle' },
          { icon: 'Ruler', title: '21,8 × 8,9 M', subtitle: "dimension de l'estrade" },
          { icon: 'Presentation', title: '194 M²', subtitle: "d'estrade" },
          { icon: 'AirVent', title: 'Climatisation', subtitle: 'en option' },
        ],
      },
      {
        key: 'rubis-emeraude',
        label: 'Rubis - Emeraude',
        photos: [
          {
            id: 5,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934739/CCI/salles/rubis-emeraude/rubis_1_l6mvsv.jpg',
            alt: 'Rubis / Emeraude — Vue intérieure',
            span: 'wide',
          },
          {
            id: 6,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934738/CCI/salles/rubis-emeraude/rubis_2_bfyxf5.jpg',
            alt: 'Rubis / Emeraude — Configuration',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '189 M²', subtitle: 'par salle' },
          { icon: 'Users', title: '150 PLACES', subtitle: 'forme théâtre' },
          { icon: 'Ruler', title: '14 × 13,5 M', subtitle: 'dimensions' },
          { icon: 'Armchair', title: '60 PLACES', subtitle: 'forme U' },
          { icon: 'LayoutGrid', title: '90 PLACES', subtitle: 'chaise + table' },
          { icon: 'SlidersHorizontal', title: 'MODULABLE', subtitle: 'type de salle' },
        ],
      },
      {
        key: 'cristal',
        label: 'Cristal',
        photos: [
          {
            id: 7,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934782/CCI/salles/cristal/cristal_1_pgxc3g.jpg',
            alt: 'Cristal — Vue intérieure',
          },
          {
            id: 8,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934783/CCI/salles/cristal/cristal_2_o7thks.jpg',
            alt: 'Cristal — Configuration',
            span: 'wide',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '288 M²', subtitle: 'de surface' },
          { icon: 'Users', title: '250 PLACES', subtitle: 'forme théâtre' },
          { icon: 'Ruler', title: '20,6 × 14 M', subtitle: 'dimensions' },
          { icon: 'Armchair', title: '90 PLACES', subtitle: 'forme U' },
          { icon: 'LayoutGrid', title: '126 PLACES', subtitle: 'chaise + table' },
          { icon: 'SlidersHorizontal', title: 'MODULABLE', subtitle: 'type de salle' },
        ],
      },
    ],
  },

  // ─── Espace d'exposition ───────────────────────────────
  {
    slug: 'exposition',
    name: "Espace d'exposition",
    badge: "Espace d'exposition",
    description:
      'Un vaste espace modulable pour accueillir vos expositions, foires et salons professionnels dans un cadre moderne et lumineux.',
    heroImage:
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934486/CCI/hall-couloir/hall_4_roptwe.jpg',
    card: {
      rooms: 'Hall - Couloir',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038031/CCI/hall-couloir/hall-vue-podium_raefsj.jpg',
    },
    rooms: [
      {
        key: 'hall',
        label: 'Hall',
        photos: [
          {
            id: 9,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775039584/CCI/hall-couloir/hall-entree-decor_nqta0o.png',
            alt: 'Entrée du hall décoré',
            span: 'wide',
          },
          {
            id: 10,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934485/CCI/hall-couloir/couloir_2_kdhah8.jpg',
            alt: "Espace d'exposition — Couloir",
          },
          {
            id: 11,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934485/CCI/hall-couloir/hall_1_a4affu.jpg',
            alt: "Espace d'exposition — Hall",
          },
          {
            id: 12,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934486/CCI/hall-couloir/hall_4_roptwe.jpg',
            alt: "Espace d'exposition — Podium",
            span: 'wide',
          },
          {
            id: 13,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038031/CCI/hall-couloir/hall-vue-podium_raefsj.jpg',
            alt: "Espace d'exposition — Vue du podium",
          },
          {
            id: 14,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934485/CCI/hall-couloir/hall_2_fkcvp2.jpg',
            alt: "Espace d'exposition — Hall",
          },
          {
            id: 15,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934485/CCI/hall-couloir/couloir_1_lrnpfl.jpg',
            alt: "Espace d'exposition — Couloir",
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '645 M²', subtitle: 'de surface' },
          { icon: 'Ruler', title: '41,4 × 15,6 M', subtitle: 'dimensions' },
          { icon: 'ArrowUpDown', title: '6 M', subtitle: 'hauteur sous plafond' },
          { icon: 'SlidersHorizontal', title: 'MODULABLE', subtitle: 'configuration' },
        ],
      },
    ],
  },

  // ─── Salle de banquets ─────────────────────────────────
  {
    slug: 'banquets',
    name: 'Salle de banquets',
    badge: 'Salle de banquets',
    description:
      'La salle Plénière vous offre un cadre prestigieux pour vos banquets, galas et réceptions dans un espace élégant, raffiné et climatisé.',
    heroImage:
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038185/CCI/pleniere/pleniere-decor_r4k12d.jpg',
    card: {
      rooms: 'Plénière',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038185/CCI/pleniere/pleniere-decor_r4k12d.jpg',
    },
    rooms: [
      {
        key: 'pleniere',
        label: 'Plénière',
        photos: [
          {
            id: 16,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774606646/CCI/pleniere/pleniere-mariage_fmsgbb.jpg',
            alt: 'Plénière décorée pour un mariage',
            span: 'large',
          },
          {
            id: 17,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774606637/CCI/pleniere/pleniere-entree-decor_fwtpuk.jpg',
            alt: 'Entrée de la Plénière décorée',
            span: 'tall',
          },
          {
            id: 18,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934588/CCI/pleniere/pleniere_4_i4c7ga.jpg',
            alt: 'Salle de banquets — Entrée Plénière',
            span: 'tall',
          },
          {
            id: 19,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934587/CCI/pleniere/pleniere_2_ei4bdq.jpg',
            alt: 'Salle de banquets — Plénière',
            span: 'large',
          },
          {
            id: 20,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934587/CCI/pleniere/pleniere_3_jmsclu.jpg',
            alt: 'Salle de banquets — Couloir',
            span: 'wide',
          },
          {
            id: 21,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934586/CCI/pleniere/pleniere_1_pygkqw.jpg',
            alt: 'Salle de banquets — Plénière',
          },
          {
            id: 22,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774606637/CCI/pleniere/pleniere-mariage-2_usahwj.jpg',
            alt: 'Plénière décorée pour un mariage',
          },
          {
            id: 23,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038185/CCI/pleniere/pleniere-decor_r4k12d.jpg',
            alt: 'Plénière décorée pour un mariage',
            span: 'wide',
          },
          {
            id: 24,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774606637/CCI/pleniere/pleniere-decor-2_ihtmn2.jpg',
            alt: 'Plénière décorée pour un congrès',
          },
          {
            id: 25,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774606637/CCI/pleniere/pleniere-decor_lhd8hi.jpg',
            alt: 'Plénière décorée pour un congrès',
          },
          {
            id: 26,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774606637/CCI/pleniere/pleniere-entree-decor-2_zkoe65.jpg',
            alt: 'Entrée de la Plénière décorée',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '1 000 M²', subtitle: 'de surface' },
          { icon: 'Users', title: '1 500 PLACES', subtitle: 'forme théâtre' },
          { icon: 'Ruler', title: '50 × 20 M', subtitle: 'dimensions' },
          { icon: 'Armchair', title: '150 PLACES', subtitle: 'forme U' },
          { icon: 'LayoutGrid', title: '600 PLACES', subtitle: 'chaise + table' },
          { icon: 'SlidersHorizontal', title: 'MODULABLE', subtitle: 'type de salle' },
        ],
      },
    ],
  },

  // ─── Bureaux délégations ───────────────────────────────
  {
    slug: 'bureaux',
    name: 'Bureaux délégations',
    badge: 'Bureaux délégations',
    description:
      'Des bureaux privatifs et fonctionnels pour accueillir vos délégations dans un cadre professionnel et confortable.',
    heroImage:
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934817/CCI/saphir-grenat/saphir_1_bpvwhv.jpg',
    card: {
      rooms: 'Grenat - Saphir',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934817/CCI/saphir-grenat/saphir_1_bpvwhv.jpg',
    },
    rooms: [
      {
        key: 'grenat',
        label: 'Grenat',
        photos: [
          {
            id: 27,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934818/CCI/saphir-grenat/saphir_2_urn0ch.jpg',
            alt: 'Bureau Grenat — Vue intérieure',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '58,5 M²', subtitle: 'de surface' },
          { icon: 'Users', title: '60 PLACES', subtitle: 'forme théâtre' },
          { icon: 'Ruler', title: '9 × 6,5 M', subtitle: 'dimensions' },
          { icon: 'Armchair', title: '26 PLACES', subtitle: 'forme U' },
          { icon: 'LayoutGrid', title: '24 PLACES', subtitle: 'chaise + table' },
          { icon: 'Sofa', title: 'LOUNGE', subtitle: 'type de salle' },
        ],
      },
      {
        key: 'saphir',
        label: 'Saphir',
        photos: [
          {
            id: 28,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934817/CCI/saphir-grenat/saphir_1_bpvwhv.jpg',
            alt: 'Bureau Saphir — Vue intérieure',
            span: 'wide',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '72 M²', subtitle: 'de surface' },
          { icon: 'Users', title: '80 PLACES', subtitle: 'forme théâtre' },
          { icon: 'Ruler', title: '11,1 × 6,5 M', subtitle: 'dimensions' },
          { icon: 'Armchair', title: '30 PLACES', subtitle: 'forme U' },
          { icon: 'LayoutGrid', title: '36 PLACES', subtitle: 'chaise + table' },
          { icon: 'Sofa', title: 'LOUNGE', subtitle: 'type de salle' },
        ],
      },
    ],
  },

  // ─── Restaurants ───────────────────────────────────────
  {
    slug: 'restaurants',
    name: 'Restaurants',
    badge: 'Restaurants',
    description:
      "Des espaces de restauration élégants pour vos cocktails, déjeuners d'affaires et soirées de gala.",
    heroImage:
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038098/CCI/restaurants/zenith/zenith-decor-2_uifz14.jpg',
    card: {
      rooms: 'Zenith - Quartz',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038098/CCI/restaurants/zenith/zenith-decor-2_uifz14.jpg',
    },
    rooms: [
      {
        key: 'zenith',
        label: 'Zenith',
        photos: [
          {
            id: 29,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934689/CCI/restaurants/zenith/zenith_3_fxksoj.jpg',
            alt: 'Restaurant Zenith — Vue intérieure',
          },
          {
            id: 30,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934688/CCI/restaurants/zenith/zenith_2_kgi2ua.jpg',
            alt: 'Restaurant Zenith — Salle',
          },
          {
            id: 31,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934687/CCI/restaurants/zenith/zenith_1_idzz6p.jpg',
            alt: 'Restaurant Zenith — Terrasse',
          },
          {
            id: 32,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038096/CCI/restaurants/zenith/zenith-decor_pnbkkv.jpg',
            alt: 'Restaurant Zenith — Décoration',
            span: 'wide',
          },
          {
            id: 33,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038098/CCI/restaurants/zenith/zenith-decor-2_uifz14.jpg',
            alt: 'Restaurant Zenith — Décoration',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '721 M²', subtitle: 'de surface' },
          { icon: 'Users', title: '150 PLACES', subtitle: 'forme théâtre' },
          { icon: 'Ruler', title: '30,7 × 23,5 M', subtitle: 'dimensions' },
          { icon: 'Armchair', title: '50 PLACES', subtitle: 'forme U' },
          { icon: 'LayoutGrid', title: '300 PLACES', subtitle: 'chaise + table' },
          { icon: 'SlidersHorizontal', title: 'MODULABLE', subtitle: 'type de salle' },
        ],
      },
      {
        key: 'quartz',
        label: 'Quartz',
        photos: [
          {
            id: 34,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934649/CCI/restaurants/quartz/quartz_2_myjibc.jpg',
            alt: 'Restaurant Quartz — Vue intérieure',
          },
          {
            id: 35,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934649/CCI/restaurants/quartz/quartz_1_gyzb2v.jpg',
            alt: 'Restaurant Quartz — Salle',
            span: 'wide',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '209 M²', subtitle: 'de surface' },
          { icon: 'Ruler', title: '15,6 × 13,4 M', subtitle: 'dimensions' },
          { icon: 'Sofa', title: 'RESTAURANT', subtitle: 'type de salle' },
        ],
      },
    ],
  },

  // ─── Parking ───────────────────────────────────────────
  {
    slug: 'parking',
    name: 'Parkings',
    badge: 'Parkings intérieur - extérieur',
    description:
      'Deux vastes parkings sécurisés à proximité immédiate du centre pour accueillir vos véhicules, des salons extérieurs, des foires et des expositions.',
    heroImage:
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038233/CCI/parking/parking-vue-cci_ie37ba.jpg',
    card: {
      rooms: 'Parkings intérieur - extérieur',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038233/CCI/parking/parking-vue-cci_ie37ba.jpg',
    },
    rooms: [
      {
        key: 'parking-interieur',
        label: 'Parking intérieur',
        photos: [
          {
            id: 36,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934549/CCI/parking/parking_vide_2_qizwug.jpg',
            alt: 'Parking intérieur — Vue aérienne',
            span: 'wide',
          },
          {
            id: 37,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934548/CCI/parking/parking_voiture_ctryvs.jpg',
            alt: 'Parking intérieur — Stationnement',
          },
          {
            id: 38,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934546/CCI/parking/parking_drapeau_dmibyo.jpg',
            alt: 'Parking intérieur — Drapeaux',
          },
          {
            id: 39,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1775038233/CCI/parking/parking-vue-cci_ie37ba.jpg',
            alt: 'Parking intérieur — Vue CCI',
            span: 'wide',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '29 000 M²', subtitle: 'surface parking haut' },
          { icon: 'Ruler', title: '20,6 × 14 M', subtitle: 'dimension parking haut' },
          { icon: 'Maximize2', title: '3 800 M²', subtitle: 'surface parking bas' },
          { icon: 'Ruler', title: '65,3 × 53,8 M', subtitle: 'dimension parking bas' },
          { icon: 'Car', title: '700+', subtitle: 'places de parking' },
          { icon: 'Shield', title: '24/7', subtitle: 'surveillance' },
        ],
      },
      {
        key: 'parking-exterieur',
        label: 'Parking extérieur',
        photos: [
          {
            id: 40,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774608717/CCI/parking/parking-exterieur_et9cnx.jpg',
            alt: 'Parking extérieur — Vue CCI',
            span: 'wide',
          },
          {
            id: 41,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774608717/CCI/parking/parking-exterieur-3_gbktuf.jpg',
            alt: 'Parking extérieur — Vue CCI',
          },
          {
            id: 42,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774608717/CCI/parking/parking-exterieur-2_owh5zp.jpg',
            alt: 'Parking extérieur — Vue Route',
          },
          {
            id: 43,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1774608717/CCI/parking/parking-exterieur-4_wo6yel.jpg',
            alt: 'Parking extérieur — Vue Route',
            span: 'wide',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '10 800 M²', subtitle: 'de surface' },
          { icon: 'Ruler', title: '18,6 × 60 M', subtitle: 'dimensions' },
          { icon: 'Car', title: '400+', subtitle: 'places de parking' },
        ],
      },
    ],
  },
]

export const spaces: Record<string, SpaceConfig> = Object.fromEntries(
  spacesList.map((s) => [s.slug, s]),
)

export interface GalleryPhoto extends SpacePhoto {
  category: string
}

export const allGalleryPhotos: GalleryPhoto[] = spacesList.flatMap((s) =>
  s.rooms.flatMap((r) => r.photos.map((p) => ({ ...p, category: s.slug }))),
)

export const galleryFilters: { key: string; label: string }[] = [
  { key: 'all', label: 'Tous les espaces' },
  ...spacesList.map((s) => ({ key: s.slug, label: s.name })),
]
