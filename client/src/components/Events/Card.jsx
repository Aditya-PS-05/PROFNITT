import React from "react";

const Card = ({ event }) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl bg-gray-100">
      <div className="w-full">
        <img src={event.image} alt="card-image" className="w-full h-full rounded-t-xl" />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {event.name}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {event.description}
        </p>
      </div>
      {/* <div className="p-6 pt-0">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border-none rounded-2xl bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Read More
        </button>
      </div> */}
    </div>
  );
};

export default Card;
