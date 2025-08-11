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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-3">
          {/* Skill Name */}
          <div className="justify-start text-gray-700 text-xs font-semibold font-['Open_Sans'] uppercase">
            {skill.name}
          </div>

          {/* Progress Bar */}
          <div className="w-full md:w-60 h-2.5 border border-gray-700 bg-white">
            <div
              className="bg-gray-800 h-2.5 transition-all duration-300"
              style={{
                width: `${index < 4 ? 75 : 85}%`, 
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
