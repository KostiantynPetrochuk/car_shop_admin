import { Header, Footer, Top } from "@/components/client";
import { SortForm, CatalogBody } from "@/partials/Client/Catalog";

import "./page.css";

async function getInitPageData({
  condition,
  page,
}: {
  condition: string;
  page: number;
}) {
  const offset = (page - 1) * 5;
  const brandsResponse = await fetch("http://localhost:3001/brands", {
    cache: "no-store",
  });
  if (!brandsResponse.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const brandsData = await brandsResponse.json();

  const carsResponse = await fetch(
    `http://localhost:3001/cars?condition=${condition}&limit=5&offset=${offset}`,
    {
      cache: "no-store",
    }
  );
  if (!carsResponse.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const carsData = await carsResponse.json();
  return { brands: brandsData, carsData };
}

const Catalog = async ({
  searchParams,
}: {
  searchParams: { condition?: string; page?: number };
}) => {
  const { brands, carsData } = await getInitPageData({
    condition: searchParams.condition || "",
    page: searchParams.page || 1,
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
