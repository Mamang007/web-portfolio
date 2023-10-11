export default function Modal({ showModal, modalImg, title }) {
  return (
    <div className="fixed z-10 h-full w-full left-0 top-0 flex justify-center items-center">
      <div className="relative">
        <div className="bg-black w-screen h-screen opacity-75" onClick={showModal}></div>
        <div className="absolute top-0 bottom-0 right-0 left-0 m-auto bg-white rounded shadow-lg w-[80%] aspect-square md:w-[40%]">
          <div className="border-b px-4 py-2">
            <h1 className="text-2xl font-bold tracking-wider" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              {title}
            </h1>
            <div className="flex overflow-auto">
              {modalImg.map((img, index) => {
                return (
                  <>
                    <img key={index} src={img} />
                  </>
                );
              })}
            </div>
          </div>
          {/* <div className="p-3">Lorem ipsum dolor, sit amet consecturer adipisicing elit.</div> */}
          <div className="flex justify-end items-center w-100 border-t p-3">
            <button onClick={showModal} className="bg-red-700 hover:bg-red-700 py-2 px-5 rounded text-white">
              Oke
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
