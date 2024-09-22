import { Header, Footer, Top } from "@/components/client";
import { SortForm, CatalogBody } from "@/partials/Client/Catalog";

import "./page.css";
import { Brand } from "@/types";

async function getInitPageData({
  condition,
  page,
  brand,
}: {
  condition: string;
  page: number;
  brand: string;
}) {
  const offset = (page - 1) * 5;
  const brandsResponse = await fetch("http://localhost:3001/brands", {
    cache: "no-store",
  });
  if (!brandsResponse.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const brandsData = await brandsResponse.json();

  const currentBrandId = brandsData.brands.find(
    (brandItem: Brand) => brandItem.BrandName === brand
  )?.ID;
  const brandQueryParam = currentBrandId ? `&brand=${currentBrandId}` : "";
  const carsResponse = await fetch(
    `http://localhost:3001/cars?condition=${condition}${brandQueryParam}&limit=5&offset=${offset}`,
    {
      cache: "no-store",
    }
  );
  if (!carsResponse.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const carsData = await carsResponse.json();
  return { brands: brandsData.brands, carsData };
}

const Catalog = async ({
  searchParams,
}: {
  searchParams: { condition?: string; page?: number; brand?: string };
}) => {
  const { brands, carsData } = await getInitPageData({
    condition: searchParams.condition || "",
    page: searchParams.page || 1,
    brand: searchParams.brand || "",
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
