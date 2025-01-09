import React from "react";
import "remixicon/fonts/remixicon.css";

const Locationpannel = ({
  setvehiclepanel,
  setpannelopen,
  suggestions,
  setpickup,
  setdestination,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setpickup(suggestion);
    } else if (activeField === "destination") {
      setdestination(suggestion);
    }
    // setvehiclepanel(true);
    // setpannelopen(false);
  };
  
console.log(suggestions);
  return (
    <div>
      {suggestions.map((elem, idx) => {
        return (
          <div
            key={idx}
            onClick={() => handleSuggestionClick(elem)}
            className="flex border-gray-100 border rounded-xl p-5 active:border-gray-900  gap-4 items-center my-2 justify-start"
          >
            <h2 className="text-2xl flex justify-center items-center bg-[#eee] w-12 h-8  rounded-full p-2 ">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4>{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Locationpannel;
