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
} from "@/partials/Home";

import "./page.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <BodyTypes />
        <Brands />
        <Services />
        <LatestCars />
        <WhyUs />
        <FeaturedCars />
        <BottomBanner />
      </main>
      <Footer />
    </>
  );
}
