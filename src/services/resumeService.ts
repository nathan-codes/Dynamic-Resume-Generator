import { ResumeListResponse } from "../types/resume";
import api from "./api";

// Resume API functions
export const resumeService = {
  getAllResumes: async (
    page: number = 1,
    limit: number = 10
  ): Promise<ResumeListResponse> => {
    const response = await api.get<ResumeListResponse>(
      `/legacy/resume?page=${page}&limit=${limit}`
    );
    return response.data;
  },
};
