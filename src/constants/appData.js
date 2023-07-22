import {
  faPager,
  faPaintBrush,
  faKeyboard,
  faDatabase,
  faCreditCard,
  faPhone,
  faMapLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAndroid,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../assets";
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const socialMedia = [
  {
    id: "facebook",
    name: "Facebook",
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com",
  },
  {
    id: "linkedind",
    name: "Linkedind",
    icon: faLinkedin,
    url: "https://www.linkedind.com",
  },
  {
    id: "youtube",
    name: "Youtube",
    icon: faYoutube,
    url: "https://www.youtube.com",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: faTwitter,
    url: "https://www.twitter.com",
  },
];
export const skillBarInfo = [
  {
    id: "html",
    title: "html",
    process: 80,
    style: "bg-[#2980b9] w-[80%]",
  },
  {
    id: "css",
    title: "css",
    process: 70,
    style: "bg-[#f1c40f] w-[70%]",
  },
  {
    id: "js",
    title: "javascript",
    process: 75,
    style: "bg-[#BDC581] w-[75%]",
  },
  {
    id: "React",
    title: "reactjs",
    process: 60,
    style: "bg-[#27ae60] w-[60%]",
  },
  {
    id: "photoshop",
    title: "photoshop",
    process: 70,
    style: "bg-[#d35400] w-[70%]",
  },
  {
    id: "illustrator",
    title: "illustrator",
    process: 80,
    style: "bg-[#8e44ad] w-[80%]",
  },
];

export const services = [
  {
    id: "design",
    title: "Design",
    desciption: "Lorem ipsum, dolor sit amet consectetur.",
    icon: faPaintBrush,
    style: "border-[#2980b9]",
  },
  {
    id: "website",
    title: "Build Websites",
    desciption: "Lorem ipsum, dolor sit amet consectetur.",
    icon: faPager,
    style: "border-[#f1c40f]",
  },
  {
    id: "database",
    title: "Manage Databases",
    desciption: "Lorem ipsum, dolor sit amet consectetur.",
    icon: faDatabase,
    style: "border-[#BDC581]",
  },
  {
    id: "android",
    title: "Android Apps",
    desciption: "Lorem ipsum, dolor sit amet consectetur.",
    icon: faAndroid,
    style: "border-[#27ae60]",
  },
  {
    id: "UiDesign",
    title: "Ui Design",
    desciption: "Lorem ipsum, dolor sit amet consectetur.",
    icon: faCreditCard,
    style: "border-[#d35400]",
  },
  {
    id: "text",
    title: "Edit Texts",
    desciption: "Lorem ipsum, dolor sit amet consectetur.",
    icon: faKeyboard,
    style: "border-[#8e44ad]",
  },
];
export const education = [
  {
    id: "edu1",
    date: "2022-2023",
    title: "Web development",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita maiores ullam voluptatum a nulla aperiam enim eveniet adipisci ipsum.",
  },
  {
    id: "edu2",
    date: "2022-2023",
    title: "Web development",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita maiores ullam voluptatum a nulla aperiam enim eveniet adipisci ipsum.",
  },
  {
    id: "edu3",
    date: "2022-2023",
    title: "Web development",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita maiores ullam voluptatum a nulla aperiam enim eveniet adipisci ipsum.",
  },
  {
    id: "edu4",
    date: "2022-2023",
    title: "Web development",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita maiores ullam voluptatum a nulla aperiam enim eveniet adipisci ipsum.",
  },
  {
    id: "edu5",
    date: "2022-2023",
    title: "Web development",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita maiores ullam voluptatum a nulla aperiam enim eveniet adipisci ipsum.",
  },
  {
    id: "edu6",
    date: "2022-2023",
    title: "Web development",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita maiores ullam voluptatum a nulla aperiam enim eveniet adipisci ipsum.",
  },
];
export const projects = [
  {
    id: "project1",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    img: project1,
  },
  {
    id: "project2",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    img: project2,
  },
  {
    id: "project3",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    img: project3,
  },
  {
    id: "project4",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    img: project4,
  },
  {
    id: "project5",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    img: project5,
  },
  {
    id: "project6",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet consectetur",
    img: project6,
  },
];

export const contact = [
  {
    id: "phone",
    icon: faPhone,
    info: "+111 111111111",
    style: "border-[#2980b9]",
  },
  {
    id: "email",
    icon: faEnvelope,
    info: "exemple@gmail.com",
    style: "border-[#f1c40f]",
  },
  {
    id: "adress",
    icon: faMapLocation,
    info: "New York, United States",
    style: "border-[#8e44ad]",
  },
];
