/** @format */

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthAction } from "../utils/reducer/auth";
import { ProfileAction } from "../utils/reducer/profile";

import Container from "./Container";

import Logo from "../assets/Logo.png";
import { MdLogout } from "react-icons/md";

export default function Navbar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProfileAction.getProfile());
  }, [dispatch]);

  return (
    <nav className="border-b border-gray-500">
      <Container>
        <div className="flex justify-between py-5">
          <Link to="/">
            <div className="flex items-center gap-5">
              <img src={Logo} alt="logo" />
              <span className="font-semibold">SIMS PPOB</span>
            </div>
          </Link>
          <ul className="flex items-center justify-center gap-16 font-medium">
            <li>
              <Link to="/topup">Top Up</Link>
            </li>
            <li>
              <Link to="/transaction">Transaksi</Link>
            </li>
            <li>
              <Link to="/profile">Akun</Link>
            </li>
            <button
              className="bg-red-500 text-white px-5 py-2 font-normal rounded-md flex items-center gap-1 border-2 border-red-500 duration-300 hover:bg-transparent hover:text-red-500"
              onClick={() => dispatch(AuthAction.Logout())}
            >
              <MdLogout />
              Logout
            </button>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
