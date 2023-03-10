import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia",
  },
  {
    id: 2,
    icon: "fas fa-wallet fa-fw",
    title: "endless hiking",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia",
  },
  {
    id: 3,
    icon: "fas fa-wallet fa-fw",
    title: "amazing comfort",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia",
  },
];

export const tours = [
  {
    id: 1,
    img:tour1,
    date: "August 25th, 2022",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.",
    icon:"fas fa-map" ,
    country: "China",
    days: 6,
    price: "2100",
  },
  {
    id: 2,
    img: tour2,
    date: "October 1th, 2022",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.",
    icon:"fas fa-map" ,
    country: "Indonesia",
    days: 11,
    price: "1400",
  },
  {
    id: 3,
    img: tour3,
    date: "September 15th, 2022",
    title: "Explore Hong Kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.",
    icon:"fas fa-map" ,
    country: "Hong Kong",
    days: 8,
    price: "5000",
  },
  {
    id: 4,
    img: tour4,
    date: "Deceber 5th, 2022",
    title: "Kenya Highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.",
    icon:"fas fa-map" ,
    country: "kenya",
    days: 20,
    price: "3300",
  },
];
