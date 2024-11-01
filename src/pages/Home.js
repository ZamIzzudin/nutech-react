/** @format */

import MiniProfile from "../components/MiniProfile";

export default function Home() {
  return (
    <main className="py-8">
      <section className="grid grid-cols-2 grid-rows-1 gap-3 mb-8">
        <MiniProfile />
        <MiniProfile />
      </section>
      <h1>Home</h1>
    </main>
  );
}
