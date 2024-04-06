export interface CategoriesResponse {
  categories: Categories;
}

export interface Categories {
  href: string;
  items: Category[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface Category {
  href: string;
  id: string;
  icons: Icon[];
  name: string;
}

export interface Icon {
  height: number;
  url: string;
  width: number;
}
