import React, {useState, useEffect} from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

function CarouselComponent({ datax }) {
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
  //useEffect für autoplay und clean für reseten des timers
  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1);
    }, 8000);
    return () => clearInterval(slider);
  }, [value]);

  return (
    <div
      className="grid place-items-center relative h-screen md:h-auto overflow-hidden"
      style={{ minHeight: "75vh" }}
    >
      {datax.map((item, index) => {
        const { id, title, image, quote, name } = item;

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
            className={`${position} transform md:px-48 mt-8 absolute transition transition-all duration-500 ease-in-out `}
          >
            <div className="w-32 h-32 mx-auto">
              <img
                className="h-full w-full rounded-full object-cover"
                src={image}
                alt={name}
              />
            </div>
            <div className="text-center md:h-40  px-16">
              <h1 className="text-red-400 text-xl">{name}</h1>
              <h2 className="text-lg font-medium">{title}</h2>
              <p className="text-base font-normal leading-8">{quote}</p>
            </div>

            <div className="flex justify-center">
              <FaQuoteRight className="text-red-600 text-5xl mt-8" />
            </div>
          </article>
        );
      })}

      <button
        className="right-0 md:mr-16 mr-4 absolute bg-red-200 p-2 rounded hover:bg-red-400"
        style={{ top: "50%" }}
        onClick={() => {
          setValue(value + 1);
        }}
      >
        <FiChevronRight />
      </button>
      <button
        className="left-0 md:ml-16 ml-4 absolute bg-red-200 p-2 rounded hover:bg-red-400"
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

export default CarouselComponent;
