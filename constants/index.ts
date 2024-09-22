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
  intact: { value: "intact", label: { en: "intact", ua: "цілий" } },
  damaged: { value: "damaged", label: { en: "damaged", ua: "пошкоджений" } },
  insurance: {
    value: "insurance",
    label: { en: "insurance", ua: "страховий" },
  },
  rebuilt: { value: "rebuilt", label: { en: "rebuilt", ua: "відновлений" } },
  new: { value: "new", label: { en: "new", ua: "новий" } },
  used: { value: "used", label: { en: "used", ua: "вживаний" } },
};

export const LABELS = {
  BodyType: {
    suv: { ua: "позашляховик", en: "suv", de: "suv" },
    sedan: { ua: "седан", en: "sedan" },
    hatchback: { ua: "хетчбек", en: "hatchback" },
    coupe: { ua: "купе", en: "coupe" },
    convertible: { ua: "кабріолет", en: "convertible" },
    van: { ua: "фіргон", en: "van" },
    truck: { ua: "вантажівка", en: "truck" },
  },
  Transmission: {
    manual: { ua: "ручна", en: "manual" },
    automatic: { ua: "автоматична", en: "automatic" },
  },
  FuelType: {
    petrol: { en: "petrol", ua: "бензин" },
    diesel: { en: "diesel", ua: "дизель" },
    electricity: { en: "electricity", ua: "електрика" },
  },
  DriveType: {
    frontWheel: { en: "front-wheel", ua: "передній" },
    rearWheel: { en: "rear-wheel", ua: "задній" },
    allWheel: { en: "all-wheel", ua: "повний" },
  },
  Condition: {
    intact: { en: "intact", ua: "цілий" },
    damaged: { en: "damaged", ua: "пошкоджений" },
    insurance: { en: "insurance", ua: "страховий" },
    rebuilt: { en: "rebuilt", ua: "відновлений" },
    new: { en: "new", ua: "новий" },
    used: { en: "used", ua: "вживаний" },
  },
  Color: {
    white: { en: "white", de: "weiß", ua: "білий" },
    black: { en: "black", de: "schwarz", ua: "чорний" },
    gray: { en: "gray", de: "grau", ua: "сірий" },
    silver: { en: "silver", de: "silber", ua: "сріблястий" },
    red: { en: "red", de: "rot", ua: "червоний" },
    blue: { en: "blue", de: "blau", ua: "синій" },
    brown: { en: "brown", de: "braun", ua: "коричневий" },
    green: { en: "green", de: "grün", ua: "зелений" },
    yellow: { en: "yellow", de: "gelb", ua: "жовтий" },
    orange: { en: "orange", de: "orange", ua: "помаранчевий" },
    gold: { en: "gold", de: "gold", ua: "золотий" },
    beige: { en: "beige", de: "beige", ua: "бежевий" },
  },
};
