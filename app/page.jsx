import Slider from "./_components/Slider";
import Banner from "./_components/Banner";
import MainLead from "./_components/MainLead";
import Services from "./_components/Services";
import Properties from "./_components/Properties";
import Blog from "./blog/page";
import Partners from "./_components/Partners";

export default function Home() {
  return (
    <main className="w-full">
      <Slider />
      <div className="text-center justify-around">
      <h2 className="font-bold text-fifth text-2xl my-4">Partners</h2>
        <Partners/>
      </div>
      <div className="w-9/12 my-4 items-center mx-auto">
        <Banner />
      </div>
      <div className="w-12/12 mx-40">
      <h2 className="font-bold text-fifth text-2xl text-center">Services</h2>
        <Services />
      </div>
      <div>
        <Properties />
      </div>
      <div className="w-9/12 my-4 items-center mx-auto">
        <MainLead />
      </div>
      <div>
        <Blog />
      </div>
    </main>
  );
}
