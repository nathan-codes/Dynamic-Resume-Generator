import React from "react";
import EducationItem from "./EducationItem";
import { Education as ApiEducation } from "../types/resume";
import { formatDateRange } from "../utils/dateUtils";

interface EducationSectionProps {
  education: ApiEducation[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <div className="mb-6">
      {/* Horizontal line separator above content */}
      <div className="w-full h-px bg-gray-700 mb-3"></div>

      {/* Section Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">EDUCATION</h3>

      {/* Section Content */}
      <div className="text-sm text-gray-700 leading-relaxed">
        {education.map((edu, index) => (
          <EducationItem
            key={index}
            year={formatDateRange(edu.start_date, edu.end_date)}
            degree={edu.qualification}
            university={edu.institution}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
