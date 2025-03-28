"use client";
import Header from "./components/maincomponents/Header";
import InfoCard from "./components/maincomponents/Info-card";
import ProductCard from "./components/maincomponents/Product-card";
export default function Home() {
  return (
    <main>
      <Header />
      <section className="main-layout">
        <div className="info-card-wrapper">
          <InfoCard />
        </div>
        <div className="product-card-wrapper">
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
