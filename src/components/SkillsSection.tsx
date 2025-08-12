import React from "react";
import SkillList from "./SkillList";
import { Skill as ApiSkill } from "../types/resume";

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillsSectionProps {
  skills: ApiSkill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const skillsWithProficiency: Skill[] = skills.map((skill) => ({
    name: skill.name,
    proficiency: 75, // Consistent proficiency level matching the reference image
  }));

  return (
    <div className="mb-2">
      {/* Section Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-2">SKILLS</h3>

      {/* Section Content */}
      <div className="text-sm text-gray-700 leading-relaxed">
        <SkillList skills={skillsWithProficiency} />
      </div>
    </div>
  );
};

export default SkillsSection;
