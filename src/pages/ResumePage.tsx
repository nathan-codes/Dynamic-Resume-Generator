import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';
import { useResumeData } from '../hooks/useResumeData';
import Resume from '../components/Resume';
import { transformResumeData } from '../utils/dataTransform';

const ResumePage: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data: resumeData, isLoading, error, refetchResume } = useResumeData();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Loading resume data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-md p-6">
            <h3 className="text-lg font-medium text-red-800 mb-2">
              Error Loading Resume
            </h3>
            <p className="text-sm text-red-700 mb-4">
              {error instanceof Error ? error.message : 'An error occurred while loading your resume data.'}
            </p>
            <button
              onClick={() => refetchResume()}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            No Resume Found
          </h3>
          <p className="text-gray-600">
            No resume data was found for your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Dynamic Resume Generator
              </h1>
              {user && (
                <p className="text-sm text-gray-600">
                  Welcome, {user.fullName || user.email}
                </p>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Resume data={transformResumeData(resumeData)} />
        </div>
      </main>
    </div>
  );
};

export default ResumePage;
