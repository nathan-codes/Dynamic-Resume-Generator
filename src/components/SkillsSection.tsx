import React from "react";
import SkillList from "./SkillList";

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="mb-6">
      {/* Section Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">SKILLS</h3>

      {/* Section Content */}
      <div className="text-sm text-gray-700 leading-relaxed">
        <SkillList skills={skills} />
      </div>
    </div>
  );
};

export default SkillsSection;
