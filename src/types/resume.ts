export interface WorkHistory {
  job_title: string;
  job_description: string;
  employer: string;
  country: string | null;
  city: string | null;
  start_date: string | null;
  end_date: string | null;
  currently_working_here: boolean;
}

export interface Contact {
  first_name: string;
  last_name: string;
  city: string;
  country: string;
  postal_code: string;
  phone_number: string;
  email: string;
}

export interface Education {
  institution: string;
  country: string;
  field_of_study: string;
  qualification: string;
  start_date: string | null;
  end_date: string | null;
}

export interface Skill {
  name: string;
}

export interface Summary {
  prof_summary: string;
}

export interface ResumeData {
  picture: string | null;
  job_title: string | null;
  work_history: WorkHistory[];
  contact: Contact;
  education: Education[];
  skills: Skill[];
  select_language: string | null;
  summary: Summary;
  certification: any | null;
}

export interface Resume {
  id: string;
  user_id: string;
  template_id: string;
  resume: ResumeData;
  created_on: string;
  updated_on: string;
}

export interface ResumeListResponse {
  total: number;
  page: number;
  limit: number;
  resumes: Resume[];
}
