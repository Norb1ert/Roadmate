export interface Car {
  id: string;
  model: string;
  productionYear: number;
  price: number;
  availibility: boolean;
  image: string | null;
  description?: string; // Optional
  seats?: number; // Optional
  horsePower?: number; // Optional
  fuelUsage?: number; // Optional
}

export interface SearchParams {
  sort?: "lowest-price" | "highest-price";
  availability?: "true" | "false";
}
