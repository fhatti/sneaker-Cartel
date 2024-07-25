import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components/index";
import ScrollToTop from "react-scroll-to-top";

const Layout = ({ children }) => {
  const location = useLocation();

  // Define the paths where the Navbar/Footer should not be displayed
  const hidePaths = ["/login", "/signUp"];

  // Determine if the Navbar or Footer should be hidden
  const shouldHide = hidePaths.includes(location.pathname);

  return (
    <div className="bg-background">
      {!shouldHide && <Navbar />}
      <main className="">
        {children}
        <ScrollToTop
          className="bg-button sm:fixed shadow-3xl"
          height="20px"
          width="40px"
        />
      </main>
      {!shouldHide && <Footer />}
    </div>
  );
};

export default Layout;
