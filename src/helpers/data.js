import Bishop from "../Assests/Ellipse 3.png";
import Padre from "../Assests/rev. fr. gabriel odunaiya.png";
import Pres from "../Assests/President.png";
import Vp from "../Assests/VP.png";
import Padre2 from "../Assests/rev. fr. mark okojie.png";
import Padre3 from "../Assests/rev. fr. matthew placid.png";
import Mtn from "../Assests/sponsors/MTN.jpg";
import LSEF from "../Assests/sponsors/LSETF.png";
import CardB from "../Assests/sponsors/Jobber.png";
import Client3 from "../Assests/sponsors/FMN.png";
import Pride from "../Assests/sponsors/Pride.png";
import PRO from "../Assests/image (3).png";
import DOS from "../Assests/image (4).png";
import HeroImg from "../Assests/hero.png";
// import Ayv from "../Assests/AYV.jpeg";
// import AYC from "../Assests/campk.jpeg";
// import Aya from "../Assests/Aya.jpeg";
// import Hero from "../Assests/camp.jpeg";
import Seminar from "../Assests/seminar.jpeg";
import AYD from "../Assests/lekkiAYD.jpeg";
import Pius from "../Assests/Pius.png";
import Prince from "../Assests/PRINCE.jpg";
import FestacC from "../Assests/Festac Pres.jpeg";
import FestacVC from "../Assests/vc.jpeg";
import FestacSec from "../Assests/sece fes.png";
import FestacChap from "../Assests/Chaplain Festac.jpeg";
import FestacGrp from "../Assests/Festac.jpeg";
import FestacFl from "../Assests/yam.jpeg";
import IsoChap from "../Assests/Deanery/IsoChap.png";
import IsoSec from "../Assests/Deanery/IsoSec.jpeg";
import IsoVc from "../Assests/Deanery/IsoVp.jpeg";
import IsoGrp from "../Assests/Deanery/IsoGrp.png";
import IsoFlier2 from "../Assests/Deanery/Isoflier2.jpeg";
import LekkiCor from "../Assests/Deanery/lekkiCor.jpeg";
import LekkiChap from "../Assests/Deanery/lekkichap.jpeg";
import LekkiSec from "../Assests/Deanery/lekkiSec.jpeg";
import Lekkiflier from "../Assests/Deanery/lekkiflier.jpeg";
import Exofficio from "../Assests/chijioke.png";
import LEP from "../Assests/LEP01.png";
import Karen from "../Assests/KAREN.png";
import Admin from "../Assests/ELIZAETH.jpg";
import Instagram from "../Assests/instan.png";
import Twitter from "../Assests/bird.png";
import Facebook from "../Assests/facebook.png";
import Link from "../Assests/youtube.png";
import News1 from "../Assests/news1.jpeg";
import News2 from "../Assests/news2.jpeg";
import News3 from "../Assests/news3.jpeg";
import News4 from "../Assests/news4.jpeg";
import { RiHome6Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";

export const navLinks = [
  { path: "/", title: "Home", sub: false },
  { path: "/about-us", title: "About Us", sub: false },
  { path: "/deaneries/", title: "Deaneries", sub: true },
  { path: "/AYD", title: "AYD", sub: false },
  { path: "/news", title: "News", sub: false },
  { path: "/contact-us", title: "Contact Us", sub: false },
  // { path: "/admin", title: "Login", sub: false },
  // { path: "/dashboard/home", title: "Dashboard", sub: false },
];

export const privateRoute = [
  {
    path: "/dashboard/home",
    title: "Home",
    sub: false,
    icon: <RiHome6Line className="" />,
  },
  {
    // path: "/dashboard/create-parish",
    title: "Parish",
    sub: true,
    icon: <BsFillHousesFill className="" />,
    subMenu: [
      { path: "/dashboard/create-parish", title: "Create Parish" },
      { path: "/dashboard/parishes", title: "View Parishes" },
    ],
  },
  {
    // path: "/dashboard/create-deanery",
    title: "Deanery",
    subMenu: [
      { path: "/dashboard/create-deanery", title: "Create Deanery" },
      { path: "/dashboard/deaneries", title: "View Deaneries" },
    ],
    sub: true,
    icon: <BsFillHousesFill className="" />,
  },
  {
    path: "/dashboard/home",
    icon: <FiUser className="" />,
    title: "Users",
    sub: false,
  },
  {
    // path: "/dashboard/AYD",
    icon: <MdOutlineExplore />,
    title: "AYD",
    sub: true,
    subMenu: [{ path: "/dashboard/delegates", title: "Delegates" }],
  },
];

export const mediaLinks = [
  {
    path: "https://www.youtube.com/@cyonarchdioceseoflagos7155",
    title: "Youtube",
    icon: Link,
  },
  {
    path: "https://www.instagram.com/cyonadclagos/",
    title: "Instagram",
    icon: Instagram,
  },
  {
    path: "https://www.facebook.com/CyonArchdioceseOfLagos",
    title: "Facebook",
    icon: Facebook,
  },
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
    photo: Pres,
    names: "Chukwemeka",
    lastName: "ANYIAM-OSIGWE",
    position: "President, CYON Lagos ADC",
    title: "Mr.",
  },
  {
    photo: Vp,
    names: "Vivian Ozioma",
    lastName: "Ibuodinma",
    position: "President, CYON Lagos ADC",
    title: "Mr.",
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
    photo: PRO,
    title: "Mr.",

    names: "Augustine A",
    lastName: "ONWUDIWE",
    position: "Public Relations Officer 1",
  },
  {
    photo: DOS,
    title: "Mr.",

    names: "John Ebuke",
    lastName: "ILOBAH",
    position: "Director Of Socials",
  },
  {
    photo: Prince,
    names: "Princewill Ebuka",
    lastName: "Okonkwo",
    position: "Provost",
    title: "Mr.",
  },
  {
    photo: Admin,
    names: "Elizabeth ",
    lastName: "OJIABOR",
    position: "Admin. Secretary/LEP Welfare 2",
    title: "Ms.",
  },
  {
    photo: LEP,
    names: "Christopher ",
    // lastName: "",
    position: "LEP President",
    title: "Mr.",
  },
  {
    photo: Karen,
    names: "Karen ",
    // lastName: "***",
    title: "Ms.",
    position: "LEP Secretary",
  },
  {
    photo: Exofficio,
    names: "Chijoke ",
    lastName: "EZEUGWU",
    position: "Ex-official I",
    title: "Mr.",
  },
  {
    photo: Pius,
    names: "Pius",
    lastName: "Eroro",
    position: "Ex-official II",
    title: "Mr.",
  },
];
export const servicesList = [
  { name: "Content Marketing", value: "contentMarketing" },
  { name: "Influencer Marketing", value: "influencerMarketing" },
  { name: "Digital Analytics", value: "digitalAnalytics" },
  { name: "Social Media Management", value: "socialMediaManagement" },
  { name: "Web & App Development", value: "webAndAppDevelopment" },
  { name: "UI/UX Design", value: "uiUxDesign" },
  { name: "Product Scope & MVP", value: "productScope" },
  { name: "Dedicated Teams", value: "dedicatedTeams" },
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
    img: Seminar,
    title: "Archdicesan Youth Seminar",
    description:
      "Archdiocesan Youth Seminar serves as a platform for young Catholics to deepen their understanding of their faith, discern their vocations, and become active participants in their church and wider community. ",
    link: null,
  },
  // {
  //   img: Hero,
  //   title: "Archdicesan Youth Camp",
  //   description:
  //     "Archdiocesan Youth Camp serves as a unique blend of outdoor adventure, spiritual exploration, and community bonding, providing young Catholics with a memorable and impactful experience .",
  //   link: null,
  // },

  {
    img: AYD,
    title: "Archdicesan Youth Day",
    description:
      " Archdiocesan Youth Day serve as an important  gathering within the Catholic Church, providing young people with opportunities for inspiration, learning, and community building.",
    link: "/AYD",
  },
];

