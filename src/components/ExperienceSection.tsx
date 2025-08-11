import React from "react";
import ExperienceItem from "./ExperienceItem";

interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  return (
    <div className="mb-6">
      {/* Section Title */}
      <h4 className="w-24 justify-start text-gray-700 text-xl font-extrabold font-['Open_Sans'] uppercase">
        experience
      </h4>

      {/* Section Content */}
      <div className="text-sm text-gray-700 leading-relaxed mt-[8px]">
        {experience.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            date={exp.date}
            responsibilities={exp.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
