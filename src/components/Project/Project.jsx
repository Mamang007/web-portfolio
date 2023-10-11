import ProjectCard from "./ProjectCard";
// import { data } from "../../constants";

import img1 from "../../assets/projectimg/project-1.png";
import img2 from "../../assets/projectimg/project-2.png";
import img3 from "../../assets/projectimg/project-3.png";

/////Customizer T-Shirt Image/////
import shirtImg1 from "../../assets/customizer-img/01.png";
import shirtImg2 from "../../assets/customizer-img/02.png";
import shirtImg3 from "../../assets/customizer-img/03.png";
import shirtImg4 from "../../assets/customizer-img/04.png";
import shirtImg5 from "../../assets/customizer-img/05.png";
import shirtImg6 from "../../assets/customizer-img/06.png";
import shirtImg7 from "../../assets/customizer-img/07.png";
import shirtImg8 from "../../assets/customizer-img/08.png";
import shirtImg9 from "../../assets/customizer-img/09.png";
import shirtImg10 from "../../assets/customizer-img/10.png";
import shirtImg11 from "../../assets/customizer-img/11.png";
import shirtImg12 from "../../assets/customizer-img/12.png";
import shirtImg13 from "../../assets/customizer-img/13.png";
import shirtImg14 from "../../assets/customizer-img/14.png";
import shirtImg15 from "../../assets/customizer-img/15.png";
import shirtImg16 from "../../assets/customizer-img/16.png";
import shirtImg17 from "../../assets/customizer-img/17.png";

/////Game Center Image/////
import gameImg1 from "../../assets/game-img/01.png";
import gameImg2 from "../../assets/game-img/02.png";
import gameImg3 from "../../assets/game-img/03.png";
import gameImg4 from "../../assets/game-img/04.png";
import gameImg5 from "../../assets/game-img/05.png";
import gameImg6 from "../../assets/game-img/06.png";
import gameImg7 from "../../assets/game-img/07.png";
import gameImg8 from "../../assets/game-img/08.png";
import gameImg9 from "../../assets/game-img/09.png";
import gameImg10 from "../../assets/game-img/10.png";
import gameImg11 from "../../assets/game-img/11.png";
import gameImg12 from "../../assets/game-img/12.png";
import gameImg13 from "../../assets/game-img/13.png";
import gameImg14 from "../../assets/game-img/14.png";
import gameImg15 from "../../assets/game-img/15.png";

/////PERN Stack Image/////
import pernImg1 from "../../assets/pern-img/01.png";
import pernImg2 from "../../assets/pern-img/02.png";
import pernImg3 from "../../assets/pern-img/03.png";
import pernImg4 from "../../assets/pern-img/04.png";
import pernImg5 from "../../assets/pern-img/05.png";
import pernImg6 from "../../assets/pern-img/06.png";
import pernImg7 from "../../assets/pern-img/07.png";
import pernImg8 from "../../assets/pern-img/08.png";
import pernImg9 from "../../assets/pern-img/09.png";
import pernImg10 from "../../assets/pern-img/10.png";
import pernImg11 from "../../assets/pern-img/11.png";
import pernImg12 from "../../assets/pern-img/12.png";
import pernImg13 from "../../assets/pern-img/13.png";
import pernImg14 from "../../assets/pern-img/14.png";
import pernImg15 from "../../assets/pern-img/15.png";
import pernImg16 from "../../assets/pern-img/16.png";
import pernImg17 from "../../assets/pern-img/17.png";
import pernImg18 from "../../assets/pern-img/18.png";
import pernImg19 from "../../assets/pern-img/19.png";
import pernImg20 from "../../assets/pern-img/20.png";

export default function Project({ dark }) {
  const data = [
    {
      id: 1,
      title: "Customizer T-Shirt",
      imgUrl: img1,
      stack: ["#React"],
      modalImg: [shirtImg1, shirtImg2, shirtImg3, shirtImg4, shirtImg5, shirtImg6, shirtImg7, shirtImg8, shirtImg9, shirtImg10, shirtImg11, shirtImg12, shirtImg13, shirtImg14, shirtImg15, shirtImg16, shirtImg17],
    },
    {
      id: 2,
      title: "Game Center",
      imgUrl: img2,
      stack: ["#NextJS", "#Tailwind"],
      modalImg: [gameImg1, gameImg2, gameImg3, gameImg4, gameImg5, gameImg6, gameImg7, gameImg8, gameImg9, gameImg10, gameImg11, gameImg12, gameImg13, gameImg14, gameImg15],
    },
    {
      id: 3,
      title: "PERN Stack App",
      imgUrl: img3,
      stack: ["#HTML", "#CSS", "#NodeJs", "#ExpressJS"],
      modalImg: [pernImg1, pernImg2, pernImg3, pernImg4, pernImg5, pernImg6, pernImg7, pernImg8, pernImg9, pernImg10, pernImg11, pernImg12, pernImg13, pernImg14, pernImg15, pernImg16, pernImg17, pernImg18, pernImg19, pernImg20],
    },
  ];

  return (
    <div className="bg-snow-100 dark:bg-forest-100 text-snow-400 dark:text-forest-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={dark ? "#192734" : "#8cb1ce"}
          d="M0,192L34.3,170.7C68.6,149,137,107,206,112C274.3,117,343,171,411,170.7C480,171,549,117,617,112C685.7,107,754,149,823,170.7C891.4,192,960,192,1029,181.3C1097.1,171,1166,149,1234,128C1302.9,107,1371,85,1406,74.7L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
      </svg>
      <h1 className="text-2xl md:text-3xl lg:text-4xl px-16 font-bold uppercase text-center" style={{ fontFamily: "Lato, sans-serif" }}>
        See My Project
      </h1>
      <div className="flex flex-wrap justify-evenly gap-12 py-12">
        {data.map((data) => {
          return <ProjectCard key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
}
