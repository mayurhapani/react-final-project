import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useHistory for programmatic navigation

import Header from "../component/Header";
import Aside from "../component/Aside";
import Main_Data from "../component/Main_Data";

// import EmployeeRegister from "./EmployeeRegister.jsx";

const auth = getAuth();

export default function AdminDeshbord() {
  const navigator = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        navigator("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  return (
    <>
      <div className="h-screen">
        <Header />
        <Aside />
        <Main_Data />
        {/* <EmployeeRegister /> */}
      </div>
    </>
  );
}
