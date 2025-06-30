import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mariem Derbali",
  initials: "MD",
  url: "https://mariemderbali.me",
  location: "Tunis",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Full Stack Web and Mobile App Developer passionate about creating innovative and practical solutions that drive real impact.",
  summary:
    "I am a Full Stack Web and Mobile App Developer with a strong track record in building innovative, scalable, and user-centric solutions. My expertise spans modern technologies including React, Next.js, Node.js, Laravel, React Native, and SwiftUI. Passionate about continuous learning, I stay up to date with emerging tech trends to deliver high-impact digital experiences. I’m currently working on a major project set to launch in 2026, combining AI and mobile technologies to address real-world challenges. I’m always open to new collaborations where I can contribute my skills and continue growing professionally.",
  avatarUrl: "Images/me.jpg",
  skills: [
    // Frontend Development
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Next.js",
    "Angular",
    "Tailwind CSS",
    "Chakra UI",
    "Bootstrap",
    "HTML",
    "Figma",

    // Backend Development
    "Node.js",
    "Express",
    "PHP",
    "Laravel",
    "Spring Boot",
    "Python",
    "Java",

    // Mobile Development
    "React Native",
    "Expo",
    "Kotlin",
    "Swift",
    "SwiftUI",
    "UIKit",
    "Android",
    "iOS",

    // Databases
    "MongoDB",
    "CouchDB",
    "MySQL",
    "Firebase",

    // Architecture & Patterns
    "MVC",
    "MVVM",

    // Tools & DevOps
    "Git",
    "GitHub Actions",
    "Docker",
    "Jenkins",
    "Jira",
    "Postman",
    "JUnit"
  ]
  ,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "mariemderbali.dev@gmail.com",
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
        url: "https://www.linkedin.com/in/mderbali/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:mariemderbali.dev@gmail.com",
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
      title: "Mobile App Developer Intern - 🐝 Beekeeping Management App",
      logoUrl: "/Images/cfpa_takelsa.png",
      start: "Feb 2024",
      end: "Jul 2024",
      description: 'Built a cross-platform beekeeping mobile app with React Native and Expo, enabling hive tracking, QR-based inspections, financial logging, and real-time weather insights. Developed a scalable backend with Node.js, Express, and MongoDB Atlas, and integrated Firebase Storage for media management. Also created a React.js web portal for admin control, focusing on performance, scalability, and user-centric design.'
    },
    {
      company: "Topnet",
      badges: [],
      href: "https://www.topnet.tn",
      location: "Hybrid",
      title: "Full-Stack Web Developer Intern – 🎓 Internship Management System",
      logoUrl: "/Images/topnet.png",
      start: "Feb 2022",
      end: "May 2022",
      description:
        "Developed a full-stack web platform for managing over 500 internship profiles using Laravel for the backend, React.js for the frontend, and MongoDB Atlas for scalable data storage. Designed RESTful APIs to improve data exchange efficiency and reduce response times by 40%. Successfully migrated legacy data to the new system, resulting in a 25% boost in user engagement and overall satisfaction. Focused on building a reliable, intuitive, and maintainable system tailored to the needs of students and administrators.",
    }
  ],
  education: [
    {
      school: "Higher Institute of Technological Studies of Rades",
      href: "https://www.isetr.rnu.tn",
      degree: "Master's degree in Mobile Application Development",
      logoUrl: "/Images/rades.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Higher Institute of Technological Studies of Rades",
      href: "https://www.isetr.rnu.tn",
      degree: "Bachelor's degree in Information Technology",
      logoUrl: "/Images/rades.png",
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
      image: "/Images/apiSurv.jpg",
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
        "MVVM architecture",
        "XCTest",
      ],
      links: [

        {
          type: "Source",
          href: "https://github.com/CoderZule/iGoldProperty",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Images/iGoldProperty.jpg",
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
        "MySQL"
      ],
      links: [
        {
          type: "Website",
          href: "https://garagevparrot.up.railway.app/",
          icon: <Icons.globe className="size-3" />,
        },

        {
          type: "Source",
          href: "https://github.com/CoderZule/GarageVParrot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Images/GarageVParrot.jpg",
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
      image: "/Images/MyTourismTunisia.jpg",
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
      
      ],
      links: [
        {
          type: "Website",
          href: "https://mydoctors.up.railway.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/CoderZule/MyDoctors",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Images/myDoctors.jpg",
      video:
        "",
    },

  ],
  certifications: [
    {
      title: "IBM Full Stack Software Developer Professional Certificate",
      issuer: "IBM",
      date: "Apr 2025",
      image: "/Images/IBM.png",
      pdfUrl: "/Certificates/FullStack_Developer_Certif.pdf",
    },
    {
      title: "MongoDB Node.js Developer Path",
      issuer: "MongoDB, Inc",
      date: "Jan 2025",
      image: "/Images/mongodb.jpg",
      pdfUrl: "/Certificates/MongoDB_NodeJS_Certif.pdf",
    },
    {
      title: "Meta Hacker Cup 2024 Participation",
      issuer: "Meta",
      date: "Oct 2024",
      image: "/Images/Meta.png",
      pdfUrl: "/Certificates/Meta_Hacker_Certif.pdf",
    },
    {
      title: "JavaScript Algorithms and Data Structures (Beta)",
      issuer: "freeCodeCamp",
      date: "Sep 2024",
      image: "/Images/freeCodeCamp.png",
      pdfUrl: "/Certificates/freeCodeCamp_JS_Certif.pdf",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Sep 2024",
      image: "/Images/freeCodeCamp.png",
      pdfUrl: "/Certificates/freeCodeCamp_RD_Certif.pdf",
    },
    {
      title: "Scrum For Operations & DevOps Fundamentals Certified (SODFC)",
      issuer: "SCRUMstudy™",
      date: "Apr 2024",
      image: "/Images/SMStudy.png",
      pdfUrl: "/Certificates/SCRUMstudy_SODFC_Certif.pdf",
    },
    {
      title: "Scrum Fundamentals Certified (SFC)",
      issuer: "SCRUMstudy™",
      date: "Mar 2024",
      image: "/Images/SMStudy.png",
      pdfUrl: "/Certificates/SCRUMstudy_SFC_Certif.pdf",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Orange Digital Center Tunisie",
      date: "Oct 2022",
      image: "/Images/orange.png",
      pdfUrl: "/Certificates/OrangeDigitalCenter_UIUX_Certif.pdf",
    },

    {
      title: "The Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      date: "Oct 2020",
      image: "/Images/google.png",
      pdfUrl: "/Certificates/GoogleDigitalGarage_DigitalMarketing_Certif.pdf",
    },

  ],

} as const;
