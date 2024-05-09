import React from "react";
import { Navbar, Footer } from "./components/index";
import {
  Popular,
  Sale,
  superQuality,
  Services,
  About,
  Reviews,
  Subscribe,
} from "./pages/index";
const App = () => {
  return (
    <>
      <main className="relative">Nav</main>
      <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
      <section className="padding">PopularProducts</section>
      <section className="padding">Sale</section>
      <section className="padding">SuperQuality</section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">About us</section>
      <section className="bg-background padding">Reviews</section>
      <section className="padding padding-x sm:py-32 py-16  w-full">
        Subscribe
      </section>
      <section className="padding">Footer</section>
    </>
  );
};

export default App;
