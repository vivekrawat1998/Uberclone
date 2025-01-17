import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Captainlogin from "./pages/Captainlogin";
import Captainsignup from "./pages/Captainsignup";
import UserSignup from "./pages/UserSignup";
import Userlogin from "./pages/Userlogin";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserProtectedRoute from "./pages/UserProtectedRoute";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/Captainhome";
import CaptainProtectWrapper from "./pages/CaptainProtectedRoute";
import CaptainLogout from "./pages/Captainlogout";
import CaptainRiding from "./pages/CaptainRiding";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-login" element={<Userlogin />} />
        <Route path="/captain-signup" element={<Captainsignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route
          path="/home"
          element={
            <UserProtectedRoute>
              <Home />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedRoute>
              <UserLogout />
            </UserProtectedRoute>
          }
        />

        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />

        <Route
          path="/captain/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
