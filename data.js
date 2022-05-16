import {
  faCode,
  faEnvelope,
  faDownload,
  faGlobe,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faCodiepie,
} from "@fortawesome/free-brands-svg-icons";

export const icons = {
  faCode,
  faEnvelope,
  faGithub,
  faTwitter,
  faLinkedin,
  faCodiepie,
  faDownload,
  faGlobe,
  faPaperPlane,
};

export const projects = [
  {
    id: 1,
    title: "Breaking Bad",
    subtitle: "React",
    description:"Breaking Bad is a web application built using breaking bad's API.Application is build using React,React hooks and react router.",
    image: "./project-1.gif",
    source: "https://github.com/saibharadwajk3/BREAKING_BAD_API-REACT",
    live:"https://breakingbadk3.netlify.app/"
  },
  {
    id: 2,
    title: "Stock Prediction",
    subtitle: "Python and streamlt",
    description:"Stock prediction is a web application built using python streamlit,yahoo finance and Facebook prophet to forcast stocks filtered on years and company",
    image: "./project-2.gif",
    source: "https://github.com/saibharadwajk3/stock_prediction",
    live:"https://stockpredictionapp3.herokuapp.com/"
  },
  {
    id: 3,
    title: "Weather_Pro",
    subtitle: "javascript and chart.js",
    image: "./project-3.gif",
    description: "Weather Pro is a weather applicaion build using open weather api and chart js.Application displays all the basic weather forcase details",
    source: "https://github.com/saibharadwajk3/WEATHER_PRO",
    live:"https://weather-proo.herokuapp.com/"
  },
  {
    id: 4,
    title: "Marvel Universe",
    subtitle: "javascript and Marvel api",
    image: "./project-4.gif",
    description:"Marvel Universe is a javascript app build using marvel api.App displays name  of the character along with the comics,series and stories they are part of.",
    source: "https://github.com/saibharadwajk3/MARVEL-UNIVERSE_MARVEL-API_J.S",
    live:"https://marvel-universe3k.herokuapp.com/"
  },
];

export const skills = [
  {
    stack: "Front End",
    skills: [
      {
        tech: "HTML&CSS",
        image: "./html&css.png",
      },
      {
        tech: "JavaScript",
        image: "./javascript.png",
      },
      {
        tech: "ReactJS",
        image: "./react.svg",
      },
      {
        tech: "NextJS",
        image: "./Nextjs.png",
      },
    ],
  },
  {
    stack: "Back End",
    skills: [
      {
        tech: "NodeJS",
        image: "node.png",
      },
      {
        tech: "MongoDB",
        image: "mongo.png",
      },
      {
        tech: "Express",
        image: "Expressjs.png",
      },
      {
        tech: "MySql",
        image: "mysql.jpg",
      },
    ],
  },
];
