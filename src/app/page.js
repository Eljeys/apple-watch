"use client";
import Header from "./components/maincomponents/Header";
import InfoCard from "./components/maincomponents/Info-card";
import ProductCard from "./components/maincomponents/Product-card";
import SelectButton from "./components/subcomponent/buttons/Select-button";
export default function Home() {
  return (
    <main>
      <Header />
      <section className="main-layout">
        <div className="info-card-wrapper">
          <InfoCard />
        </div>
        <section className="product-card-wrapper">
          <ProductCard />
        </section>
        <div className="selec-button-wrapper">
          <SelectButton />
          <SelectButton />
          <SelectButton />
        </div>
      </section>
    </main>
  );
}
