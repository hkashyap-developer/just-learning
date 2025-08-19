import React from "react";
import Image from "next/image";

const logo = () => {
  return (
    <div className="flex">
      <Image
        src="/global/meta.png" // If stored in /public folder
        alt="Logo"
        width={40}
        height={20}
        priority // Optional: preloads image
        className="my-auto"
      />
    </div>
  );
};

export default logo;
