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
        <div>
          <InfoCard />
        </div>
        <section>
          <ProductCard />
        </section>
        <div className="grid col-3 h-fit gap-8 m-auto">
          <SelectButton />
          <SelectButton />
          <SelectButton />
        </div>
      </section>
    </main>
  );
}
