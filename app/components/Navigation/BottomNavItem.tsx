"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

interface BottomNavItemProps {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export default function BottomNavItem({
  icon,
  label,
  href,
  isActive,
}: BottomNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
        isActive ? "text-primary" : "text-gray-600 hover:text-gray-900"
      )}
    >
      <div className="relative w-6 h-6">
        <Image
          src={icon}
          alt={label}
          fill
          className="object-contain"
          sizes="24px"
        />
      </div>
      <span className="text-xs">{label}</span>
    </Link>
  );
}
