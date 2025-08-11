import { Resume } from "../types/resume";

// Transform API resume data to the format expected by the Resume component
export const transformResumeData = (apiData: Resume) => {
  const resumeData = apiData.resume;

  return {
    header: {
      firstName: resumeData.contact?.first_name || "John",
      lastName: resumeData.contact?.last_name || "Doe",
      title: resumeData.job_title || "Software Developer",
      phone: resumeData.contact?.phone_number || "+1 (555) 123-4567",
      email: resumeData.contact?.email || "john.doe@example.com",
      website: "https://johndoe.com",
      location: `${resumeData.contact?.city || "City"}, ${
        resumeData.contact?.country || "Country"
      }`,
    },
    profile:
      resumeData.summary?.prof_summary ||
      "Experienced professional with a passion for creating innovative solutions.",
    education: resumeData.education?.map((edu) => ({
      year:
        edu.start_date && edu.end_date
          ? `${new Date(edu.start_date).getFullYear()}-${new Date(
              edu.end_date
            ).getFullYear()}`
          : edu.end_date
          ? new Date(edu.end_date).getFullYear().toString()
          : "2020-2024",
      degree: edu.qualification || "Bachelor of Science",
      university: edu.institution || "University of Technology",
    })) || [
      {
        year: "2020-2024",
        degree: "Bachelor of Science in Computer Science",
        university: "University of Technology",
      },
    ],
    expertise: resumeData.skills?.map((skill) => skill.name) || [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "SQL",
    ],
    awards: [
      {
        year: "2023",
        award: "Employee of the Year",
        institution: "Tech Company",
      },
    ],
    experience: resumeData.work_history?.map((exp) => ({
      title: exp.job_title || "Software Developer",
      company: exp.employer || "Tech Company",
      date:
        exp.start_date && exp.end_date
          ? `${new Date(exp.start_date).getFullYear()}-${
              exp.currently_working_here
                ? "Present"
                : new Date(exp.end_date).getFullYear()
            }`
          : exp.start_date
          ? `${new Date(exp.start_date).getFullYear()}-${
              exp.currently_working_here ? "Present" : "Present"
            }`
          : "2022-2024",
      responsibilities: [
        exp.job_description || "Developed and maintained web applications",
      ],
    })) || [
      {
        title: "Software Developer",
        company: "Tech Company",
        date: "2022-2024",
        responsibilities: [
          "Developed and maintained web applications",
          "Collaborated with cross-functional teams",
          "Implemented new features and improvements",
        ],
      },
    ],
    skills: resumeData.skills?.map((skill) => ({
      name: skill.name,
      proficiency: Math.floor(Math.random() * 5) + 1,
    })) || [
      { name: "JavaScript", proficiency: 4 },
      { name: "React", proficiency: 4 },
      { name: "Node.js", proficiency: 3 },
      { name: "Python", proficiency: 3 },
      { name: "SQL", proficiency: 4 },
    ],
  };
};
