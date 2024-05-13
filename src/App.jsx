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
  RoadMap,
} from "./pages/index";
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

const App = () => {
  return (
    <div className="bg-background">
      <main className="relative">
        <Navbar />
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
        <AnimatedSection customClassName="bg-paragraph">
          <Reviews />
        </AnimatedSection>
        <AnimatedSection customClassName="">
          <Subscribe />
        </AnimatedSection>
        <Footer />
      </main>
    </div>
  );
};

export default App;
