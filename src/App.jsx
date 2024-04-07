import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminRegister from "./pages/AdminRegister.jsx";
import AdminList from "./pages/AdminList.jsx";
import AdminEdit from "./pages/AdminEdit.jsx";
import AdminDeshbord from "./pages/AdminDeshbord.jsx";

import EmployeeLogin from "./pages/EmployeeLogin.jsx";
import EmployeeRegister from "./pages/EmployeeRegister.jsx";
import EmployeeList from "./pages/EmployeeList.jsx";
import EmployeeEdit from "./pages/EmployeeEdit.jsx";
import EmployeeDeshbord from "./pages/EmployeeDeshbord.jsx";
import LeaveTable from "./pages/LeaveTable.jsx";
import LeaveTypeAdd from "./pages/LeaveTypeAdd.jsx";
import LeaveTypeEdit from "./pages/LeaveTypeEdit.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/AdminRegister" element={<AdminRegister />} />
      <Route path="/AdminList" element={<AdminList />} />
      <Route path="/AdminEdit/:id" element={<AdminEdit />} />
      <Route path="/AdminDeshbord" element={<AdminDeshbord />} />

      {/* <Route path="/EmployeeLogin" element={<EmployeeLogin />} /> */}
      <Route path="/EmployeeRegister" element={<EmployeeRegister />} />
      {/* <Route path="/EmployeeList" element={<EmployeeList />} /> */}
      {/* <Route path="/EmployeeEdit" element={<EmployeeEdit />} /> */}
      <Route path="/EmployeeDeshbord" element={<EmployeeDeshbord />} />

      <Route path="/LeaveTable" element={<LeaveTable />} />
      <Route path="/LeaveTypeAdd" element={<LeaveTypeAdd />} />
      <Route path="/LeaveTypeEdit/:id" element={<LeaveTypeEdit />} />
    </Routes>
  );
}

export default App;
