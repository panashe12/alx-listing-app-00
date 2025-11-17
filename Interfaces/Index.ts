export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
// interfaces/index.ts
export interface PropertyProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}
