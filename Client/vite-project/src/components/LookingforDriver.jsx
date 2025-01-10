import React from "react";

const LookingforDriver = ({
  setvehicleFound,
  pickup,
  destination,
  fare,
  vehicleType,
}) => {
  return (
    <div>
      <h1
        onClick={() => {
          // setconfirmRidepanel(false);
          // setvehiclepanel(false);
          setvehicleFound(false);
        }}
        className="p-1 text-center  w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h1>
      <h3 className="text-2xl font-semibold mb-5 pt-5">Looking For a Driver</h3>
      <div className="flex jsutify-between items-center flex-col">
        <img
          className="h-20"
          src="https://imgs.search.brave.com/LECdF_TEhVeoeyZcgELGyGQ34DSLC9ijAydT_j6Z3Kk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE1Njgw/NzAzODcvYXNzZXRz/L2I1LzBhNTE5MS04/MzZlLTQyYmYtYWQ1/ZC02Y2IzMTAwZWM0/MjUvb3JpZ2luYWwv/VWJlclgucG5n"
          alt=""
        />
        <div className="w-full mt-5  ">
          <div className="flex gap-5 items-center p-3 border-b-2">
            <i className="ri-map-pin-fill text-lg"></i>
            <div>
              <h1 className="text-lg font-medium">50/34-S</h1>
              <h3 className="text-sm text-gray-600">{pickup}</h3>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h1 className="text-lg font-medium">50/34-S</h1>
              <h3 className="text-sm text-gray-600">{destination}</h3>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 ">
            <i className="ri-currency-line text-xl"></i>
            <div>
              <h1 className="text-lg font-medium">{`${"₹"}${
                fare[vehicleType]
              }`}</h1>
              <h3 className="text-sm text-gray-600">Cash right now</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingforDriver;