export const clientLogos = [
  { name: "MTN", source: Mtn },
  { name: "Cadbury", source: CardB },
  { name: "GSK", source: Client3 },
  { name: "MTN", source: LSEF },
  { name: "MTN", source: Pride },
];

export const events = [
  {
    eflier: Seminar,
    title: "Archdiocesan Youth Seminar",
    description:
      "The CYON Lagos Archdiocesan Archdiocesan Youth Seminar 2024, themed Leading with purpose",
    time: "9:00am",
    date: "3rd May, 2025",
    url: "",
    // deadline: "14th October, 2023 ",
    host: "Surulere & Yaba Deandery",
    amount: "#3,000",
    active: 0,
    venue: "Regina Mundi Catholic Church Mushin, Lagos",
  },
  // {
  //   eflier: Aya,
  //   title: "Archdiocesan Youth Award",
  //   description: "The CYON Lagos Archdiocesan Archdiocesan Youth Award 2023..",
  //   time: "6:00pm",
  //   date: "***",
  //   url: "",
  //   deadline: "*** ",
  //   host: "Apapa Deandery",
  //   amount: "#5,000",
  //   active: 0,
  //   venue: "Apapa Deanery",
  // },
  // {
  //   eflier: Ayv,
  //   title: "Archdiocesan Youth Vigil",
  //   description:
  //     "The CYON Lagos Archdiocesan Biennial Archdiocesan Youth Vigil 2023..",
  //   time: "6:00pm",
  //   date: "June 2nd, 2023",
  //   url: "",
  //   deadline: "18th July, 2023 ",
  //   host: "Maryland Deandery",
  //   amount: "#5,000",
  //   active: 0,
  //   venue: "St. Agnes Catholic Church, Maryland.",
  // },
  // {
  //   eflier: AYC,
  //   title: "Archdiocesan Youth Camp",
  //   description:
  //     "The CYON Lagos Archdiocesan 18th Biennial Archdiocesan Youth Camp 2023..",
  //   date: " Aug 31st - 3rd Sept, 2023 ",
  //   amount: "#5,000",
  //   deadline: "18th July, 2023 ",
  //   venue: " St Finbarr's Collège, Akoka, Yaba",
  //   url: "https://forms.gle/wAMKcpMDN6dseUdc9",
  //   active: 0,
  //   slogan: "HERE I AM...... SEND ME",
  // },
  {
    eflier: AYD,
    title: "Archdiocesan Youth Day(AYD)",
    description: "The 37th Archdiocesan Youth Day 2023",
    // time: "",
    date: "August, 2024 ",
    // venue: "St. Gregory College S. W Ikoyi ",
    // url: "https://rb.gy/6ogrk6",
    active: 0,
    host: "Isolo Deanery",
    slogan: "",
    deadline: "***",
  },
];

