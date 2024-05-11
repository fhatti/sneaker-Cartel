import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={250} height={50} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-paragraph sm:max-w-sm">
            SNKR Cartel - where exclusivity meets authenticity. Explore our
            underground haven for high-end sneakers. Not your usual plug; we're
            the gateway to your next statement pair.
          </p>
          <div className="flex items-center gap-5 mt-8 mb-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-headline rounded-full hover:bg-button cursor-pointer">
                <img src={icon.src} alt="icon-logo" width={24} height={24} />
              </div>
            ))}
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div>
                <h4 className="text-headline font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-paragraph font-montserrat text-base leading-normal hover:text-button cursor-pointer"
                    >
                      <a href="">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-headline mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
          />
          <p className="text-paragraph">
            SNKR CARTEL 2024. This territory is under our sole jurisdiction{" "}
          </p>
        </div>
        <p className="text-paragraph">Terms & Condiitions</p>
      </div>
    </footer>
  );
};

export default Footer;
