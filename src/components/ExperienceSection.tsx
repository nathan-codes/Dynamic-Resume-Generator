import React from "react";
import ExperienceItem from "./ExperienceItem";
import { WorkHistory } from "../types/resume";

interface ExperienceSectionProps {
  experience: WorkHistory[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  return (
    <div className="mb-6">
      {/* Section Title */}
      <h4 className="text-gray-700 text-xl font-extrabold uppercase mb-4">
        experience
      </h4>

      {/* Section Content */}
      <div className="space-y-0">
        {experience.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.job_title}
            company={exp.employer}
            date={formatExperienceDate(
              exp.start_date,
              exp.end_date,
              exp.currently_working_here
            )}
            responsibilities={formatResponsibilities(exp.job_description)}
          />
        ))}
      </div>
    </div>
  );
};


// Helper function to format experience dates
const formatExperienceDate = (
  startDate: string | null,
  endDate: string | null,
  currentlyWorking: boolean
): string => {
  if (startDate && endDate && !currentlyWorking) {
    return `${new Date(startDate).getFullYear()}-${new Date(
      endDate
    ).getFullYear()}`;
  } else if (startDate) {
    return `${new Date(startDate).getFullYear()}-${
      currentlyWorking ? "Present" : "Present"
    }`;
  }
  return "Ongoing";
};

// Helper function to format job description into responsibilities
const formatResponsibilities = (jobDescription: string): string[] => {
  if (!jobDescription) return ["No description available"];

  return jobDescription
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0)
   
};

export default ExperienceSection;
