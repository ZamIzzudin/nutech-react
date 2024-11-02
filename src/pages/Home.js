/** @format */

import { useSelector } from "react-redux";

import MiniProfile from "../components/MiniProfile";
import UserBalance from "../components/UserBalance";
import ServiceCard from "../components/ServiceCard";
import BannerSlider from "../components/BannerSlider";

export default function Home() {
  const { services, banner } = useSelector((state) => state);

  return (
    <main className="py-8">
      <section className="grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2 gap-3 mb-8">
        <MiniProfile />
        <UserBalance />
      </section>
      <section className="flex md:justify-between justify-evenly items-start flex-wrap gap-3">
        {services.map((service) => (
          <ServiceCard data={service} />
        ))}
      </section>
      <h1 className="my-8 font-medium">Temukan Promo Menarik</h1>
      <section>
        <BannerSlider data={banner} />
      </section>
    </main>
  );
}
