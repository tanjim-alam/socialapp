import Image from "next/image";
import ServiceSection from "./components/ServiceSection";
import PopularServiceSection from "./components/PopularServiceSection";
import WhyChooseSection from "./components/WhyChooseSection";
import HowToBuySection from "./components/HowToBuySection";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <div className="bg-white">
      <ServiceSection/>
      <PopularServiceSection/>
      <WhyChooseSection/>
      <HowToBuySection/>
      <FaqSection/>
    </div>
  );
}
