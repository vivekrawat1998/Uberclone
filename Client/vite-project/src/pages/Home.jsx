import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import Locationpannel from "../components/Location.pannel";
import VehclePanel from "../components/VehclePanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitforVehicle from "../components/Waitingfordriver";
import axios from "axios";
import LookingforDriver from "../components/LookingforDriver";
import { SocketContext } from "../context/SocketContext";
import { UserdataContext } from "../context/UserContext";
const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [pannelopen, setpannelopen] = useState(false);
  const pannelRef = useRef(null);
  const pannelcloseRef = useRef(null);
  const [vehiclepanel, setvehiclepanel] = useState(false);
  const [confirmRidepanel, setconfirmRidepanel] = useState(false);
  const [vehiclefound, setvehicleFound] = useState(false);
  const [pickupsuggestion, setpickupsuggestion] = useState([]);
  const [activeField, setActiveField] = useState(false);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [ waitingForDriver, setWaitingForDriver ] = useState(false)
  const [vehicleType, setVehicleType] = useState("");
  const [fare, setFare] = useState({});
  const vehiclePanelRef = useRef(null);
  const confirmRidepanelRef = useRef(null);
  const VehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null)
  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserdataContext);
  const [ride, setRide] = useState(null)
  const submitHandler = (e) => {
    e.preventDefault();
    console.log();
  };

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id });
  }, [user]);

  socket.on("ride-confirmed", (ride) => {
    setvehicleFound(false);
    setWaitingForDriver(true);
    setRide(ride);
  });

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


  useGSAP(function () {
    if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ waitingForDriver ])

  const handlepickupChange = async (e) => {
    setpickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setpickupsuggestion(response.data);
    } catch (error) {
      console.error("Error fetching pickup suggestions:", error);
    }
  };

  const handledestinationchange = async (e) => {
    setdestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching destination suggestions:", error);
    }
  };

  async function findTrip() {
    setpannelopen(false);
    setvehiclepanel(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/ride/getFare`,
        {
          params: { pickup, destination },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFare(response.data);
    } catch (error) {
      console.error("Error fetching fare:", error.response.data);
      alert(
        "Error: " + error.response.data.errors.map((err) => err.msg).join(", ")
      );
    }
  }

  async function createRide() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/ride/create`,
        { pickup, destination, vehicleType },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

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
      <div className="w-full absolute flex flex-col justify-end h-screen top-0">
        <div className="w-full p-5 bg-white h-[30%] relative">
          <h4 className="text-2xl font-semibold">Find a trip</h4>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h2
              ref={pannelcloseRef}
              onClick={() => setpannelopen(false)}
              className="absolute top-6 right-6 text-2xl opacity-0"
            >
              <i className="ri-arrow-drop-down-line"></i>
            </h2>
            <input
              value={pickup}
              onClick={() => {
                setpannelopen(true);
                setActiveField("pickup");
              }}
              onChange={handlepickupChange}
              className="bg-[#eee] px-12 py-2 w-full mt-5 text-lg rounded-lg"
              type="text"
              placeholder="Add a Pickup location"
            />
            <input
              value={destination}
              onClick={() => {
                setpannelopen(true);
                setActiveField("destination");
              }}
              onChange={handledestinationchange}
              className="bg-[#eee] px-12 py-2 w-full mt-3 text-lg rounded-lg"
              type="text"
              placeholder="Add a Dropoff location"
            />
          </form>
          <button
            onClick={findTrip}
            className="bg-black text-white px-6 w-full text-semibold  py-2 rounded-lg mt-5"
          >
            Find Trip
          </button>
        </div>
        <div
          ref={pannelRef}
          className="w-full bg-white overflow-hidden"
          style={{ height: "0%" }}
        >
          <Locationpannel
            suggestions={
              activeField === "pickup"
                ? pickupsuggestion
                : destinationSuggestions
            }
            setpannelopen={setpannelopen}
            setvehiclepanel={setvehiclepanel}
            setpickup={setpickup}
            setdestination={setdestination}
            activeField={activeField}
            setActiveField={setActiveField}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12 w-full"
      >
        <VehclePanel
          setVehicleType={setVehicleType}
          setconfirmRidepanel={setconfirmRidepanel}
          setvehiclepanel={setvehiclepanel}
          fare={fare}
        />
      </div>
      <div
        ref={confirmRidepanelRef}
        className="fixed z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12 w-full"
      >
        <ConfirmRide
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          setconfirmRidepanel={setconfirmRidepanel}
          setvehicleFound={setvehicleFound}
          setvehiclepanel={setvehiclepanel}
          vehicleType={vehicleType}
        />
      </div>
      <div
        ref={VehicleFoundRef}
        className="fixed z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12 w-full"
      >
        <LookingforDriver
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setvehicleFound={setvehicleFound}
        />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full  z-10 bottom-0  bg-white px-3 py-6 pt-12"
      >
        <WaitforVehicle
          ride={ride}
          setvehicleFound={setvehicleFound}
          setWaitingForDriver={setWaitingForDriver}
          waitingForDriver={waitingForDriver}
        />
      </div>
    </div>
  );
};

export default Home;
