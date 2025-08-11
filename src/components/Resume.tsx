import React from "react";
import ResumeHeader from "./ResumeHeader";
import ProfileSection from "./ProfileSection";
import EducationSection from "./EducationSection";
import ExpertiseSection from "./ExpertiseSection";
import AwardsSection from "./AwardsSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

interface ResumeData {
  header: {
    firstName: string;
    lastName: string;
    title: string;
    phone: string;
    email: string;
    website: string;
    location: string;
  };
  profile: string;
  education: Array<{
    year: string;
    degree: string;
    university: string;
  }>;
  expertise: string[];
  awards: Array<{
    year: string;
    award: string;
    institution: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    date: string;
    responsibilities: string[];
  }>;
  skills: Array<{
    name: string;
    proficiency: number;
  }>;
}

interface ResumeProps {
  data: ResumeData;
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  return (
    <div className="max-w-[1106px] mx-auto bg-white shadow-lg">
      {/* Resume Container */}
      <div className="p-8">
        {/* Header */}
        <ResumeHeader
          firstName={data.header.firstName}
          lastName={data.header.lastName}
          title={data.header.title}
          phone={data.header.phone}
          email={data.header.email}
          website={data.header.website}
          location={data.header.location}
        />

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Left Column */}
          <div className="lg:w-2/5 space-y-6 mt-[8px]">
            {/* Profile Section */}
            <ProfileSection profile={data.profile} />

            {/* Education Section */}
            <EducationSection education={data.education} />

            {/* Expertise Section */}
            <ExpertiseSection expertise={data.expertise} />

            {/* Awards Section */}
            <AwardsSection awards={data.awards} />
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-gray-700 mx-4"></div>

          {/* Right Column */}
          <div className="lg:w-3/5 space-y-6 mt-[8px]">
            {/* Experience Section */}
            <ExperienceSection experience={data.experience} />

            {/* Skills Section */}
            <SkillsSection skills={data.skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
