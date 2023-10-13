import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import profilePicture from "../assets/profile-picture.png";

export default function Banner({ name, role, desc }) {
  const photo = profilePicture;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  setTimeout(() => {
    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((e) => observer.observe(e));
  }, 100);

  return (
    <div className="bg-snow-100 dark:bg-forest-100 text-snow-400 dark:text-forest-400 h-[60vh] flex flex-wrap-reverse items-center justify-evenly text-center sm:text-left px-20">
      <div className="sm:w-1/2 hide">
        <h2 className="text-4xl md:text-5xl lg:text-6xl py-2 font-bold" style={{ fontFamily: "Lato, sans-serif" }}>
          {name}
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl py-2 italic" style={{ fontFamily: "Montserrat Alternates, sans-serif" }}>
          {role}
        </h3>
        <p className="text-sm md:text-md lg:text-lg py-5 font-bold leading-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {desc}
        </p>
        <div className="text-4xl md:text-5xl text-snow-300 dark:text-forest-300 flex justify-center gap-10 md:gap-16 py-3">
          <a href="https://www.linkedin.com/in/abdan-syak/" target="_blank" rel="noreferrer">
            <p>
              <AiFillLinkedin />
            </p>
          </a>
          <a href="https://www.instagram.com/abdan_sm/" target="_blank" rel="noreferrer">
            <p>
              <AiFillInstagram />
            </p>
          </a>
          <a href="https://github.com/Mamang007" target="_blank" rel="noreferrer">
            <p>
              <AiFillGithub />
            </p>
          </a>
          <a href="https://wa.me/+628118381184?text=Hello%20Abdan%2C%20give%20me%20your%20best%20offer" target="_blank" rel="noreferrer">
            <p>
              <AiOutlineWhatsApp />
            </p>
          </a>
        </div>
      </div>
      <div className="sm:w-1/2 flex justify-center hide">
        <div className="relative object-contain w-48 h-40 md:w-60 md:h-52 lg:w-72 lg:h-64 rounded-full bg-gradient-to-b from-forest-300">
          <img src={photo} className="absolute object-contain w-48 md:w-60 lg:w-72 left-3 -top-7" />
        </div>
      </div>
    </div>
  );
}