export const deaneries = [
  { title: "Badagry", value: "badagry" },
  { title: "Epe", value: "epe" },
  { title: "Festac", value: "festac" },
  { title: "Isolo", value: "Isolo" },
  { title: "Lekki", value: "lekki" },
  // { title: "Agege", value: "agege" },
  // { title: "Ajah", value: "ajah" },
  // { title: "Apapa", value: "apapa" },
  // { title: "Iba", value: "iba" },
  // { title: "Ijanikin", value: "ijanikin" },
  // { title: "Ijede", value: "ijede" },
  // { title: "Ikeja", value: "ikeja" },
  // { title: "Ipaja", value: "ipaja" },
  // { title: "Island", value: "island" },
  // { title: "Maryland", value: "maryland" },
  // { title: "Satellite", value: "satellite" },
  // { title: "Surulere", value: "surelere" },
  // { title: "Yaba", value: "yaba" },
];

export const deaneryName = [
  { title: "Badagry", value: "badagry" },
  { title: "Epe", value: "epe" },
  { title: "Festac", value: "festac" },
  { title: "Isolo", value: "Isolo" },
  { title: "Lekki", value: "lekki" },
  { title: "Agege", value: "agege" },
  { title: "Ajah", value: "ajah" },
  { title: "Apapa", value: "apapa" },
  { title: "Iba", value: "iba" },
  { title: "Ijanikin", value: "ijanikin" },
  { title: "Ijede", value: "ijede" },
  { title: "Ikeja", value: "ikeja" },
  { title: "Ipaja", value: "ipaja" },
  { title: "Island", value: "island" },
  { title: "Maryland", value: "maryland" },
  { title: "Satellite", value: "satellite" },
  { title: "Surulere", value: "surelere" },
  { title: "Yaba", value: "yaba" },
];

