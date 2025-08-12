import React from "react";
import ResumeHeader from "./ResumeHeader";
import ProfileSection from "./ProfileSection";
import EducationSection from "./EducationSection";
import ExpertiseSection from "./ExpertiseSection";
import AwardsSection from "./AwardsSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import { Resume as ResumeType } from "../types/resume";

interface ResumeProps {
  data: ResumeType;
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  const resumeData = data.resume;

  return (
    <div className="max-w-[1106px] mx-auto bg-white shadow-lg">
      {/* Resume Container */}
      <div className="p-8">
        {/* Header */}
        <ResumeHeader
          firstName={resumeData.contact.first_name}
          lastName={resumeData.contact.last_name}
          title={resumeData.work_history[0].job_title}
          phone={resumeData.contact.phone_number}
          email={resumeData.contact.email}
          website={resumeData.contact.email}
          location={`${resumeData.contact.city}, ${resumeData.contact.country}`}
        />

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Left Column */}
          <div className="lg:w-2/5 space-y-6 mt-[8px]">
            {/* Profile Section */}
            <ProfileSection profile={resumeData.summary.prof_summary} />

            {/* Education Section */}
            <EducationSection education={resumeData.education} />

            {/* Expertise Section */}
            <ExpertiseSection
              expertise={resumeData.skills.map((skill) => skill.name)}
            />

            {/* Awards Section - Only show if we have awards data */}
            <AwardsSection awards={resumeData.education} />
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-gray-700 mx-3"></div>

          {/* Right Column */}
          <div className="lg:w-3/5 space-y-6 mt-[8px]">
            {/* Experience Section */}
            <ExperienceSection experience={resumeData.work_history} />

            {/* Skills Section */}
            <SkillsSection skills={resumeData.skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
