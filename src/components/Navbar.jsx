import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar({ onDarkMode }) {
  return (
    <nav className="bg-snow-100 dark:bg-forest-100 flex justify-between py-8 px-5 md:px-20 xl:px-36 text-lg md:text-2xl">
      <a href="/">
        <h1 className="font-bold italic dark:text-white" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
          abdansyak
        </h1>
      </a>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill onClick={onDarkMode} className="cursor-pointer dark:text-white" />
        </li>
        <li>
          <a className="bg-gradient-to-r from-cyan-500 to-teal-700 text-sm md:text-lg text-white px-4 py-2 rounded-md ml-3 md:ml-8" href="./resume.pdf" target="_blank" rel="noreference">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
