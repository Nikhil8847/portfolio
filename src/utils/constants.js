import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiCodechef,
  SiDotnet,
  SiHiveBlockchain,
  SiLeetcode,
  SiMongodb,
} from "react-icons/si";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
  TbBrandCSharp,
  TbSql,
} from "react-icons/tb";
import {
  BiLogoJquery,
  BiLogoPostgresql,
  BiLogoBlender,
  BiLogoTailwindCss,
  BiLogoAngular,
} from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { BsGlobe, BsCodeSlash, BsGit, BsMarkdown } from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
];

export const interestsData = [
  {
    interest: "Problem Solving",
    icon: BsCodeSlash,
  },
  {
    interest: "System Design",
    icon: AiFillCode,
  },
  {
    interest: "Web Development",
    icon: BsGlobe,
  },
  {
    interest: "Blockchain",
    icon: SiHiveBlockchain,
  },
  {
    interest: "3d art",
    icon: BiLogoBlender,
  },
  {
    interest: "Stock Market",
    icon: GiArchiveResearch,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: BiLogoTailwindCss,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Angular",
    icon: BiLogoAngular,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Git",
    icon: BsGit,
  },

  {
    name: "ASP.Net Web APIs",
    icon: SiDotnet,
  },
  {
    name: "SQL Server",
    icon: TbSql,
  },
  {
    name: "Mongo DB",
    icon: SiMongodb,
  },
];

export const workData = [
  {
    company: "Nagarro",
    designation: "Associate SE Trainee",
    duration: "March 2023 - Present",
    companyImg: "nagarro-logo.png",
    description: (
      <>
        <ul>
          <li>
            Worked on ASP.NET MVC, C#, and .NET Framework for developing web
            applications
          </li>
          <li>
            Utilized SQL Server Management Studio and SQL for efficient database
            management and optimization.
          </li>
          <li>
            Implemented JavaScript and AngularJS for enhancing user experience
            and creating dynamic applications
          </li>
          <li>
            Applied design patterns to create modular and maintainable code.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "SkillGeek",
    designation: "C++ Programmer",
    duration: "Jan 2021 - July 2021",
    companyImg: "skillgeek-logo.jpeg",
    description: (
      <>
        <ul>
          <li>
            Helped students solving C++ programming assignments related to
            Object-Oriented Programming and DSA.
          </li>
          <li>Used SDLC and various Design Patterns. Used build systems.</li>
          <li>
            Linux shell, and more advanced technologies during the period.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Task Overflow",
    image: "Task-Overflow",
    link: "https://task-overflow.netlify.app/",
    source: "https://github.com/Sukhseerat-Kaur/Task-Overflow",
  },
  {
    type: "WEB-APP",
    title: "Note Store",
    image: "Note-Taking",
    link: "https://note-store-phi.vercel.app/",
    source: "https://github.com/Nikhil8847/note-store",
  },
  {
    type: "WEB-APP",
    title: "Sorting Visualizer",
    image: "Sorting-Visualizer",
    link: "https://nikhil8847.github.io/sorting-visualizer/",
    source: "https://github.com/Nikhil8847/sorting-visualizer",
  },
  {
    type: "WEB-APP",
    title: "Grocery Store",
    image: "Grocery-Store",
    link: "https://github.com/Nikhil8847/GroceryStore",
    source: "https://github.com/Nikhil8847/GroceryStore",
  },
  {
    type: "PROJECT",
    title: "Route Planning",
    image: "Route-Planning",
    link: "https://github.com/Nikhil8847/Route-Planning-Project",
    source: "https://github.com/Nikhil8847/Route-Planning-Project",
  },
  {
    type: "WEB-APP",
    title: "Result Management App",
    image: "Result-Management",
    link: "https://github.com/Nikhil8847/Result-Management-App",
    source: "https://github.com/Nikhil8847/Result-Management-App",
  },
  {
    type: "WEB-APP",
    title: "NFT Based Warranty",
    image: "Nft-Warranty",
    link: "https://github.com/Nikhil8847/NFT_Based_Warranty",
    source: "https://github.com/Nikhil8847/NFT_Based_Warranty",
  },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/Nikhil8847",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/nikhil--rajput/",
    icon: FaLinkedin,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.codechef.com/users/beast_monarch",
    icon: SiCodechef,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
    color: "orange.700",
  },
  {
    href: "https://leetcode.com/Nikhil123_/",
    icon: SiLeetcode,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
    color: "orange.700",
  },
];

export const query = `
query GetUserArticles($page: Int = 0) {
  user(username: "vaheed") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;
