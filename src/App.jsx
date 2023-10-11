import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={isDarkMode ? "dark" : ""}>
      <Navbar onDarkMode={handleDarkMode} />
      <Banner
        name={"Abdan Syakura"}
        role={"Fullstack Developer."}
        desc={
          "As someone who has a deep passion and interest in web technologies, my career goal is to become a qualified Web Developer. I aspire to combine design creativity with technical skills in developing innovative web solutions that have a positive impact on users."
        }
      />
      <Skill dark={isDarkMode} desc="I learned a lot about fullstack development starting from making responsive web design, RESTful API, and Database Management System. Here are some stacks that I have learned and tried." />
      <Project dark={isDarkMode} />
      <Footer />
    </main>
  );
}
