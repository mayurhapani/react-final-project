import React from "react";
import EmployeeCount from "../pages/EmployeeCount";
import LeaveTypeCount from "../pages/LeaveTypeCount";
import DepartmentTypeCount from "../pages/DepartmentTypeCount";

export default function MainDesk() {
  return (
    <>
      <div>AdminDeshbord</div>
      <EmployeeCount />
      <LeaveTypeCount />
      <DepartmentTypeCount />{" "}
    </>
  );
}
