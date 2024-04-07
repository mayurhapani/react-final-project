import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h2 className="mb-5">Welcome To Employee Management Program</h2>

      <Link to={"/AdminLogin"} className="border bg-blue-500 text-white py-1 px-3">
        Click for Login
      </Link>
    </div>
  );
}
