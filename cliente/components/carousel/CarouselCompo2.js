import React, {useState, useEffect} from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

function CarouselCompo2({ datax }) {
  const [value, setValue] = useState(0);


  //useEffect weil rerender bei jedem value und data erwünscht
  useEffect(() => {
    if (value < 0) {
      setValue(datax.length - 1);
    }
    if (value > datax.length - 1) {
      setValue(0);
    }
  }, [value, datax]);


  //useEffect para hacer autoplay autoplay und clean für reseten des timers
  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1);
    }, 8000);
    return () => clearInterval(slider);
  }, [value]);

  return (
    <div
      className="grid place-items-center relative   h-auto overflow-hidden bg-gray-300 "
      style={{ minHeight: "40vh" }}
    >
      {datax.map((item, index) => {
        const { id, title, image, quote, name, avatar } = item;

        let position = "translate-x-full opacity-0";
        if (index === value) {
          position = "translate-x-0";
        }
        if (index === value - 1 || (value === 0 && index === datax.length - 1)) {
          position = "-translate-x-full opacity-0";
        }
        return (
          <article
            key={id}
            className={`${position} w-full h-full  bg-cover bg-center transform md:px-32 lg:px-64 absolute  transition-opacity duration-700 ease-in-out`}
            style={{backgroundImage: `url(${image})`}}
          >
            <div className="w-32 h-32 mx-auto mt-8">
              <img
                className="h-full w-full rounded-full object-cover"
                src={avatar}
                alt={name}
              />
            </div>
            <div className=" text-xs sm:text-lg text-center md:h-40 text-white font-bold px-16  ">
              <h1 className="text-red-500 text-lg ">{name}</h1>
              <h2 className=" ">{title}</h2>
              <p className=" leading-8">{quote}</p>
            </div>

            <div className="h-20 w-full absolute bottom-0 left-0  flex justify-center bg-blue-300 opacity-25 ">
              {/* <FaQuoteRight className="text-red-600 text-5xl mt-4" /> */}
            </div>
          </article>
        );
      })}

      <button
        className="right-0 md:mr-16 mr-4 absolute bg-indigo-200 p-2 rounded hover:bg-indigo-400"
        style={{ top: "50%" }}
        onClick={() => {
          setValue(value + 1);
        }}
      >
        <FiChevronRight />
      </button>
      <button
        className="left-0 ml-4 md:ml-16  absolute bg-indigo-200 p-2 rounded hover:bg-indigo-400"
        style={{ top: "50%" }}
        onClick={() => {
          setValue(value - 1);
        }}
      >
        <FiChevronLeft />
      </button>
      
    </div>
  );
}

export default CarouselCompo2;
