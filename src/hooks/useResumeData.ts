import { useQuery } from "@tanstack/react-query";
import { resumeService } from "../services/resumeService";

export const useResumeData = () => {
  const resumesQuery = useQuery({
    queryKey: ["resumes"],
    queryFn: () => resumeService.getAllResumes(1, 10),
  });

  // Get the first resume from the list
  const firstResume = resumesQuery.data?.resumes?.[0];

  return {
    isLoading: resumesQuery.isLoading,
    error: resumesQuery.error,
    data: firstResume,
    allResumesData: resumesQuery.data,
    refetch: resumesQuery.refetch,
  };
};
