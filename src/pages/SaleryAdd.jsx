import { getDatabase, onValue, push, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../firebase/firebase";

export default function SaleryAdd() {
  const navigate = useNavigate();
  const dataBase = getDatabase(app);
  const [departments, setDepartments] = useState([]);
  console.log(departments);

  useEffect(() => {
    const dbRef = ref(dataBase, "Departments/");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const departmentNames = Object.values(data).map((department) => department.name);
        setDepartments(departmentNames);
      }
    });
  }, []);

  const [input, setInput] = useState({
    LeaveType: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store user information including role in the database
      const db = getDatabase();

      const userRef = ref(db, `leaveType`);

      const newLeaveTypeRef = push(userRef);
      await set(newLeaveTypeRef, {
        LeaveType: input.LeaveType,
      });

      return navigate("/LeaveTable");
    } catch (error) {
      console.error("Error LeaveType:", error.code, error.message);
      alert("Invalid LeaveType");
    }

    // const dbRef = ref(db, "users/");
    // await push(dbRef, input);
  };

  return (
    <>
      <h1 className="text-center text-4xl my-8 font-semibold text-white"> Add Salery</h1>

      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="Salary" className="block mb-2 text-sm font-medium text-white">
            Leave Type
          </label>
          <input
            type="number"
            id="Salary"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Your Name"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="AllowanceSalary" className="block mb-2 text-sm font-medium text-white">
            Allowance Salary
          </label>
          <input
            type="number"
            id="AllowanceSalary"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Your Name"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Total" className="block mb-2 text-sm font-medium text-white">
            Total
          </label>
          <input
            type="text"
            id="Total"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Your Name"
            required
            disabled
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-gray-300 hover:bg-gray-800 text-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
}
