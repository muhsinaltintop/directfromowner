import Slider from "./_components/Slider";
import Banner from "./_components/Banner";
import MainLead from "./_components/MainLead";
import Services from "./_components/Services";
import Properties from "./_components/Properties";
import Contact from "./_components/Contact";
import Blog from "./blog/page";

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
      <div className="w-12/12 mx-40">
        <Services />
      </div>
      <div>
        <Properties />
      </div>
      <div>
        <Blog />
      </div>
    </main>
  );
}
