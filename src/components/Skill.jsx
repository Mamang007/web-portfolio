import { SiHtml5, SiTailwindcss, SiJavascript, SiNpm, SiNodedotjs, SiPostgresql, SiSwagger, SiReact, SiFirebase, SiNextdotjs, SiJest } from "react-icons/si";

export default function Skill({ dark, desc }) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hide");
  hiddenElements.forEach((e) => observer.observe(e));

  return (
    <div className="bg-snow-200 dark:bg-forest-200 text-snow-400 dark:text-forest-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={dark ? "#15202b" : "#dce5e7"}
          d="M0,192L30,186.7C60,181,120,171,180,170.7C240,171,300,181,360,181.3C420,181,480,171,540,138.7C600,107,660,53,720,42.7C780,32,840,64,900,74.7C960,85,1020,75,1080,69.3C1140,64,1200,64,1260,80C1320,96,1380,128,1410,144L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>
      <h1 className="text-2xl md:text-3xl lg:text-4xl px-16 font-bold uppercase text-center" style={{ fontFamily: "Lato, sans-serif" }}>
        Introduce My Skill
      </h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center p-5 md:gap-7">
        <p className="hide md:w-1/2 flex items-center text-md md:text-1xl lg:text-2xl text-center md:text-right font-semibold py-10" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {desc}
        </p>
        <ul className="hide md:w-1/2 lg:basis-1/3 flex flex-wrap justify-center text-5xl text-snow-300 dark:text-forest-300 gap-10 my-4 md:py-0" style={{ "--delay": "2" }}>
          <li>
            <SiHtml5 />
          </li>
          <li>
            <SiTailwindcss />
          </li>
          <li>
            <SiJavascript />
          </li>
          <li>
            <SiNpm />
          </li>
          <li>
            <SiNodedotjs />
          </li>
          <li>
            <SiPostgresql />
          </li>
          <li>
            <SiSwagger />
          </li>
          <li>
            <SiReact />
          </li>
          <li>
            <SiFirebase />
          </li>
          <li>
            <SiNextdotjs />
          </li>
          <li>
            <SiJest />
          </li>
        </ul>
      </div>
    </div>
  );
}
