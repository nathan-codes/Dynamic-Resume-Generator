import React from "react";
import AwardItem from "./AwardItem";
import { Education as ApiEducation } from "../types/resume";
import { formatDateRange } from "../utils/dateUtils";

interface AwardsSectionProps {
  awards: ApiEducation[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  return (
    <div className="mb-6">
      <div className="w-full h-px bg-gray-700 mb-3"></div>

      {/* Section Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">AWARDS</h3>

      {/* Section Content */}
      <div className="text-sm text-gray-700 leading-relaxed">
        {awards.map((award, index) => (
          <AwardItem
            key={index}
            year={formatDateRange(award.start_date, award.end_date)}
            award={award.qualification}
            institution={award.institution}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
