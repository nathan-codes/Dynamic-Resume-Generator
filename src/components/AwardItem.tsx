import React from "react";

interface AwardItemProps {
  year: string;
  award: string;
  institution: string;
}

const AwardItem: React.FC<AwardItemProps> = ({ year, award, institution }) => {
  return (
    <div className="mb-2 last:mb-0">
      {/* Year at the top */}
      <div className="justify-start text-black text-xs font-semibold uppercase">
        {year}
      </div>

      {/* Award below year */}
      <div className="justify-start text-neutral-700 text-base font-bold uppercase">
        {award}
      </div>

      {/* Institution at bottom */}
      <div className="justify-start text-black text-base font-light uppercase">
        {institution}
      </div>
    </div>
  );
};

export default AwardItem;
