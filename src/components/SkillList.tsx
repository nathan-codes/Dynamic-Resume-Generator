import React from "react";

interface Skill {
  name: string;
  proficiency: number; // 0-100
}

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-0">
          {/* Skill Name */}
          <div className="justify-start text-gray-700 text-xs font-semibold uppercase">
            {skill.name}
          </div>
          {/* Progress Bar */}
          <div className="w-full  border border-[#323B4C]  h-[12px]">
            <div
              className="bg-[#323B4C] border border-[#323B4C]  h-[11px]"
              style={{
                width: "75%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
