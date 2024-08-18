export type Brand = {
  id: string;
  brand_name: string;
  file_name: string;
  models: {
    id: string;
    model_name: string;
  }[];
};
