import { Header, Footer, Top } from "@/components/client";
import { SortForm, CatalogBody } from "@/partials/Client/Catalog";
import { Brand, Model } from "@/types";

import "./page.css";

async function getInitPageData({
  condition,
  page,
  brand,
  modelsString,
  bodyTypeString,
}: {
  condition: string;
  page: number;
  brand: string;
  modelsString: string;
  bodyTypeString: string;
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
  const bodyTypeQueryParam = bodyTypeString ? `&bodyType=${bodyTypeString}` : "";
  const url = `http://localhost:3001/cars?condition=${condition}${brandQueryParam}${modelQueryParam}${bodyTypeQueryParam}&limit=5&offset=${offset}`;
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
  };
}) => {
  const { brands, carsData } = await getInitPageData({
    condition: searchParams.condition || "",
    page: searchParams.page || 1,
    brand: searchParams.brand || "",
    modelsString: searchParams.model || "",
    bodyTypeString: searchParams.bodyType || "",
  });

  return (
    <>
      <Header />
      <main className="main">
        <Top />
        <SortForm />
        <CatalogBody brands={brands} carsData={carsData} />
      </main>
      <Footer />
    </>
  );
};

export default Catalog;
