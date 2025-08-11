import { useQuery } from '@tanstack/react-query';
import { resumeAPI } from '../services/api';

export const useResumeData = () => {
  // First, get all resumes to find the first one
  const allResumesQuery = useQuery({
    queryKey: ['resumes'],
    queryFn: () => resumeAPI.getAllResumes(1, 10),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });

  // Then, if we have resumes, get the first one by ID
  const firstResumeId = allResumesQuery.data?.resumes?.[0]?.id;
  
  const singleResumeQuery = useQuery({
    queryKey: ['resume', firstResumeId],
    queryFn: () => resumeAPI.getResumeById(firstResumeId!),
    enabled: !!firstResumeId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    // All resumes query state
    allResumesLoading: allResumesQuery.isLoading,
    allResumesError: allResumesQuery.error,
    allResumesData: allResumesQuery.data,
    
    // Single resume query state
    resumeLoading: singleResumeQuery.isLoading,
    resumeError: singleResumeQuery.error,
    resumeData: singleResumeQuery.data,
    
    // Combined loading state
    isLoading: allResumesQuery.isLoading || (!!firstResumeId && singleResumeQuery.isLoading),
    
    // Combined error state
    error: allResumesQuery.error || singleResumeQuery.error,
    
    // Combined data
    data: singleResumeQuery.data,
    
    // Refetch functions
    refetchAll: allResumesQuery.refetch,
    refetchResume: singleResumeQuery.refetch,
  };
};
