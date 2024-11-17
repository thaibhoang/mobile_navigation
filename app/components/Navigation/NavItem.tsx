"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface NavItemProps {
  icon: string;
  text: string;
  href: string;
}

export default function NavItem({ icon, text, href }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <Image
            src={icon}
            alt={text}
            fill
            className="object-contain"
            sizes="40px"
          />
        </div>
        <span className="text-sm font-medium">{text}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </Link>
  );
}
