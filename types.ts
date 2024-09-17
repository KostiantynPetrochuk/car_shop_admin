export type Brand = {
  ID: string;
  BrandName: string;
  FileName: string;
  Models: {
    ID: string;
    ModelName: string;
    BrandID: string;
  }[];
};

type CarBrand = {
  BrandName: string;
  fileMame: string;
  ID: number;
};

export type Feature = {
  ID: number;
  Category: string;
  FeatureName: string;
};

type CarFeature = {
  ID: number;
  Category: string;
  FeatureName: string;
};

type Model = {
  createdDate: string;
  id: number;
  model_name: string;
  updatedDate: string;
};

export type Car = {
  BodyType: string;
  BrandId: number;
  Features: CarFeature[];
  Color: string;
  Condition: string;
  Price: number;
  DoorCount: number;
  DriveType: string;
  EngineSize: string;
  FuelType: string;
  ID: number;
  ImageNames: string[];
  Mileage: number;
  ModelName: string;
  Transmission: string;
  VIN: string;
  Year: number;
  BrandName: string;
  CreatedAt: string;
};
