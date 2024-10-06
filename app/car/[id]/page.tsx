import { Header, Footer, Top } from "@/components/client";
import { Hero, Overview, Features, Related } from "@/partials/Client/Car";
import { cookies } from "next/headers";

import "./page.css";

async function getCarsData(id: string) {
  const carRes = await fetch(`http://localhost:3001/cars/${id}`, {
    cache: "no-store",
  });
  if (!carRes.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const data = await carRes.json();

  const relatedRes = await fetch(
    `http://localhost:3001/cars/brand/${data?.car.BrandId}`,
    {
      cache: "no-store",
    }
  );
  if (!relatedRes.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const relatedData = await relatedRes.json();
  return { car: data.car, related: relatedData.cars };
}

const Car = async ({ params }: { params: { id: string } }) => {
  const cookieData = cookies().get("locale");
  const locale = cookieData?.value || "de";
  const { car, related } = await getCarsData(params.id);
  const currentCar = car;
  const relatedCars = related;
  const pathes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "All Cars",
      link: "/catalog",
    },
    {
      name: currentCar.BrandName,
      link: `/catalog?brand=${currentCar.BrandName}`,
    },
    {
      name: currentCar.ModelName,
      link: `/catalog?brand=${currentCar.BrandName}&model=${currentCar.ModelName}`,
    },
  ];
  return (
    <body>
      <Header locale={locale} />
      <main className="main">
        <Top
          pathes={pathes}
          title={`${currentCar.BrandName} ${currentCar.ModelName} ${currentCar.Year}`}
        />
        <Hero car={currentCar} />
        <Overview car={currentCar} />
        <Features car={currentCar} />
        <Related cars={relatedCars} />
      </main>
      <Footer />
    </body>
  );
};

export default Car;
