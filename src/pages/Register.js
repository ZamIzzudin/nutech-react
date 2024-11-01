/** @format */

import { useDispatch } from "react-redux";
import { useState } from "react";
import { AuthAction } from "../utils/reducer/auth";
import { Link } from "react-router-dom";

import Input from "../components/Input";

import Logo from "../assets/Logo.png";
import { MdAlternateEmail, MdLockOutline, MdPerson } from "react-icons/md";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

export default function Register() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    pass_confirm: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleRegister(e) {
    e.preventDefault();
    if (form.email.includes("@") === false) return alert("Email tidak valid");

    if (form.password !== form.pass_confirm)
      return alert("Password tidak sama");

    if (form.password.length < 8) return alert("Password minimal 8 karakter");

    dispatch(
      AuthAction.Register(
        form.email,
        form.first_name,
        form.last_name,
        form.password
      )
    );
  }

  function buttonShowPass() {
    return (
      <button onClick={() => setShowPass(!showPass)} type="button">
        {showPass ? <RiEyeLine /> : <RiEyeOffLine />}
      </button>
    );
  }

  function buttonShowConfirm() {
    return (
      <button onClick={() => setShowConfirm(!showConfirm)} type="button">
        {showConfirm ? <RiEyeLine /> : <RiEyeOffLine />}
      </button>
    );
  }

  return (
    <main className="grid md:grid-cols-2 grid-cols-1 grid-rows-1">
      <div className="min-h-screen flex flex-col items-center justify-center gap-5">
        <div className="flex justify-center items-center gap-2 ">
          <img src={Logo} alt="logo" />
          <span className="font-semibold text-2xl">SIMS PPOB</span>
        </div>
        <h1 className="text-3xl md:max-w-[50%] max-w-[70%] text-center font-semibold mb-2">
          Lengkapi data untuk membuat akun
        </h1>
        <form className="flex flex-col justify-center items-center w-[60%] gap-3 my-5">
          <Input
            type="email"
            placeholder="Masukkan email anda"
            icon={<MdAlternateEmail />}
            value={form.email}
            handler={(val) => setForm({ ...form, email: val })}
          />
          <Input
            type="text"
            placeholder="Masukkan nama depan"
            icon={<MdPerson />}
            value={form.first_name}
            handler={(val) => setForm({ ...form, first_name: val })}
          />
          <Input
            type="text"
            placeholder="Masukkan nama belakang"
            icon={<MdPerson />}
            value={form.last_name}
            handler={(val) => setForm({ ...form, last_name: val })}
          />
          <Input
            type={showPass ? "text" : "password"}
            placeholder="Buat password"
            icon={<MdLockOutline />}
            value={form.password}
            action={buttonShowPass()}
            handler={(val) => setForm({ ...form, password: val })}
          />
          <Input
            type={showConfirm ? "text" : "password"}
            placeholder="Konfirmasi password"
            icon={<MdLockOutline />}
            value={form.pass_confirm}
            action={buttonShowConfirm()}
            handler={(val) => setForm({ ...form, pass_confirm: val })}
          />
          <button
            type="submit"
            className="bg-red-500 text-white w-[100%] p-3 rounded-md mt-8 text-sm border-2 border-red-500 hover:bg-transparent hover:text-red-500 duration-300"
            onClick={(e) => handleRegister(e)}
          >
            Registrasi
          </button>
        </form>

        <span className="text-xs text-gray-500">
          Sudah punya akun? login{" "}
          <strong className="text-red-500">
            <Link to="/login">di sini</Link>
          </strong>
        </span>
      </div>
      <div className="banner-login"></div>
    </main>
  );
}
