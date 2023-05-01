import Bishop from "../Assests/Ellipse 3.png";
import Padre from "../Assests/Ellipse 4.png";
import Pres from "../Assests/President.png";
import Vp from "../Assests/VP.png";

export const navLinks = [
  { path: "/", title: "Home" },
  { path: "/about-us", title: "About Us" },
  { path: "/deaneries", title: "Deaneries" },
  { path: "/trivia", title: "Trivia" },
  { path: "/policy", title: "Policy" },
  { path: "/contact-us", title: "Contact Us" },
  { path: "/login", title: "login" },
];

export const mediaLinks = [
  { path: "/", title: "LinkedIn", icon: "../Assests/LinkedIn.svg" },
  { path: "/", title: "Instagram", icon: "../Assests/Instagram.svg" },
  { path: "/", title: "Facebook", icon: "../Assests/facebook.svg" },
  { path: "/", title: "Twitter", icon: "../Assests/twitter.svg" },
];

export const executives = [
  {
    photo: Bishop,
    title: "His Grace, Most Revd. Dr.",
    names: "Alfred Adewale",
    lastName: "MARTINS",
    position: "Archbishop of Lagos",
  },
  {
    photo: Padre,
    title: "Very Rev. Fr. Dr.",
    names: "Gabriel",
    lastName: "ODUNAIYA",
    position: "Chaplain, CYON Lagos ADC",
  },
  {
    photo: Pres,
    names: "Chukwemeka Eze",
    lastName: "ANYIAM-OSIGWE",
    position: "President, CYON Lagos ADC",
  },
  {
    photo: Vp,
    names: "Vivian Ozioma",
    lastName: "IBUODINMA",
    position: "Vice President, CYON Lagos ADC",
  },
];
