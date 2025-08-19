import React from "react";
import Logo from "../header/logo";
import Navigationtest from "../header/navigation";
import Rightpanel from "../header/ctas";

const header = () => {
  return (
    <div className="flex align-center justify-between mx-full px-2 py-2 bg-white border-b-1">
      <Logo />
      <Navigationtest />
      <Rightpanel />
    </div>
  );
};

export default header;
