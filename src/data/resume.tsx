import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mariem Derbali",
  initials: "MD",
  url: "https://mariemderbali.me",
  location: "Tunis",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Full Stack Web and Mobile App Developer, I love building creative and practical soulutions that make a difference.",
  summary:
    "I am a Full Stack Web and Mobile App Developer with a strong track record in building innovative, scalable, and user-centric web and mobile solutions. My expertise spans modern technologies like React, Next.js, Node.js, Laravel, React Native, and SwiftUI. Passionate about continuous learning, I stay updated on emerging technologies. I’m always open to new collaborations and opportunities to contribute my skills while growing professionally.",
  avatarUrl: "/me.jpg",
  skills: [
    "JavaScript",
    "Tailwind CSS",
    "Chakra UI",
    "React",
    "Vue.js",
    "Next.js",
    "Typescript",
    "Laravel",
    "Node.js",
    "Python",
    "Java",
    "Android",
    "React Native",
    "Expo",
    "IOS",
    "Swift",
    "SwiftUI",
    "Kotlin",
    "MongoDB",
    "Firebase",
    "MySQL",
    "MVC",
    "MVVM",
    "Jira",
    "Git",
    "Figma",
    "Docker" 
 
 
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" } 
  ],
  contact: {
    email: "mariem.derbali20@gmail.com",
    tel: "+21620951573",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/CoderZule",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mari99/",
        icon: Icons.linkedin,

        navbar: true,
      },
      CodeForces: {
        name: "CodeForces",
        url: "https://codeforces.com/profile/CoderZule/",
        icon: Icons.codeforces,
        navbar: true,
      },
 
      email: {
        name: "Send Email",
        url: "mailto:mariem.derbali20@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CFPA Takelsa",
      href: "https://avfa.agrinet.tn/centre_de_formation/centre-de-formation-professionnelle-agricole-de-takelsa/",
      badges: [],
      location: "Remote",
      title: "Mobile App Developer Intern",
      logoUrl: "/cfpa_takelsa.png",
      start: "Feb 2024",
      end: "Jul 2024",
      description:
        "Developing a beekeeping mobile app with React Native, integrating real-time weather data via OpenWeatherMap API. Building the backend with NodeJS and Express, utilizing MongoDB Atlas for efficient data storage. Implementing QR code inspections, financial tracking, and statistical analysis features. Using Firebase Storage for media gallery management and Expo for seamless mobile deployment. Creating a web admin portal with ReactJS for user management and deploying the app for scalability and reliability.",
    },
    {
      company: "Topnet",
      badges: [],
      href: "https://www.topnet.tn",
      location: "Hybrid",
      title: "Full Stack Developer Intern",
      logoUrl: "/topnet.png",
      start: "Feb 2022",
      end: "May 2022",
      description:
        "Developing a web platform for internship management using Laravel for the backend, ReactJS for the frontend, and MongoDB Atlas for data storage, handling over 500 internship profiles. Building RESTful APIs to reduce response times by 40% and improve data exchange efficiency. Migrating existing data to a new system, boosting user engagement and satisfaction by 25%.",
    },
   
  ],
  education: [
    {
      school: "Higher Institute of Technological Studies of Rades",
      href: "https://www.isetr.rnu.tn",
      degree: "Master's degree in Mobile Application Development",
      logoUrl: "/rades.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Higher Institute of Technological Studies of Rades",
      href: "https://www.isetr.rnu.tn",
      degree: "Bachelor's degree in Information Technology",
      logoUrl: "/rades.png",
      start: "2019",
      end: "2022",
    },
 
  ],
  projects: [
    {
      title: "apiSurv",
      href: "",
      dates: "Feb 2024 - July 2024",
      active: true,
      description:
        "A cross-platform mobile application featuring a web admin panel for Tunisian beekeepers that simplifies hive and apiary management with features like QR code hive identification, inspection records, task scheduling, harvest tracking, financial monitoring, detailed statistics and bee health management.",
      technologies: [
        "React Native",
        "Node.js",
        "Express.js",
        "React",
        "Expo",
        "JavaScript",
        "Socket.io",
        "MongoDB",
        "Firebase Storage",
   
      ],
      links: [
        {
          type: "Website",
          href: "https://apisurv.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/CoderZule/apiSurv",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/apiSurv.jpg",
      video: "",

    },
    {
      title: "iGold Property",
      href: "",
      dates: "Dec 2023 - Feb 2024",
      active: true,
      description:
        "A sleek iOS app for the Tunisian real estate market, enabling users to easily rent, buy, or invest in properties. With high-resolution photos and videos, it offers an immersive browsing experience, featuring advanced search filters and real-time updates to help users find the best listings across Tunisia.",
      technologies: [
        "SwiftUI",
        "UIKit",
        "MapKit",
        "Firebase",
        "IOS",
        "cocoapods",
        "MVVM",
        "XCTest",
      ],
      links: [
  
        {
          type: "Source",
          href: "https://github.com/CoderZule/iGoldProperty",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/iGoldProperty.jpg",
      video: "",
    },
    {
      title: "Garage V.Parrot",
      href: "",
      dates: "June 2023 - Aug 2023",
      active: true,
      description:
        "A user-friendly web application designed for a French garage, simplifying access to auto repair services and the search for quality used vehicles. The platform allows users to easily schedule repairs, connect with the garage, and browse a curated selection of pre-owned cars, making the buying process smoother and more convenient.",
      technologies: [
        "Laravel",
        "Vue.js",
        "MySQL",
        "Mailtrap"
      ],
      links: [
   
        {
          type: "Source",
          href: "https://github.com/CoderZule/GarageVParrot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/GarageVParrot.jpg",
      video: "",
    },
    
    {
      title: "My Tourism Tunisia",
      href: "",
      dates: "Nov 2022 - Dec 2022",
      active: true,
      description:
        "An Android app designed to guide tourists and enhance their travel experience in Tunisia. It features interactive maps and detailed information on local attractions, helping users navigate and explore the country's rich cultural and historical sites with ease.",
      technologies: [
        "Java",
        "Android",
        "Firebase",
        "SQLite"
    
      ],
      links: [
  
        {
          type: "Source",
          href: "https://github.com/CoderZule/MyTourismTunisia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MyTourismTunisia.jpg",
      video: "",
    },
    
    {
      title: "My Doctors",
      href: "",
      dates: "Mar 2021 - May 2021",
      active: true,
      description:
        "A comprehensive web platform for streamlined medical appointment scheduling. It features an intuitive interface for patients to book, manage, and track their appointments, while enabling healthcare professionals to organize their schedules efficiently, enhancing the overall patient-doctor experience.",
      technologies: [
        "Laravel",
        "Vue.js",
        "MySQL",
        "Mailtrap"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/CoderZule/MyDoctors",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MyDoctors.jpg",
      video:
        "",
    },



  ],
  certifications: [
    {
      title: "Introduction to Software Engineering",
      issuer: "IBM - Coursera",
      date: "Jan 2025",
      image: "/IBM.png",
      pdfUrl: "/Certif1.pdf",
    },
    {
      title: "Meta Hacker Cup 2024",
      issuer: "Meta",
      date: "Oct 2024",
      image: "/Meta.png",
      pdfUrl: "/Certif2.pdf",
    },
    {
      title: "JavaScript Algorithms and Data Structures (Beta)",
      issuer: "freeCodeCamp",
      date: "Sep 2024",
      image: "/freeCodeCamp.png",
      pdfUrl: "/Certif3.pdf",
    },
    {
      title: "Scrum Fundamentals Certified (SFC)",
      issuer: "SCRUMstudy™",
      date: "Mar 2024",
      image: "/SMStudy.png",
      pdfUrl: "/Certif4.pdf",
    },

    {
      title: "UI/UX Design Fundamentals",
      issuer: "Orange Digital Center Tunisie",
      date: "Oct 2022",
      image: "/orange.png",
      pdfUrl: "/Certif5.pdf",
    },
 
    {
      title: "The Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      date: "Oct 2020",
      image: "/google.png",
      pdfUrl: "/Certif6.pdf",
    },
 
  ],
 
} as const;
