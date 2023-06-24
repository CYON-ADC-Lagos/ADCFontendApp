import Bishop from "../Assests/Ellipse 3.png";
import Padre from "../Assests/rev. fr. gabriel odunaiya.png";
import Pres from "../Assests/President.png";
import Vp from "../Assests/VP.png";
import Padre2 from "../Assests/rev. fr. mark okojie.png";
import Padre3 from "../Assests/rev. fr. matthew placid.png";
import Mtn from "../Assests/mtn.png";
import CardB from "../Assests/cadbury.jpg";
import Client3 from "../Assests/gsk.png";
import PRO from "../Assests/image (3).png";
import DOS from "../Assests/image (4).png";
import HeroImg from "../Assests/hero.png";
import AYV from "../Assests/hero.png";
import AYC from "../Assests/campk.jpeg";
import Hero from "../Assests/camp.jpeg";
import AYD from "../Assests/AYD.jpeg";
import Pius from "../Assests/Pius.png";
import Prince from "../Assests/PRINCE.jpg";
import Exofficio from "../Assests/chijioke.png";
import LEP from "../Assests/LEP01.png";
import Karen from "../Assests/KAREN.png";
import Admin from "../Assests/ELIZAETH.jpg";
import Instagram from "../Assests/instan.png";
import Twitter from "../Assests/bird.png";
import Facebook from "../Assests/facebook.png";
import Link from "../Assests/link.png";
// import Twit from "../Assests/twitter.svg";
import Ayv from "../Assests/AYV.jpeg";

export const navLinks = [
  { path: "/", title: "Home", sub: false },
  { path: "/about-us", title: "About Us", sub: false },
  { path: "/deaneries/", title: "Deaneries", sub: true },
  // { path: "/trivia", title: "Trivia", sub: false },
  { path: "/news", title: "News", sub: false },
  { path: "/contact-us", title: "Contact Us", sub: false },
  // { path: "/login", title: "login", sub: false },
];

export const mediaLinks = [
  { path: "/", title: "LinkedIn", icon: Link },
  {
    path: "https://www.instagram.com/cyonadclagos/",
    title: "Instagram",
    icon: Instagram,
  },
  { path: "/", title: "Facebook", icon: Facebook },
  { path: "https://twitter.com/cyonadclagos", title: "Twitter", icon: Twitter },
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
    photo: Padre2,
    title: "Very Rev. Fr. Dr.",
    names: "Mark",
    lastName: "OKOJIE ",
    position: "Chaplain, CYON Lagos ADC",
  },
  {
    photo: Padre3,
    title: "Very Rev. Fr. Dr.",
    names: "Matthew",
    lastName: "PLACID",
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
  {
    photo: PRO,
    names: "Augustine A",
    lastName: "ONWUDIWE",
    position: "Vice President, CYON Lagos ADC",
  },
  {
    photo: DOS,
    names: "Augustine A",
    lastName: "ONWUDIWE",
    position: "Vice President, CYON Lagos ADC",
  },
  {
    photo: Prince,
    names: "Princewill ",
    lastName: "***",
    position: "Provost",
  },
  {
    photo: Admin,
    names: "Elizabeth ",
    lastName: "***",
    position: "Admin Secretary",
  },
  {
    photo: LEP,
    names: "Christopher ",
    lastName: "***",
    position: "LEP President",
  },
  {
    photo: Karen,
    names: "Karen ",
    lastName: "***",
    position: "LEP Secretary",
  },
  {
    photo: Exofficio,
    names: "Chijoke ",
    lastName: "***",
    position: "Ex-official I",
  },
  {
    photo: Pius,
    names: "Pius",
    lastName: "Eroro",
    position: "Ex-official II",
  },
];

export const heroImage = [
  {
    photo: HeroImg,
    title: "His Grace, Most Revd. Dr.",
  },
  {
    photo: HeroImg,
    title: "Very Rev. Fr. Dr.",
  },
];

export const sliderData = [
  {
    img: Hero,
    // title: "Archdicesan Youth Camp",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique sed. Voluptate consequuntur laudantium perspiciatis,amet magnam unde quis, sed quibusdam.",
    // link: "jjj",
  },
  {
    img: AYV,
    // title: "Archdicesan Youth Vigil",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique sed. Voluptate consequuntur laudantium perspiciatis,amet magnam unde quis, sed quibusdam.",
    // link: "jjj",
  },
  {
    img: AYC,
    // title: "Archdicesan Youth Camp",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique sed. Voluptate consequuntur laudantium perspiciatis,amet magnam unde quis, sed quibusdam.",
    // link: "jjj",
  },
];

export const clientLogos = [
  { name: "MTN", source: Mtn },
  { name: "Cadbury", source: CardB },
  { name: "MTN", source: Mtn },
  { name: "GSK", source: Client3 },
  { name: "MTN", source: Mtn },
  { name: "MTN", source: Mtn },
];

export const events = [
  {
    eflier: Ayv,
    title: "Archdiocesan Youth Vigil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    time: "6:00pm",
    date: "June 2nd, 2023",
    url: "",
    deadline: "18th July, 2023 ",
    host: "Maryland Deandery",
    amount: "#5,000",
    active: 0,
  },
  {
    eflier: AYC,
    title: "Archdiocesan Youth Camp",
    description:
      "The CYON Lagos Archdiocesan 18th Biennial Archdiocesan Youth Convention 2023..",
    date: " Aug 31st - 3rd Sept, 2023 ",
    amount: "#5,000",
    deadline: "18th July, 2023 ",
    vennue: " St Finbarr's Collège, Akoka, Yaba",
    url: "https://forms.gle/wAMKcpMDN6dseUdc9",
    active: 1,
    slogan: "HERE I AM...... SEND ME",
  },
  {
    eflier: AYD,
    title: "Archdiocesan Youth Day(AYD)",
    description: "The 37th Archdiocesan Youth Day 2023",
    // time: "",
    date: "August 13th, 2023 ",
    venue: "St. Gregory College S. W Ikoyi ",
    url: "https://rb.gy/6ogrk6",
    active: 1,
    host: "Island Deanery",
    slogan: "",
    deadline: "30th Of June 2023",
  },
];

export const deaneries = [
  { title: "Agege", value: "agege" },
  { title: "Ajah", value: "ajah" },
  { title: "Apapa", value: "apapa" },
  { title: "Badagry", value: "badagry" },
  { title: "Epe", value: "epe" },
  { title: "Festac", value: "festac" },
  { title: "Iba", value: "iba" },
  { title: "Ijanikin", value: "ijanikin" },
  { title: "Ijede", value: "ijede" },
  { title: "Ikeja", value: "ikeja" },
  { title: "Ipaja", value: "ipaja" },
  { title: "Island", value: "island" },
  { title: "Isolo", value: "isolo" },
  { title: "Lekki", value: "lekki" },
  { title: "Maryland", value: "maryland" },
  { title: "Satellite", value: "satellite" },
  { title: "Surulere", value: "surelere" },
  { title: "Yaba", value: "yaba" },
];

export const deaneryEvents = [
  {
    eflier: "",
    title: "CULTURAL FIESTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    time: "6:00pm",
    date: "June 2nd, 2023",
    url: "",
    host: "CCOR, Magodo,Lagos",
    active: 0,
  },
  {
    eflier: "",
    title: "YOUTH CAMP",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    // time: "",
    date: " Aug 31st - 1st Sept, 2023 ",
    url: "",
    active: 1,
  },
];
