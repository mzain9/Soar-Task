"use client";
import Image from "next/image";

interface ProfileAvatarProps {
  avatar?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ avatar, onChange }) => {
  return (
    <div className="relative w-[98px] h-[91px]">
      <label className="cursor-pointer relative block w-[90px] h-[90px] rounded-full border border-gray-300">
        {avatar ? (
          <Image
            src={avatar}
            alt="Profile Avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-full overflow-hidden"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-full bg-gray-200 text-gray-500">
            Upload
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          className="hidden"
        />
        <div className="absolute bottom-0 right-0 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
          <Image
            src="/icons/edit.svg"
            alt="Camera Icon"
            width={15}
            height={15}
          />
        </div>
      </label>
    </div>
  );
};

export default ProfileAvatar;
