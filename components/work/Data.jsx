import bugloc from "../../src/assets/bugLocalization.jpg";
import eduverse from "../../src/assets/Eduverse.png";
import farmConnect from "../../src/assets/FarmConnect.jpg";
import collegeAppSys from "../../src/assets/collegeAppointmentSystem.jpg";
import portfol from "../../src/assets/porfoliopic.png";
import parkinglot from "../../src/assets/parkingLot.jpg";

export const projectsData = [
    {
      id: 1,
      image: bugloc,
      title: "Bug Localization Tool",
      category: "tool",
      description: "Developed a transformer-based deep learning model that automates bug localization by analyzing bug reports and source code files, identifying and ranking the top 10 files most likely to contain the bug. Significantly reduces time and manual effort of developers spend finding bugs in codebases.",
      github: "https://github.com/rajeev210403/Bug-Localization"
    },
    {
      id: 2,
      image: eduverse,
      title: "EduVerse 3D Web",
      category: "web",
      description: "Interactive web app delivering immersive 3D learning experiences through integrated 3D models, enhancing student engagement and learning efficiency. Implemented secure user authentication and a chat system supporting group and personal interactions, Implemented chatbot.",
      live: "https://eduverse-frontend.onrender.com/",
      demo: "https://drive.google.com/file/d/1-pJX_ABY-5Wupd8eJps1_oaWlfxbyv5f/view",
      github: "https://github.com/rajeev210403/EduVerse-"
    },
    {
      id: 3,
      image: farmConnect,
      title: "FarmConnect.",
      category: "app",
      description: "Developed a farmer-buyer marketplace app eliminating middlemen to reduce product costs. Designed a multilingual AI chatbot using OpenAI API, with location and category-based search features across five product categories. Integrated Firebase for managing profiles and product listings.",
      demo: "https://drive.google.com/file/d/1v2yA_XiKi50o5KXoIJFgw0RJh9-LUt7E/view",
      github: "https://github.com/rajeev210403/FarmConnect"
    },
    {
      id: 4,
      image: collegeAppSys,
      title: "College Appointment System.",
      category: "backend",
      description: "Developed a college appointment system backend with APIs to enable professors to manage availability and students to book appointments. Developed 8 API endpoints",
      github: "https://github.com/rajeev210403/College_Appointment_System"
    },
    {
      id: 5,
      image: portfol,
      title: "Portfolio Website",
      category: "web",
      github: "https://github.com/rajeev210403/Portfolio"
    },
    {
      id: 6,
      image: parkinglot,
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
    {
      name: 'app',
    },
    {
      name: 'backend',
    },
  ];