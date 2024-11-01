/** @format */

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-500">
      <ul className="flex items-center justify-center gap-5 text-white p-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/transaction">Transaction</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/topup">Top Up</Link>
        </li>
      </ul>
    </nav>
  );
}
