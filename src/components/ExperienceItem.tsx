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
    <div className="mb-4 last:mb-0">
      {/* Job Title and Date */}
      <div className="justify-start">
        <span className="text-neutral-700 text-base font-extrabold uppercase">
          {title}
        </span>
        <span className="text-neutral-700 text-xl mx-3 font-semibold uppercase">
          {" | "}
        </span>
        <span className="text-neutral-700 text-xs font-semibold uppercase">
          {date}
        </span>
      </div>

      {/* Company Name */}
      <div className="justify-start text-[#444440] text-[15px] font-semibold font-['Open_Sans'] uppercase">
        {company}
      </div>

      {/* Responsibilities */}
      <div className="space-y-1">
        {responsibilities.map((responsibility, index) => (
          <div key={index} className="text-gray-700 leading-relaxed">
            {responsibility}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
