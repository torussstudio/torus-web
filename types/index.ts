export interface NavLink {
  label: string;
  href: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
}

export interface ShopItem {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}