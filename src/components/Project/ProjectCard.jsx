import { useState } from "react";
import Modal from "./Modal";

export default function ProjectCard({ title, imgUrl, stack, modalImg }) {
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(!isModal);
    isModal ? (document.body.style.overflow = "auto") : (document.body.style.overflow = "hidden");
  };

  return (
    <>
      <div className="w-[80%] sm:w-[60%] md:w-[40%] bg-snow-200 dark:bg-forest-200 rounded-lg shadow-lg p-3 ">
        <div className="flex justify-center aspect-video">
          <img src={imgUrl} className="rounded-t-lg" />
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-bold tracking-wider" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            {title}
          </h1>
          <button onClick={showModal} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800">
            Show Detail
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
        <div className="flex flex-wrap px-6 pt-4 pb-2">
          {stack.map((stack, index) => {
            return (
              <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {stack}
              </span>
            );
          })}
        </div>
      </div>

      {isModal && <Modal showModal={showModal} test="lorem" modalImg={modalImg} title={title} />}
    </>
  );
}
