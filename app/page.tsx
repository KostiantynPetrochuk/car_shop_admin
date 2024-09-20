import { Header, Footer } from "@/components/client";
import {
  Hero,
  BodyTypes,
  Brands,
  Services,
  LatestCars,
  WhyUs,
  FeaturedCars,
  BottomBanner,
} from "@/partials/Client/Home";

import "./page.css";

async function getLatestCars() {
  const res = await fetch("http://localhost:3001/cars?offset=0&limit=5", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  const data = await res.json();
  return data.cars;
}

async function getFeaturedCars() {
  const res = await fetch("http://localhost:3001/featured-cars", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch latest cars");
  }
  return await res.json();
}

export default async function Home() {
  const latestCars = await getLatestCars();
  const { intactCars, damagedCars } = await getFeaturedCars();
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <BodyTypes />
        <Brands />
        <Services />
        <LatestCars initCars={latestCars} />
        <WhyUs />
        <FeaturedCars intact={intactCars} damaged={damagedCars} />
        <BottomBanner />
      </main>
      <Footer />
    </>
  );
}
