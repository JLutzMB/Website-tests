export interface VideoProject {
  title: string;
  client: string;
  location: string;
  year: string;
  thumbnail: string;
}

export interface PhotoProject {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  coverImage: string;
  images: string[];
}

export const videoProjects: VideoProject[] = [
  {
    title: "Somewhere in Between",
    client: "Marina Vicintin",
    location: "SP",
    year: "2026",
    thumbnail:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
  },
  {
    title: "Vai Que...",
    client: "Bradesco Seguros",
    location: "SP",
    year: "2026",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  },
  {
    title: "LILLA",
    client: "Mariana Bauer",
    location: "NYC",
    year: "2026",
    thumbnail:
      "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80",
  },
  {
    title: "Virei Minha Mãe",
    client: "Quinto Andar",
    location: "SP",
    year: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80",
  },
  {
    title: "Shaping Ground",
    client: "Ministry of Design",
    location: "NYC",
    year: "2026",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    title: "Echoes of You N.02",
    client: "AVCM",
    location: "SP",
    year: "2023",
    thumbnail:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
  },
];

export const photoProjects: PhotoProject[] = [
  {
    slug: "lavi-spring-collection",
    title: "Spring Collection",
    subtitle: "LaVi",
    location: "NYC",
    year: "2026",
    coverImage:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
    ],
  },
  {
    slug: "dream-machine",
    title: "Dream Machine",
    subtitle: "Athleta Magazine",
    location: "Milan",
    year: "2025",
    coverImage:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80",
    ],
  },
  {
    slug: "mcfish",
    title: "McFish — O Regresso",
    subtitle: "McDonalds",
    location: "Alaska",
    year: "2025",
    coverImage:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80",
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    ],
  },
  {
    slug: "baptism",
    title: "Baptism",
    subtitle: "Documentary Project",
    location: "NYC",
    year: "2024",
    coverImage:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&q=80",
      "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1200&q=80",
      "https://images.unsplash.com/photo-1484291150605-0860ed671425?w=1200&q=80",
    ],
  },
];

export const bio = {
  name: "LUTZ",
  fullName: "João Lutz",
  tagline: "Photographer & Director",
  location: "São Paulo",
  previousLocation: "New York",
  description:
    "LUTZ is a photographer and director working in São Paulo. His work moves through portraiture, fashion, and film — drawn to charged atmospheres and the weight a single frame can hold. Previously based in New York.",
  email: "joaolutz.mb@gmail.com",
  instagram: "____lutz",
  representation: "Crème Company",
  representationRegion: "Brasil",
};
