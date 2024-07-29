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
  customer3,
  customer4,
  customer5,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "/new", label: "New" },
  { href: "/products", label: "Products" },
  { href: "/sale", label: "Sale" },
  { href: "/shop", label: "Shop" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/contact-us", label: "Contact" },
];

export const account = [
  { href: "/my-account", label: "My Account" },
  { href: "/orders", label: "Orders" },
  { href: "/settings", label: "Settings" },
]

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
  {
    imgURL: customer3,
    customerName: "Zander Flynn",
    rating: 4.8,
    feedback:
      "Your kicks are fire, and your team's vibe is on point.",
  },
  {
    imgURL: customer4,
    customerName: "Kai Montgomery",
    rating: 5.5,
    feedback:
    "Hey! Had a blast at your sneaker spot! Seriously cool vibes and the staff nailed it. Found my dream kicks! Spreadin' the word!",
  },
  {
    imgURL: customer5,
    customerName: "Seraphina Everly",
    rating: 4.5,
    feedback:
      "Your sneaker shop rocks! Seriously dope selection, and the staff were awesome. ",
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

export const companyMap= [
  {
    date: "sept. 22",
    description:"Founded on the idea of redefining footwear, SNKR CARTEL took its first steps into the world with a vision to marry quality and style seamlessly.",
  },
  {
    date:"feb. 23",
    description:"Stepping into the next phase, SNKR CARTEL expanded its reach, bringing our premium shoes to more eager feet, while staying true to our commitment to excellence.",
  },
  {
    date:"aug. 23",
    description:"Breaking new ground,  introduced innovative features, setting the bar higher for comfort, sustainability, and style, shaping the future of footwear.",
  },
  {
    date:"present",
    description:"Your favourite plug of SNKRS"
  }
]