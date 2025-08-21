import Herobanner from "@/components/custom/herobaner/herobanner";
import Slider from "@/components/custom/slider/slider";
import Card from "@/components/custom/card/card";
import Avatar from "@/components/custom/avatar/avatar";
import Carousel from "@/components/custom/carousel/carousel";
import Hovercard from "@/components/custom/hovercard/hovercard";
import Drawer from "@/components/custom/drawer/drawer";
import Button from "@/components/custom/button/button";
import Radiogroup from "@/components/custom/radiogroup/radiogroup";
import Grid from "@/components/custom/grid/grid";
import Gridapp from "@/components/custom/gridapp/gridapp";
import Command from "@/components/custom/command/command";
import Alert from "@/components/custom/alert/alert";
import Breadcrumb from "@/components/custom/breadcrumb/breadcrumb";
import Calender from "@/components/custom/calender/calender";
import Context from "@/components/custom/context/context";
import Datatable from "@/components/custom/datatable/datatable";
import Pagination from "@/components/custom/pagination/pagination";
import Progress from "@/components/custom/progress/progress";
import Resizable from "@/components/custom/resizable/resizable";
export default function Home() {
  return (
    <div className="flex-col">
      <Grid/>
      <Herobanner />
      <Hovercard />

      <Radiogroup />
      <Slider />
      <Avatar />
      <Card />
      <Carousel />
      <Drawer />
      <Button />
      <Gridapp/>
      <Command/>
      <Alert/>
      <Breadcrumb/>
      <Calender/>
      <Context/>
      <Datatable/>
      <Pagination/>
      <Progress/>
      <Resizable/>
    </div>
  );
}
