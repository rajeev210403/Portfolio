import Work1 from "../../src/assets/bugLocalization.jpg";
import Work2 from "../../src/assets/Eduverse.png";
import Work3 from "../../src/assets/FarmConnect.jpg";
import Work4 from "../../src/assets/porfoliopic.png";
import Work5 from "../../src/assets/parkingLot.jpg";

export const projectsData = [
    {
      id: 1,
      image: Work1,
      title: "Bug Localization Tool",
      category: "tool",
      description: "Bug localization tool using deep learning and NLP, which automates the detection of buggy code files based on bug reports.Significantly reduces time and manual effort of developers spend finding bugs in codebases.",
      github: "https://github.com/rajeev210403/Bug-Localization"
    },
    {
      id: 2,
      image: Work2,
      title: "EduVerse",
      category: "web",
      description: "Interactive web application that offers immersive 3D environment with the 3d models. Increases the student interaction and efficiency of learning.The app provides user-friendly controls for exploring complex topics in a gamified and engaging way. It also provides real time chatroom.",
      live: "https://eduverse-frontend.onrender.com/",
      demo: "https://drive.google.com/file/d/1-pJX_ABY-5Wupd8eJps1_oaWlfxbyv5f/view",
      github: "https://github.com/rajeev210403/EduVerse-"
    },
    {
      id: 3,
      image: Work3,
      title: "FarmConnect.",
      category: "app",
      description: "Developed FarmConnect, an app that removes the need for middlemen, making it easier for farmers and customers to connect. Reduces overall cost of the product.",
      demo: "https://drive.google.com/file/d/1v2yA_XiKi50o5KXoIJFgw0RJh9-LUt7E/view",
      github: "https://github.com/rajeev210403/FarmConnect"
    },
    {
      id: 4,
      image: Work4,
      title: "Portfolio Website",
      category: "web",
      github: "https://github.com/rajeev210403/Portfolio"
    },
    {
      id: 5,
      image: Work5,
      title: "Parking Lot",
      category: "tool",
      description: "Designed and developed a parking lot management system using Java. Applied object-oriented programming principles to manage vehicles and parking spots and other features.",
      github: "https://github.com/rajeev210403/Parking-Lot-"
    },
  ];

  export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'tool',
    },
    {
        name: 'web',
    },
  ];