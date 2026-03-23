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
    desc: string
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
      "Des espaces grand format équipés pour vos conférences et événements d'envergure internationale.",
    heroImage:
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934763/CCI/salles/amphi/amphi_2_raqzt5.jpg',
    card: {
      rooms: 'Amphithéâtre - Emeraude - Rubis - Cristal',
      desc: "Un espace grand format pour vos conférences et événements d'envergure internationale.",
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
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934763/CCI/salles/amphi/amphi_2_raqzt5.jpg',
            alt: 'Amphithéâtre — Vue intérieure',
            span: 'wide',
          },
          {
            id: 2,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934762/CCI/salles/amphi/amphi_1_txvun1.jpg',
            alt: 'Amphithéâtre — Scène',
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '1 103 M²', subtitle: 'de surface' },
          { icon: 'Users', title: '1 070 PLACES', subtitle: 'forme théâtre' },
          { icon: 'Ruler', title: '35,8 × 30,8 M', subtitle: 'dimension de la salle' },
          { icon: 'Ruler', title: '21,8 × 8,9 M', subtitle: "dimension de l'estrade" },
          { icon: 'Presentation', title: '194 M²', subtitle: "d'estrade" },
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
            id: 3,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934783/CCI/salles/cristal/cristal_2_o7thks.jpg',
            alt: 'Cristal — Vue intérieure',
            span: 'wide',
          },
          {
            id: 4,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934782/CCI/salles/cristal/cristal_1_pgxc3g.jpg',
            alt: 'Cristal — Configuration',
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
      desc: 'Un amphithéâtre moderne avec gradins et équipements audiovisuels de pointe.',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934485/CCI/hall-couloir/hall_2_fkcvp2.jpg',
    },
    rooms: [
      {
        key: 'hall',
        label: 'Hall',
        photos: [
          {
            id: 7,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934486/CCI/hall-couloir/hall_4_roptwe.jpg',
            alt: "Espace d'exposition — Podium",
            span: 'wide',
          },
          {
            id: 8,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934485/CCI/hall-couloir/hall_1_a4affu.jpg',
            alt: "Espace d'exposition — Hall",
          },
          {
            id: 9,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934485/CCI/hall-couloir/hall_2_fkcvp2.jpg',
            alt: "Espace d'exposition — Hall",
          },
          {
            id: 10,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934485/CCI/hall-couloir/couloir_1_lrnpfl.jpg',
            alt: "Espace d'exposition — Couloir",
          },
          {
            id: 11,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934485/CCI/hall-couloir/couloir_2_kdhah8.jpg',
            alt: "Espace d'exposition — Couloir",
          },
        ],
        specs: [
          { icon: 'Maximize2', title: '1 200 M²', subtitle: 'de surface' },
          { icon: 'Users', title: '500+', subtitle: 'visiteurs max.' },
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
      'La salle Plénière vous offre un cadre prestigieux pour vos banquets, galas et réceptions dans un espace élégant et raffiné.',
    heroImage:
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934587/CCI/pleniere/pleniere_2_ei4bdq.jpg',
    card: {
      rooms: 'Plenière',
      desc: 'Des espaces modulables et équipés pour vos séminaires et réunions professionnelles.',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934587/CCI/pleniere/pleniere_2_ei4bdq.jpg',
    },
    rooms: [
      {
        key: 'pleniere',
        label: 'Plénière',
        photos: [
          {
            id: 12,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934587/CCI/pleniere/pleniere_2_ei4bdq.jpg',
            alt: 'Salle de banquets — Plénière',
            span: 'large',
          },
          {
            id: 13,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934588/CCI/pleniere/pleniere_4_i4c7ga.jpg',
            alt: 'Salle de banquets — Entrée Plénière',
            span: 'tall',
          },
          {
            id: 14,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934587/CCI/pleniere/pleniere_3_jmsclu.jpg',
            alt: 'Salle de banquets — Couloir',
          },
          {
            id: 15,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934586/CCI/pleniere/pleniere_1_pygkqw.jpg',
            alt: 'Salle de banquets — Plénière',
            span: 'wide',
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
      desc: 'De vastes espaces lumineux pour vos foires, expositions et salons professionnels.',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934817/CCI/saphir-grenat/saphir_1_bpvwhv.jpg',
    },
    rooms: [
      {
        key: 'grenat',
        label: 'Grenat',
        photos: [
          {
            id: 16,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934818/CCI/saphir-grenat/saphir_2_urn0ch.jpg',
            alt: 'Bureau Grenat — Vue intérieure',
            span: 'wide',
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
            id: 17,
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
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934688/CCI/restaurants/zenith/zenith_2_kgi2ua.jpg',
    card: {
      rooms: 'Zenith - Quartz',
      desc: 'Un espace élégant en plein air pour vos cocktails, lancements de produits et soirées de gala.',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934688/CCI/restaurants/zenith/zenith_2_kgi2ua.jpg',
    },
    rooms: [
      {
        key: 'zenith',
        label: 'Zenith',
        photos: [
          {
            id: 20,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934689/CCI/restaurants/zenith/zenith_3_fxksoj.jpg',
            alt: 'Restaurant Zenith — Vue intérieure',
          },
          {
            id: 21,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934688/CCI/restaurants/zenith/zenith_2_kgi2ua.jpg',
            alt: 'Restaurant Zenith — Salle',
            span: 'wide',
          },
          {
            id: 22,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934687/CCI/restaurants/zenith/zenith_1_idzz6p.jpg',
            alt: 'Restaurant Zenith — Terrasse',
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
            id: 18,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934649/CCI/restaurants/quartz/quartz_2_myjibc.jpg',
            alt: 'Restaurant Quartz — Vue intérieure',
            span: 'wide',
          },
          {
            id: 19,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934649/CCI/restaurants/quartz/quartz_1_gyzb2v.jpg',
            alt: 'Restaurant Quartz — Salle',
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

  // ─── Parking ───────────────────────────────────────────
  {
    slug: 'parking',
    name: 'Parking',
    badge: 'Parking sécurisé',
    description:
      'Un vaste parking sécurisé à proximité immédiate du centre pour accueillir vos véhicules en toute sérénité.',
    heroImage:
      'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934549/CCI/parking/parking_vide_2_qizwug.jpg',
    card: {
      rooms: 'Parking',
      desc: 'Un parking sécurisé pour vos véhicules.',
      image:
        'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934549/CCI/parking/parking_vide_2_qizwug.jpg',
    },
    rooms: [
      {
        key: 'parking',
        label: 'Parking',
        photos: [
          {
            id: 23,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934549/CCI/parking/parking_vide_2_qizwug.jpg',
            alt: 'Parking — Vue aérienne',
            span: 'large',
          },
          {
            id: 24,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934548/CCI/parking/parking_voiture_ctryvs.jpg',
            alt: 'Parking — Stationnement',
            span: 'tall',
          },
          {
            id: 25,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934546/CCI/parking/parking_drapeau_dmibyo.jpg',
            alt: 'Parking — Drapeaux',
          },
          {
            id: 26,
            src: 'https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934546/CCI/parking/parkin_decor_ftqdyh.jpg',
            alt: 'Parking — Décoration',
            span: 'wide',
          },
        ],
        specs: [
          { icon: 'Car', title: '500+', subtitle: 'places de parking' },
          { icon: 'Shield', title: '24/7', subtitle: 'surveillance' },
          { icon: 'Crown', title: '50', subtitle: 'places VIP' },
          { icon: 'Lock', title: '100%', subtitle: 'sécurisé' },
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
