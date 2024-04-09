import React from "react";
import EmployeeCount from "../pages/EmployeeCount";
import LeaveTypeCount from "../pages/LeaveTypeCount";
import DepartmentTypeCount from "../pages/DepartmentTypeCount";

import EmployeeRegister from "../pages/EmployeeRegister";
import { Route, Routes } from "react-router-dom";
import MainDesk from "./MainDesk";
import EmployeeList from "../pages/EmployeeList";

const Main_Data = () => {
  return (
    <>
      <section className="main_data">
        <Routes>
          <Route path="/" element={<MainDesk />} />
          <Route path="/EmployeeRegister" element={<EmployeeRegister />} />
          <Route path="/EmployeeList" element={<EmployeeList />} />
        </Routes>
        {/* <EmployeeRegister /> */}
      </section>
    </>
  );
};

export default Main_Data;
