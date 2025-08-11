import React from "react";
import AwardItem from "./AwardItem";

interface Award {
  year: string;
  award: string;
  institution: string;
}

interface AwardsSectionProps {
  awards: Award[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  return (
    <div className="mb-6">
      {/* Horizontal line separator above content */}
      <div className="w-full h-px bg-gray-700 mb-3"></div>

      {/* Section Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">AWARDS</h3>

      {/* Section Content */}
      <div className="text-sm text-gray-700 leading-relaxed">
        {awards.map((award, index) => (
          <AwardItem
            key={index}
            year={award.year}
            award={award.award}
            institution={award.institution}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
