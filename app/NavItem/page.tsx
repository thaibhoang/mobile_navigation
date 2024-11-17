"use client";

import Image from "next/image";

const NavItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => {
  return (
    <>
      <div className="flex gap-2 justify-between my-2">
        <div className="flex gap-2 items-center">
          <div className="relative aspect-square w-10 h-10">
            <Image src={icon} fill object-contain="cover" alt={text}></Image>
          </div>
          <div className="">{text}</div>
        </div>
        <div className="relative aspect-square w-10 h-10">
          <Image
            src="/right_arrow.svg"
            fill
            object-contain="cover"
            alt="right_arrow"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default NavItem;
