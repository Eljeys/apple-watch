"use client";
import Header from "./components/maincomponents/Header";
import InfoCard from "./components/maincomponents/Info-card";
export default function Home() {
  return (
    <main>
      <Header />
      <section className="main-layout">
        <InfoCard />
      </section>
    </main>
  );
}
