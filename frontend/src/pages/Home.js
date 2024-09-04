import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import AutoPlay from "../components/Slider";
import About from "./About";
import Service from "./Service";
import Map from '../components/Map'

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Loggedout");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchUserProfile = async () => {
    try {
      const url = "http://localhost:5000/api/v1/user";
      const headers = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const response = await fetch(url, headers);

      if (!response.ok) {
        // Handle different error statuses if needed
        throw new Error("Profile not found or unauthorized");
      }

      const result = await response.json();
      console.log(result);

      // Assuming you have a state setter like setUserProfile:
      setUserProfile(result.profile); // Adjust the state variable to your use case
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div className=" bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Exploratory Analysis of Geolocational Data</h1>
        <p>Experience the data science journey with real-life geolocational data analysis!</p>
      </header>
  
    </div>
      <Carousel />
      {/* <AutoPlay /> */}
      <h1 className='text-red-500'>Welcome :{loggedInUser}</h1>
            <h2>User Email:{userProfile.email }</h2>
            <button onClick={handleLogout}>Logout</button>
            <Map />
      <About />
      <Service/>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default Home;
