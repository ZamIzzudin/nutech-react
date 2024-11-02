/** @format */

import { useSelector } from "react-redux";

import Image from "./Image";

import ProfilePict from "../assets/ProfilePhoto.png";

export default function MiniProfile() {
  const { profile } = useSelector((state) => state);

  return (
    <div className="flex flex-col items-center sm:items-start">
      <Image
        className="rounded-full border-4 border-gray-300 box-content"
        src={profile?.profile_image}
        height={90}
        width={90}
        alt="Profile"
        fallback={<img src={ProfilePict} alt="Profile" />}
      />

      <span className="text-xl">Selamat Datang,</span>
      <h1 className="text-3xl font-semibold">
        {profile.first_name} {profile.last_name}
      </h1>
    </div>
  );
}
