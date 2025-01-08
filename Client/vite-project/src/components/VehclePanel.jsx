import React from "react";

const VehclePanel = ({ setvehiclepanel, setconfirmRidepanel }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5 pt-5"> Choose Vehicle</h3>
      <h1
        onClick={() => setvehiclepanel(false)}
        className="p-1 text-center  w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h1>
      <div
        onClick={() => {
          setconfirmRidepanel(true);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full items-center p-3 justify-between"
      >
        <img
          className="h-10"
          src="https://imgs.search.brave.com/LECdF_TEhVeoeyZcgELGyGQ34DSLC9ijAydT_j6Z3Kk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE1Njgw/NzAzODcvYXNzZXRz/L2I1LzBhNTE5MS04/MzZlLTQyYmYtYWQ1/ZC02Y2IzMTAwZWM0/MjUvb3JpZ2luYWwv/VWJlclgucG5n"
          alt=""
        />
        <div className="-ml-2 w-1/2">
          <h1 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h1>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xsm text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">Rs193.20</h2>
      </div>
      <div
        onClick={() => {
          setconfirmRidepanel(true);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full items-center p-3 justify-between"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="-ml-2 w-1/2">
          <h1 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h1>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-medium text-xsm text-gray-600">
            Affordable,Motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">Rs65.20</h2>
      </div>
      <div
        onClick={() => {
          setconfirmRidepanel(true);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full items-center p-3 justify-between"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="-ml-2 w-1/2">
          <h1 className="font-medium text-base">
            Uber Auto{" "}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h1>
          <h5 className="font-medium text-sm">7 mins away</h5>
          <p className="font-medium text-xsm text-gray-600">
            Affordable Auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">Rs118.20</h2>
      </div>
    </div>
  );
};

export default VehclePanel;
