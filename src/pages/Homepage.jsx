import React, { useState } from "react";
import {
  Popular,
  Sale,
  Services,
  About,
  Reviews,
  Subscribe,
  Hero,
  RoadMap,
} from "./index";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, customClassName }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`padding ${
        isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-5"
      } ${customClassName}`}
    >
      {children}
    </section>
  );
};

const Homepage = () => {
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <AnimatedSection customClassName="bg-paragraph">
        <Popular />
      </AnimatedSection>
      <AnimatedSection customClassName="bg-background">
        <Sale />
      </AnimatedSection>
      <AnimatedSection customClassName="bg-headline">
        <Services />
      </AnimatedSection>
      <AnimatedSection customClassName="">
        <About />
      </AnimatedSection>
      <AnimatedSection customClassName="">
        <RoadMap />
      </AnimatedSection>
      <AnimatedSection customClassName="bg-black">
        <Reviews />
      </AnimatedSection>
      <AnimatedSection customClassName="bg-paragraph">
        <Subscribe />
      </AnimatedSection>
    </main>
  );
};

export default Homepage;
