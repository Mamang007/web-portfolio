import ProjectCard from "./ProjectCard";
import { data } from "../../constants/index";

export default function Project({ dark }) {
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
