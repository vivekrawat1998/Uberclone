import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import Locationpannel from "../components/Location.pannel";
import VehclePanel from "../components/VehclePanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitforVehicle from "../components/WaitforVehicle";
import LookingforDriver from "../components/LookingforDriver";
const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [pannelopen, setpannelopen] = useState(false);
  const pannelRef = useRef(null);
  const pannelcloseRef = useRef(null);
  const [vehiclepanel, setvehiclepanel] = useState(false);
  const [confirmRidepanel, setconfirmRidepanel] = useState(false)
  const [vehiclefound, setvehicleFound] = useState(false)
  const vehiclePanelRef = useRef(null);
  const confirmRidepanelRef = useRef(null);
  const  VehicleFoundRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (pannelopen) {
      gsap.to(pannelRef.current, {
        duration: 0.5,
        height: "70%",
        padding: "20px",
        ease: "power2.out",
      });
      gsap.to(pannelcloseRef.current, {
        duration: 0.5,
        opacity: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(pannelRef.current, {
        duration: 0.5,
        height: "0%",
        ease: "power2.out",
      });
      gsap.to(pannelcloseRef.current, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
      });
    }
  }, [pannelopen]);

  useGSAP(() => {
    if (vehiclepanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclepanel]);

  useGSAP(() => {
    if (confirmRidepanel) {
      gsap.to(confirmRidepanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(confirmRidepanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidepanel]);

  useGSAP(() => {
    if (vehiclefound) {
      gsap.to(VehicleFoundRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(VehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclefound]);

  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
        className="w-16 absolute left-5 top-5"
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>
      <div className="w-full absolute  flex flex-col justify-end h-screen top-0">
        <div className="w-full p-5 bg-white h-[30%] relative">
          <h4 className="text-2xl font-semibold">Find a trip</h4>

          <form onSubmit={submitHandler}>
            <h2
              ref={pannelcloseRef}
              onClick={() => setpannelopen(false)}
              className="absolute top-6 right-6 text-2xl opacity-0"
            >
              <i className="ri-arrow-drop-down-line"></i>
            </h2>
            <div className="line absolute top-[90px] rounded-full left-10 bg-gray-900 w-1 h-16"></div>
            <input
              value={pickup}
              onClick={() => setpannelopen(true)}
              onChange={(e) => setpickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 w-full mt-5 text-lg rounded-lg"
              type="text"
              placeholder="Add a Pickup location"
            />
            <input
              value={destination}
              onClick={() => setpannelopen(true)}
              onChange={(e) => setdestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 w-full mt-3 text-lg rounded-lg"
              type="text"
              placeholder="Add a Dropoff location"
            />
          </form>
        </div>
        <div
          ref={pannelRef}
          className="w-full  bg-white overflow-hidden"
          style={{ height: "0%" }}
        >
          <Locationpannel
            setvehiclepanel={setvehiclepanel}
            setpannelopen={setpannelopen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12 w-full"
      >
        <VehclePanel setconfirmRidepanel={setconfirmRidepanel} setvehiclepanel={setvehiclepanel} />
      </div>
      <div
        ref={confirmRidepanelRef}
        className="fixed z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12 w-full"
      >
        <ConfirmRide setconfirmRidepanel={setconfirmRidepanel} setvehicleFound={setvehicleFound} setvehiclepanel={setvehiclepanel} />
      </div>
      <div
       ref={VehicleFoundRef }
        className="fixed z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12 w-full"
      >
       <LookingforDriver setvehicleFound={setvehicleFound} />
      </div>
    </div>
  );
};

export default Home;
