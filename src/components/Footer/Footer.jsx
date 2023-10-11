import { useState } from "react";
import footerImg from "../../assets/megaphone.png";
import styles from "./index.module.css";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Lets collaborate");

  const scriptURL = "https://script.google.com/macros/s/AKfycbwujcTv1bOo1sDVeZ7TrGqZQegRqWMbjZl6SNl48u9RlWvKS_6jvyWDhfDYwG8Rk1OfaQ/exec";

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("Name", name);
    data.append("Email", email);
    data.append("Message", message);

    fetch(scriptURL, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        console.log("Success!", response);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error!", error.message);
      });
  }

  return (
    <div className="bg-snow-100 dark:bg-forest-100 text-snow-400 dark:text-forest-400 mx-auto md:px-10">
      <section className="rounded-t-[50px] bg-snow-200 dark:bg-snow-400 text-center lg:text-left">
        <div className="px-3 py-8">
          <div className="flex flex-wrap justify-center items-center gap-0">
            <div className="flex flex-col items-center text-center md:w-1/2">
              <img src={footerImg} className="w-[60%]" />
              <h1 className="mb-12 text-5xl font-bold italic" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                Say Hello to Me
              </h1>
            </div>
            <div className="mb-0 md:w-1/2 px-5">
              <div className="px-5 rounded-3xl py-4 bg-snow-100 dark:bg-forest-100">
                <form>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className={styles["input-box"]}>
                      <input
                        className="w-full p-1 border-2 border-solid border-[#00dfc4] bg-snow-100 dark:bg-forest-100 text-snow-400 dark:text-forest-400 rounded-md font-[1em] duration-500"
                        name="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <span className="absolute left-0 p-[6px] pointer-events-none font-[0.7em] text-snow-400 dark:text-forest-400 uppercase duration-300">Name</span>
                    </div>
                    <div className={styles["input-box"]}>
                      <input
                        className="w-full p-1 border-2 border-solid border-[#00dfc4] bg-snow-100 dark:bg-forest-100 text-snow-400 dark:text-forest-400 rounded-md font-[1em] duration-500"
                        name="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <span className="absolute left-0 p-[6px] pointer-events-none font-[0.7em] text-snow-400 dark:text-forest-400 uppercase duration-300">Email</span>
                    </div>
                  </div>
                  <div className={styles["textarea-box"]}>
                    <textarea
                      className="w-full p-1 border-2 border-solid border-[#00dfc4] bg-snow-100 dark:bg-forest-100 text-snow-400 dark:text-forest-400 rounded-md font-[1em] duration-500"
                      name="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}></textarea>
                    <span>Say Hello Here...</span>
                  </div>
                  {loading ? (
                    <div className="flex justify-center items-start mb-6 w-full rounded bg-slate-500 py-1">
                      <div className="h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <button onClick={onSubmit} type="submit" className="mb-6 w-full rounded bg-slate-500 px-6 py-2 text-xs font-medium text-white">
                      SUBMIT
                    </button>
                  )}
                </form>
                <div className="text-center">
                  <p>Follow Up Me On</p>
                  <div className="flex pt-4 justify-center text-3xl gap-10">
                    <a href="https://www.linkedin.com/in/abdan-syakura-muqaffi-3403a820b/" target="_blank" rel="noreferrer">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
