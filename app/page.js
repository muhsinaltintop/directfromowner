import Image from "next/image";
import Slider from "./_components/Slider";
import Banner from "./_components/Banner";
import MainLead from "./_components/MainLead";

export default function Home() {
  return (
    <main className="w-full">
      <Slider />
      <div className="w-9/12 my-4 items-center mx-auto">
        <Banner />
      </div>
      <div className="w-9/12 my-4 items-center mx-auto">
        <MainLead />
      </div>
    </main>
  );
}
