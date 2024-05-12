import React from "react";
import { Navbar, Footer } from "./components/index";
import {
  Popular,
  Sale,
  Services,
  About,
  Reviews,
  Subscribe,
  Hero,
} from "./pages/index";
const App = () => {
  return (
    <div className="bg-background">
      <main className="relative">
        <Navbar />
      </main>
      <section className="xl:padding-l  wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Popular />
      </section>
      <section className="padding">
        <Sale />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="bg-background padding">
        <Reviews />
      </section>
      <section className="padding padding-x sm:py-32 py-16  w-full">
        <Subscribe />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </div>
  );
};

export default App;
