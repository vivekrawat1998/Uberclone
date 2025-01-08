import React from "react";
import "remixicon/fonts/remixicon.css";

const Locationpannel = ({ setvehiclepanel, setpannelopen }) => {
  const location = [
    "s-50/34, near Godwin school, Dronacharaya, Gurgaon",
    "s-50/89, near soviet school, Dronacharaya, Gurgaon",
    "s-50/78, near greeen park, Dronacharaya, Gurgaon",
    "s-50/68, near godzilla, Dronacharaya, Gurgaon",
    "s-50/33, near mount hammer school, Dronacharaya, Gurgaon",
  ];

  return (
    <div>
      {location.map((location,idx) => {
        return (
          <div
          key={idx}
            onClick={() => {
              setvehiclepanel(true);
              setpannelopen(false);
            }}
            className="flex border-gray-100 border rounded-xl p-5 active:border-gray-900  gap-4 items-center my-2 justify-start"
          >
            <h2 className="text-2xl flex justify-center items-center bg-[#eee] w-12 h-8  rounded-full p-2 ">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4>{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Locationpannel;
