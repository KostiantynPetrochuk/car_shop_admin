export const BODY_TYPES = {
  suv: "suv",
  sedan: "sedan",
  hatchback: "hatchback",
  coupe: "coupe",
  convertible: "convertible",
  van: "van",
  truck: "truck",
};

export const FUEL_TYPES = {
  petrol: { value: "petrol", label: "бензин" },
  diesel: { value: "diesel", label: "дизель" },
  electricity: { value: "electricity", label: "електрика" },
};

export const TRANSMISSION = {
  manual: { value: "manual", label: "ручна" },
  automatic: { value: "automatic", label: "автоматична" },
};

export const DRIVE_TYPE = {
  frontWheel: { value: "front-wheel", label: "передній" },
  rearWheel: { value: "rear-wheel", label: "задній" },
  allWheel: { value: "all-wheel", label: "повний" },
};

export const CONDITION = {
  intact: { value: "intact", label: "цілий" },
  damaged: { value: "damaged", label: "пошкоджений" },
  insurance: { value: "insurance", label: "страховий" },
  rebuilt: { value: "rebuilt", label: "відновлений" },
  new: { value: "new", label: "новий" },
  used: { value: "used", label: "вживаний" },
};
