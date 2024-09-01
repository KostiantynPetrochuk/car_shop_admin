import { Car } from "@/types";

type OverviewDataItem = {
  src: string;
  label: string;
  value: keyof Car;
};

export const overviewData: OverviewDataItem[] = [
  { src: "/img/overview_body.svg", label: "Тип кузову:", value: "body" },
  { src: "/img/overview_mileage.svg", label: "Пробіг:", value: "mileage" },
  { src: "/img/overview_fuel.svg", label: "Тип пального:", value: "fuel_type" },
  { src: "/img/overview_year.svg", label: "Рік:", value: "year" },
  {
    src: "/img/overview_transmission.svg",
    label: "Коробка передач:",
    value: "transmission",
  },
  {
    src: "/img/overview_drive_type.svg",
    label: "Привід:",
    value: "drive_type",
  },
  { src: "/img/overview_condition.svg", label: "Стан:", value: "condition" },
  {
    src: "/img/overview_engine.svg",
    label: "Об'єм двигуна:",
    value: "engine_size",
  },
  {
    src: "/img/overview_door.svg",
    label: "Кількість дверей:",
    value: "door_count",
  },
  {
    src: "/img/overview_cylinder.svg",
    label: "Кількість циліндрів:",
    value: "cylinder_count",
  },
  { src: "/img/overview_color.svg", label: "Колір:", value: "color" },
  { src: "/img/overview_vin.svg", label: "VIN:", value: "vin" },
];

export type ComfortTitlesKeys =
  | "interior"
  | "exterior"
  | "safety"
  | "comfort_convenience";
