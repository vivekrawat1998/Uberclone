import React,{useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserdataContext } from "../context/UserContext";
import axios from "axios";
const Userlogin = () => {
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [userData, setuserData] = useState({})
const navigate = useNavigate();

const [user, setuser] =  useContext(UserdataContext)

const HandleLogin = async (e) =>{
  e.preventDefault()
  const login =  {
    email: email,
    password: password
  }

  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, login) 
  if(response.status === 200){
    const data = response.data
    setuser(data.user)
    localStorage.setItem('token', data.token)
    navigate('/home')
  }

  setemail("")
  setpassword("")
}


  return (
    <div className="p-7 flex justify-between items-center flex-col h-screen">
      <div>
        <img
          className="w-16 mb-5"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <form onSubmit={HandleLogin}>
          <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2"
            type="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-semibold">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2"
            type="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            placeholder="password"
          />
          <button type="submit" className="bg-[#111] mb-7 text-white font-semibold rounded px-4 border w-full text-lg placeholder:text-base py-2">
            Login
          </button>
         <p className="text-center"> New here? <Link to="/user-signup" className="text-blue-600">Create New Account</Link></p>
        </form>
      </div>
      <div className="w-full">
        <Link to="/captain-login" className="bg-[#10b461] flex items-center justify-center mb-7 text-white font-semibold rounded px-4 border w-full text-lg placeholder:text-base py-2">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default Userlogin;
