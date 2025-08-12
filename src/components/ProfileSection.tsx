import React from "react";

interface ProfileSectionProps {
  profile: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ profile }) => {
  return (
    <div className="mb-6">
      {/* Section Title */}
      <h4 className="w-24 justify-start text-gray-700 text-xl font-extrabold  uppercase">
        profile
      </h4>

      {/* Section Content */}
      <p className="w-full mt-[8px] text-justify justify-start text-[#323B4C] text-[13px] font-semibold  capitalize leading-relaxed">
        {profile}
      </p>
    </div>
  );
};

export default ProfileSection;
