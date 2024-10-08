import { Header, Footer, Top } from "@/components/client";
import { SortForm, CatalogBody } from "@/partials/Client/Catalog";
import { Brand, Model } from "@/types";
import { cookies } from "next/headers";

import "./page.css";

async function getInitPageData({
  condition,
  page,
  brand,
  modelsString,
  bodyTypeString,
  mileageFrom,
  mileageTo,
  fuelType,
  transmission,
  driveType,
  priceFrom,
  priceTo,
  sortBy,
}: {
  condition: string;
  page: number;
  brand: string;
  modelsString: string;
  bodyTypeString: string;
  mileageFrom?: string;
  mileageTo?: string;
  fuelType?: string;
  transmission?: string;
  driveType?: string;
  priceFrom?: string;
  priceTo?: string;
  sortBy?: string;
}) {
  const offset = (page - 1) * 5;
  const brandsResponse = await fetch("http://localhost:3001/brands", {
    cache: "no-store",
  });
  if (!brandsResponse.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const brandsData = await brandsResponse.json();

  const currentBrand = brandsData.brands.find(
    (brandItem: Brand) => brandItem.BrandName === brand
  );
  const currentBrandId = currentBrand ? currentBrand.ID : null;
  let currentModels: Model[] = [];
  if (currentBrand) {
    currentModels = currentBrand.Models.filter((model: Model) =>
      modelsString.includes(model.ModelName)
    )
      .map((model: Model) => model.ID)
      .join(",");
  }

  const brandQueryParam = currentBrandId ? `&brand=${currentBrandId}` : "";
  const modelQueryParam = currentModels ? `&model=${currentModels}` : "";
  const bodyTypeQueryParam = bodyTypeString
    ? `&bodyType=${bodyTypeString}`
    : "";
  const mileageFromQueryParam = mileageFrom
    ? `&mileageFrom=${mileageFrom}`
    : "";
  const mileageToQueryParam = mileageTo ? `&mileageTo=${mileageTo}` : "";
  const fuelTypeQueryParam = fuelType ? `&fuelType=${fuelType}` : "";
  const transmissionQueryParam = transmission
    ? `&transmission=${transmission}`
    : "";
  const driveTypeQueryParam = driveType ? `&driveType=${driveType}` : "";
  const priceFromQueryParam = priceFrom ? `&priceFrom=${priceFrom}` : "";
  const priceToQueryParam = priceTo ? `&priceTo=${priceTo}` : "";
  const sortByQueryParam = sortBy ? `&sortBy=${sortBy}` : "";
  const url = `http://localhost:3001/cars?condition=${condition}${brandQueryParam}${modelQueryParam}${bodyTypeQueryParam}${mileageFromQueryParam}${mileageToQueryParam}${fuelTypeQueryParam}${transmissionQueryParam}${driveTypeQueryParam}${priceFromQueryParam}${priceToQueryParam}${sortByQueryParam}&limit=5&offset=${offset}`;
  const carsResponse = await fetch(url, {
    cache: "no-store",
  });
  if (!carsResponse.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const carsData = await carsResponse.json();
  return { brands: brandsData.brands, carsData };
}

const Catalog = async ({
  searchParams,
}: {
  searchParams: {
    condition?: string;
    page?: number;
    brand?: string;
    model?: string;
    bodyType?: string;
    mileageFrom?: string;
    mileageTo?: string;
    fuelType?: string;
    transmission?: string;
    driveType?: string;
    priceFrom?: string;
    priceTo?: string;
    sortBy?: string;
  };
}) => {
  const cookieData = cookies().get("locale");
  const locale = cookieData?.value || "de";
  const { brands, carsData } = await getInitPageData({
    condition: searchParams.condition || "",
    page: searchParams.page || 1,
    brand: searchParams.brand || "",
    modelsString: searchParams.model || "",
    bodyTypeString: searchParams.bodyType || "",
    mileageFrom: searchParams.mileageFrom || "",
    mileageTo: searchParams.mileageTo || "",
    fuelType: searchParams.fuelType || "",
    transmission: searchParams.transmission || "",
    driveType: searchParams.driveType || "",
    priceFrom: searchParams.priceFrom || "",
    priceTo: searchParams.priceTo || "",
    sortBy: searchParams.sortBy || "",
  });

  const pathes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "All Cars",
      link: null,
    },
  ];

  const currentFilters = {
    condition: searchParams.condition || "",
    brand: searchParams.brand || "",
    model: searchParams.model || "",
    bodyType: searchParams.bodyType || "",
    mileageFrom: searchParams.mileageFrom || "",
    mileageTo: searchParams.mileageTo || "",
    fuelType: searchParams.fuelType || "",
    transmission: searchParams.transmission || "",
    driveType: searchParams.driveType || "",
    priceFrom: searchParams.priceFrom || "",
    priceTo: searchParams.priceTo || "",
    sortBy: searchParams.sortBy || "",
  };

  return (
    <>
      <Header locale={locale} />
      <main className="main">
        <Top pathes={pathes} title={"All Cars"} />
        <CatalogBody
          brands={brands}
          carsData={carsData}
          currentFilters={currentFilters}
        />
      </main>
      <Footer />
    </>
  );
};

export default Catalog;