export const parishes = [];

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

export const deanery = [
  {
    id: 1,
    name: "Badagry",
    meeting: "First",
    deanExco: [
      {
        lastName: "Exco ",
        title: "Rev. Fr.",
        names: "Gabriel Osiegbu",
        photo: FestacChap,
        position: "Chaplain",
      },
      {
        lastName: "Exco ",
        names: "Joseph Obodo",
        photo: FestacC,
        title: "Mr.",
        position: "Coordinator",
      },

      {
        lastName: "Exco ",
        names: "Robert Ifeanyi",
        photo: FestacVC,
        title: "Mr.",

        position: "Vice-Coordinator",
      },
      {
        lastName: "Exco ",
        names: "Maria Obinna",
        photo: FestacSec,
        title: "Miss",

        position: "Secretary",
      },
    ],
    parishes: [
      {
        name: "Holy Family Catholic Church",
        meeting: "Second",
        location: "Ajara",
        time: "",
      },
      {
        name: "Sacred Heart Catholic Church ",
        meeting: "Last",
        location: "Badagry",
        time: "",
      },
      {
        name: "St. Andrew's Catholic Church",
        meeting: "Last",
        location: "Kweme Sea-Beach",
        time: "",
      },
      {
        name: "St. Anne's Catholic Church (Chaplaincy)",
        meeting: "Second",
        location: "Ibereko",
        time: "",
      },
      {
        name: "St. Francis Catholic Church ",
        meeting: "Last",
        location: "Apa",
        time: "",
      },
      {
        name: "St. Joseph Catholic Church",
        meeting: "Last",
        location: ", Aradagun",
        time: "",
      },
      {
        name: "St. Leo's Catholic Church, ",
        meeting: "Second",
        location: "Ikoga-Zebbe",
        time: "",
      },
      {
        name: "St. Mark's Catholic Church ",
        meeting: "Last",
        location: " Age-Mowo",
        time: "",
      },
    ],
    group: FestacGrp,
    flier: FestacFl,
    deaneryEvents: [
      {
        eflier: FestacFl,
        title: "NEW YAM FIESTA",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit..",
        time: "6:00pm",
        date: "Sept 10th, 2023",
        url: "",
        host: "",
        active: 0,
      },
    ],
  },
  {
    id: 2,
    name: "Festac",
    meeting: "First",
    deanExco: [
      {
        lastName: "Exco ",
        title: "Rev. Fr.",
        names: "Gabriel Osiegbu",
        photo: FestacChap,
        position: "Chaplain",
      },
      {
        lastName: "Exco ",
        names: "Joseph Obodo",
        photo: FestacC,
        title: "Mr.",
        position: "Coordinator",
      },

      {
        lastName: "Exco ",
        names: "Robert Ifeanyi",
        photo: FestacVC,
        title: "Mr.",

        position: "Vice-Coordinator",
      },
      {
        lastName: "Exco ",
        names: "Maria Obinna",
        photo: FestacSec,
        title: "Miss",

        position: "Secretary",
      },
    ],
    parishes: [
      {
        name: "Holy family Catholic Church",
        meeting: "First",
        location: "",
        time: "",
      },
      {
        name: "Catholic Church Of Annunciation ",
        meeting: "First",
        location: "",
        time: "",
      },
      {
        name: "Our mother of perpetual Help Catholic Church",
        meeting: "First",
        location: "",
        time: "",
      },
      {
        name: "St. Monica Catholic Church",
        meeting: "Second",
        location: "",
        time: "",
      },
      {
        name: "Catholic Church Of Nativity ",
        meeting: "Second",
        location: "",
        time: "",
      },
      {
        name: "Our Lady seat of wisdom Catholic Church",
        meeting: "Second",
        location: "",
        time: "",
      },
      {
        name: "St. Joseph Catholic Church",
        meeting: "Second",
        location: "",
        time: "",
      },
      {
        name: "Catholic Church Of Visitation ",
        meeting: "Fourth",
        location: "",
        time: "",
      },
      {
        name: "St. Stephen Catholic Church",
        meeting: "Fourth",
        location: "",
        time: "",
      },
      {
        name: " Catholic Church Of Presentation",
        meeting: "Fourth",
        location: "",
        time: "",
      },
    ],
    group: FestacGrp,
    flier: FestacFl,
    deaneryEvents: [
      {
        eflier: FestacFl,
        title: "NEW YAM FIESTA",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit..",
        time: "6:00pm",
        date: "Sept 10th, 2023",
        url: "",
        host: "",
        active: 0,
      },
    ],
  },
  {
    id: 3,
    name: "Lekki",
    meeting: "",
    deanExco: [
      {
        lastName: "Exco ",
        names: "",
        photo: LekkiChap,
        title: "Rev. Fr.",
        position: "Chaplain",
      },
      {
        lastName: "Exco ",
        names: "",
        photo: LekkiCor,
        title: "Mr.",
        position: "Coordinator",
      },

      {
        lastName: "Exco ",
        names: "",
        photo: "",
        title: "**",

        position: "Vice-Coordinator",
      },
      {
        lastName: "Exco ",
        names: "***",
        photo: LekkiSec,
        title: "Miss",

        position: "Secretary",
      },
    ],
    parishes: [
      {
        name: "Catholic Church of Epiphany",
        meeting: "First",
        location: "",
        time: "",
      },
      {
        name: "Catholic Church of Divine Mercy",
        meeting: "Second",
        location: "",
        time: "",
      },
      {
        name: " Ave Maria Catholic Church ",
        meeting: "Second",
        location: "Ikate",
        time: "",
      },
      {
        name: "Catholic Church of pentecost",
        meeting: "Second",
        location: "",
        time: "",
      },
      {
        name: "SS Philip and James Catholic Church",
        meeting: "Second",
        location: "",
        time: "",
      },
      {
        name: "Our lady star of the sea Catholic Church",
        meeting: "Second",
        location: "",
        time: "",
      },
      {
        name: "St Therese  Catholic Church",
        meeting: "Second",
        location: "Ikota",
        time: "",
      },
      {
        name: "Catholic Church of Transfiguration ",
        meeting: "Second",
        location: "VGC",
        time: "",
      },
      {
        name: "Stella Maris Catholic Church ",
        meeting: "Second",
        location: "VGC",
        time: "",
      },
    ],
    group: "",
    flier: Lekkiflier,
    deaneryEvents: [
      {
        eflier: Lekkiflier,
        title: "CULTURAL FIESTA",
        description: "Unity in diverse cultural heritage.",
        time: "10:00am",
        date: "5th Nov, 2023",
        url: "",
        host: "Ave Maria Catholic Church, Ikate Lekki,Lagos.",
        active: 1,
      },
    ],
  },
  {
    id: 4,
    name: "Isolo",
    meeting: "Fourth",
    deanExco: [
      {
        lastName: "Exco ",
        title: "Rev. Fr.",
        names: " Ozoh Joseph Nwokeforo",
        photo: IsoChap,
        position: "Chaplain",
      },
      {
        lastName: "Exco ",
        names: "Samuel Chima Okoro",
        photo: LekkiCor,
        title: "Mr.",
        position: "Coordinator",
      },

      {
        lastName: "Exco ",
        names: "Chisom Ogueri",
        photo: IsoVc,
        title: "Mr.",

        position: "Vice-Coordinator",
      },
      {
        lastName: "Exco ",
        names: "Onyinyechi Onwuemeze",
        photo: IsoSec,
        title: "Miss",

        position: "Secretary",
      },
    ],
    parishes: [
      {
        name: "Jesus The Saviour Catholic Church",
        meeting: "First",
        location: "Bucknor",
        time: "",
      },
      {
        name: "Catholic Church of Annunciation",
        meeting: "Second",
        location: "Ori-oke",
        time: "",
      },
      {
        name: " St. Francis Catholic Church ",
        meeting: "Second",
        location: "Idimu",
        time: "",
      },
      {
        name: "St. Lawrence Catholic Church",
        meeting: "Second",
        location: "Paiko, Idimu",
        time: "",
      },
      {
        name: "St. Lawrence Catholic Church",
        meeting: "Second",
        location: "Isheri Olofin",
        time: "",
      },
      {
        name: "Our Lady of Holy Rosary Catholic Church",
        meeting: "Second",
        location: "Arida",
        time: "",
      },
      {
        name: "St. Mary’s Catholic Church",
        meeting: "Third",
        location: "Isolo",
        time: "",
      },
      {
        name: "St. Peter & Paul  ",
        meeting: "Third",
        location: "Oke-Afa",
        time: "",
      },
      {
        name: "St. Peter Catholic Church ",
        meeting: "Fourth",
        location: "Ejigbo",
        time: "",
      },
    ],
    group: IsoGrp,
    flier: Lekkiflier,
    deaneryEvents: [
      {
        eflier: IsoFlier2,
        title: "Bag A Child Campaign",
        description:
          "Help us provide over 100 School Bags an writting materials for kids.",
        time: "",
        date: "",
        url: "",
        host: "",
        active: 2,
      },
    ],
    mediaLinks: [
      { path: "/", title: "LinkedIn", icon: Link },
      {
        path: "https://www.instagram.com/cyonadclagos/",
        title: "Instagram",
        icon: Instagram,
      },
      {
        path: "https://www.facebook.com/CyonArchdioceseOfLagos",
        title: "Facebook",
        icon: Facebook,
      },
      {
        path: "https://twitter.com/cyonadclagos",
        title: "Twitter",
        icon: Twitter,
      },
    ],
  },

  {
    id: 5,
    name: "Epe",
    meeting: "First",
    deanExco: [
      {
        lastName: "Exco ",
        title: "Rev. Fr.",
        names: "Gabriel Osiegbu",
        photo: FestacChap,
        position: "Chaplain",
      },
      {
        lastName: "Exco ",
        names: "Joseph Obodo",
        photo: FestacC,
        title: "Mr.",
        position: "Coordinator",
      },

      {
        lastName: "Exco ",
        names: "Robert Ifeanyi",
        photo: FestacVC,
        title: "Mr.",

        position: "Vice-Coordinator",
      },
      {
        lastName: "Exco ",
        names: "Maria Obinna",
        photo: FestacSec,
        title: "Miss",

        position: "Secretary",
      },
    ],
    parishes: [
      {
        name: "Catholic Church of Annunciation",
        meeting: "",
        location: "Abraham Adesanya",
        time: "",
      },
      {
        name: "Our Lady Mother Of Mercy ",
        meeting: "",
        location: "Abijo",
        time: "",
      },
      {
        name: "Assumption Catholic Church",
        meeting: "",
        location: "Awoyaya",
        time: "",
      },
      {
        name: "Queen Of Apostles Catholic Church",
        meeting: "",
        location: "Lakowe",
        time: "",
      },
      {
        name: "Regina Caeli Catholic Church ",
        meeting: "",
        location: "Bogije",
        time: "",
      },
      {
        name: "St. Pio Catholic Church",
        meeting: "",
        location: "Ayeteju",
        time: "",
      },
      {
        name: "Holy Rosary Catholic Church",
        meeting: "",
        location: "Ibeju",
        time: "",
      },
      {
        name: "St. Theresas Catholic Church ",
        meeting: "",
        location: "Epe",
        time: "",
      },
      {
        name: "Immaculate Conception Catholic Church ",
        meeting: "",
        location: "Ibonwon",
        time: "",
      },
    ],
    group: FestacGrp,
    flier: FestacFl,
    deaneryEvents: [
      {
        eflier: FestacFl,
        title: "NEW YAM FIESTA",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit..",
        time: "6:00pm",
        date: "Sept 10th, 2023",
        url: "",
        host: "",
        active: 0,
      },
    ],
  },
];

export const news = [
  { id: 1, img: News1, title: "National AYD Media Mentions" },
  { id: 2, img: News2, title: "Daily Independent AYD Media Mentions" },
  { id: 3, img: News3, title: "Metro News AYD Media Mentions" },
  { id: 4, img: News4, title: "Photospeak AYD Media Mentions" },
];
