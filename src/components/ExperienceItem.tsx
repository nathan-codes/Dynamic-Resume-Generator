import React from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  date,
  responsibilities,
}) => {
  return (
    <div className="mb-3 last:mb-0">
      {/* Job Title and Date */}
      <div className="justify-start">
        <span className="text-neutral-700 text-xs font-extrabold  uppercase">
          {title} |
        </span>
        <span className="text-neutral-700 text-xs font-semibold  uppercase">
          {" "}
        </span>
        <span className="text-neutral-700 text-xs font-semibold  uppercase">
          {date}
        </span>
      </div>

      {/* Company Name */}
      <div className="text-gray-600 text-xs font-bold uppercase mb-0">
        {company}
      </div>

      {/* Responsibilities */}
      <div className="">
        {responsibilities.map((responsibility, index) => (
          <div
            key={index}
            className="text-gray-700 text-sm font-[400] leading-relaxed"
          >
            {responsibility}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
