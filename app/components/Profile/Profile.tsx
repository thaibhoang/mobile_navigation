"use client";

import { ProfileType } from "@/app/type";
import Image from "next/image";

interface ProfileProps {
  profile: ProfileType;
}

export default function Profile({ profile }: ProfileProps) {
  return (
    <div className="flex items-start gap-4 p-4">
      {profile.avatar && (
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={profile.avatar}
            alt={`${profile.name}'s avatar`}
            fill
            className="object-cover"
            sizes="64px"
            priority
          />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-lg">{profile.name}</h2>
        <p className="text-sm text-gray-600">{profile.info}</p>
      </div>
    </div>
  );
}
