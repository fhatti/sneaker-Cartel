import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#new", label: "New" },
  { href: "#products", label: "Products" },
  { href: "#sale", label: "Sale" },
  { href: "#shop", label: "Shop" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];
export const statistics = [
  { value: "100+", label: "Brands" },
  { value: "12k+", label: "Customers" },
  { value: "4,5k+", label: "Reviews" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Dunk Low Retro",
    price: "119,99 €",
    rating: "4.5",
    reviewsNr: 73,
  },
  {
    imgURL: shoe5,
    name: "Adidas Campus 00s Sneaker",
    price: "119,99 €",
    rating: "4.9",
    reviewsNr: 5213,
  },
  {
    imgURL: shoe6,
    name: "Air Jordan 4",
    price: "209,99 €",
    rating: "5,0",
    reviewsNr: 213,
  },
  {
    imgURL: shoe7,
    name: "Nike Dunk Low Off-White ‘Pine Green’",
    price: "1600 €",
    rating: "4,0",
    reviewsNr: 45,
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "snkr@cartel.com", link: "mailto:snkr@cartel.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
