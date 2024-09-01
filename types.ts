export type Brand = {
  id: string;
  brand_name: string;
  file_name: string;
  models: {
    id: string;
    model_name: string;
  }[];
};

type CarBrand = {
  brand_name: string;
  createdDate: string;
  file_name: string;
  id: number;
  updatedDate: string;
};

export type Feature = {
  category: string;
  createdDate: string;
  feature_name: string;
  id: number;
  updatedDate: string;
};

type CarFeature = {
  createdDate: string;
  feature: Feature;
  id: number;
  updatedDate: string;
};

type Model = {
  createdDate: string;
  id: number;
  model_name: string;
  updatedDate: string;
};

export type Car = {
  body: string;
  brand: CarBrand;
  carFeatures: CarFeature[];
  color: string;
  condition: string;
  createdDate: string;
  cylinder_count: number;
  door_count: number;
  drive_type: string;
  engine_size: string;
  fuel_type: string;
  id: number;
  imageNames: string[];
  mileage: number;
  model: Model;
  transmission: string;
  updatedDate: string;
  vin: string;
  year: number;
};
