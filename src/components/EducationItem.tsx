import React from "react";

interface EducationItemProps {
  year: string;
  degree: string;
  university: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  year,
  degree,
  university,
}) => {
  return (
    <div className="mb-2 last:mb-0">
      {/* Year at the top */}
      <div className= "justify-start text-black text-xs font-semibold uppercase">
        {year}
      </div>

      {/* Degree below year  */}
      <div className=" justify-start text-neutral-700 text-base font-bold uppercase">
        {degree}
      </div>

      {/* University at bottom */}
      <div className=" justify-start text-black text-base font-[300] uppercase">
        {university}
      </div>
    </div>
  );
};

export default EducationItem;
