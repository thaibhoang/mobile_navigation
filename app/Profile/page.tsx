"use client";
import Image from "next/image";
import profile from "../profileInfo";

const Profile = () => {
  return (
    <>
      <div className="flex gap-2 p-4">
        {profile.avatar && (
          <div className="w-16 h-16">
            <div className=" relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={profile.avatar}
                fill
                className="object-cover"
                alt="profile image"
              ></Image>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="font-bold">{profile.name}</div>
          <div className="">{profile.infor}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
