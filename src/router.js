/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Transaction from "./pages/Transaction";
import Topup from "./pages/Topup";

import Navbar from "./components/Navbar";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/topup" element={<Topup />} />
      </Routes>
    </Router>
  );
}
