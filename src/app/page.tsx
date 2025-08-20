
import Herobanner from "@/components/custom/herobaner/herobanner";
import Slider from "@/components/custom/slider/slider";
import Card from "@/components/custom/card/card";
import Avatar from "@/components/custom/avatar/avatar";
import Carousel from "@/components/custom/carousel/carousel";
import Hovercard from "@/components/custom/hovercard/hovercard";
import Drawer from "@/components/custom/drawer/drawer";
import Button from "@/components/custom/button/button";
import Radiogroup from "@/components/custom/radiogroup/radiogroup";


export default function Home() {
  return (
    <div>
      <Herobanner/>
      <Hovercard/>
    
      <Radiogroup/>
      <Slider />
      <Avatar/>
      <Card/>
      <Carousel/>
      <Drawer/>
      <Button/>

    </div>
  );
}
