import React from "react";

interface ExpertiseSectionProps {
  expertise: string[];
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ expertise }) => {
  return (
    <div className="mb-6">
      {/* Section Title */}

    
      <div className="w-full h-px bg-gray-700 mb-3"></div>

      <h3 className="text-lg font-bold text-gray-800 mb-3">EXPERTISE</h3>

      {/* Section Content */}
      <div className="text-sm text-gray-700 leading-relaxed">
        <ul className="space-y-2 list-none">
          {expertise.map((item, index) => {
            // Split the item at the comma to create line break
            const [firstPart, secondPart] = item.split(", ");
            return (
              <li key={index} className="flex items-start">
                <span className="expertise-bullet"></span>
                <div className="text-sm text-gray-700">
                  {firstPart},
                  <br />
                  {secondPart}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExpertiseSection;
