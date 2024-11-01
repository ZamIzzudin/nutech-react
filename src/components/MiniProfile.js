/** @format */

import { useSelector } from "react-redux";

import ProfilePict from "../assets/ProfilePhoto.png";

export default function MiniProfile() {
  const { profile } = useSelector((state) => state);

  return (
    <div className="bg-red-500 p-5">
      <img src={ProfilePict} alt="Profile" />
      <span className="text-xl">Selamat Datang</span>
      <h1 className="text-3xl font-bold">
        {profile.first_name} {profile.last_name}
      </h1>
    </div>
  );
}
