import Image from "next/image";
import Herobanner from "@/components/custom/herobaner/herobanner";
import Slider from "@/components/custom/slider/slider";
export default function Home() {
  return (
    <div className="">
      <Herobanner />
      <Slider />
    </div>
  );
}
