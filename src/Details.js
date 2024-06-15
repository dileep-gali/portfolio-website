// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import Photo from "./assets/Photo2.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/nunet1.jpeg";
import projectImage2 from "./assets/projects/singularity1.jpeg";
import projectImage3 from "./assets/projects/hitachi1.webp";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Dileep Kumar Gali",
  tagline: "I build things for web",
  img: Photo,
  about: `I am a skilled front-end developer with a strong foundation in business analytics, proficient in a variety of programming languages including JavaScript, Python, and SQL.
  My professional goal is to advance my expertise in UI/UX design and full-stack development, staying at the forefront of web development technologies and trends. I aim to leverage my analytical and technical skills in a dynamic organization that values innovation and problem-solving, contributing to projects that have a meaningful impact on business outcomes and user experiences.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/dileep-kumar-gali-1a0677290/",
  github: "https://github.com/dileep-gali",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Globallogic India Pvt Lmtd`,
    Location: "Bengaluru, India",
    Type: "Full Time",
    Duration: "july 2022 - july 2023",
  },
  {
    Position: "Frontend Web Developer",
    Company: `Sanshi Soft Solutions`,
    Location: "Hyderabad, India",
    Type: "Full Time",
    Duration: "May 2020 - June 2022",
  },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Masters in Business Analytics and Infromation Systems",
    Company: "University of South Florida",
    Location: "Tampa, FL",
    Type: "Full Time",
    Duration: "Aug 2023 - Present",
  },
  {
    Position: "Bachelor in Electronics & Communication",
    Company: `Lovely Professional University`,
    Location: "Jalandhar, India",
    Type: "Full Time",
    Duration: "Aug 2016 - May 2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Nunet Airdrop",
    image: projectImage1,
    description: `NuNet is a powerful tool designed to help businesses access computing power and storage from a global network. This means that companies can use computers and storage from all over the world, making their operations more efficient and cost-effective.`,
    techstack: "Typesscript, JavaScript",
    previewLink: "https://nunet-airdrop.singularitynet.io/",
    githubLink: "https://github.com",
  },
  {
    title: "SingularityNET",
    image: projectImage2,
    description: `SingularityNET is a pioneering decentralized AI marketplace powered by blockchain technology. Its core mission is to foster the development of Artificial General Intelligence (AGI) that will drive a beneficial technological Singularity.`,
    techstack: "React.js, JavaScript, Typescript",
    previewLink: "https://dev.singularitynet.io/",
    githubLink: "https://github.com",
  },
  {
    title: "Hitachi Aircon",
    image: projectImage3,
    description: `Hitachi AC Limited leverages cutting-edge technology to provide state-of-the-art air conditioning systems. This includes smart controls, high-efficiency compressors, and eco-friendly refrigerants, ensuring optimal performance and sustainability.`,
    techstack: "React.js, JavaScript, Java",
    previewLink: "https://www.hitachiaircon.com/in/",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hi@example.com",
  phone: "+91 12345 67890",
};
