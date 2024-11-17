"use client";

import Image from "next/image";

const BottomNavItem: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <>
      <div className="relative aspect-square w-10 h-10">
        <Image src={icon} alt="bottom nav button" fill object-contain="cover" />
      </div>
    </>
  );
};

export default BottomNavItem;
