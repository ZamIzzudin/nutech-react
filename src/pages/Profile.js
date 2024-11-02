/** @format */

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from "../utils/reducer/auth";
import { ProfileAction } from "../utils/reducer/profile";
import Uploader from "../utils/uploader";

import Input from "../components/Input";
import Image from "../components/Image";

import ProfilePicture from "../assets/ProfilePhoto.png";
import { MdAlternateEmail, MdPerson, MdModeEditOutline } from "react-icons/md";

export default function Profile() {
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    first_name: profile.first_name,
    last_name: profile.last_name,
  });

  function handleUpdate(e) {
    e.preventDefault();
    dispatch(ProfileAction.updateProfile(form.first_name, form.last_name));
  }

  const handleUpload = (file) => {
    dispatch(ProfileAction.updateProfilePicture(file));
  };

  return (
    <main className="py-8 flex flex-col items-center">
      <div className="flex justify-center flex-col items-center gap-5">
        <div className="relative">
          <Image
            className="rounded-full border-4 border-gray-300 box-content"
            src={profile.profile_image}
            alt="Profile"
            height={120}
            width={120}
            fallback={
              <img
                src={ProfilePicture}
                alt="Profile"
                height={120}
                width={120}
              />
            }
          />
          <button
            onClick={() => {
              Uploader(handleUpload);
            }}
            className="border-2 border-gray-300 text-gray-600 bg-white p-1 flex items-center justify-center rounded-full absolute right-0 bottom-[5%]"
          >
            <MdModeEditOutline />
          </button>
        </div>
        <h1 className="text-3xl font-medium">
          {profile.first_name} {profile.last_name}
        </h1>
      </div>
      <form className="flex flex-col justify-center items-start w-[60%] gap-4 my-8">
        <span className="text-sm mt-1">Email</span>
        <Input
          type="email"
          placeholder="Masukkan email anda"
          icon={<MdAlternateEmail />}
          value={profile.email}
          handler={() => {}}
        />
        <span className="text-sm mt-1">Nama Depan</span>
        <Input
          type="text"
          placeholder="Masukkan nama depan"
          icon={<MdPerson />}
          value={form.first_name}
          handler={(val) => setForm({ ...form, first_name: val })}
        />
        <span className="text-sm mt-1">Nama Belakang</span>
        <Input
          type="text"
          placeholder="Masukkan nama belakang"
          icon={<MdPerson />}
          value={form.last_name}
          handler={(val) => setForm({ ...form, last_name: val })}
        />
        <button
          type="submit"
          className="bg-red-500 text-white w-[100%] p-3 rounded-md mt-2 text-sm border-2 border-red-500 hover:bg-transparent hover:text-red-500 duration-300"
          onClick={(e) => handleUpdate(e)}
        >
          Edit Profil
        </button>
        <button
          type="submit"
          className="bg-white text-red-500 w-[100%] p-3 rounded-md mt-2 text-sm border-2 border-red-500 hover:bg-transparent hover:text-red-500 duration-300"
          onClick={() => dispatch(AuthAction.Logout())}
        >
          Logout
        </button>
      </form>
    </main>
  );
}
