import React from "react";
import { phoneIcon, emailIcon } from "../assets";
import { worldIcon } from "../assets";
import { locationIcon } from "../assets";

interface ResumeHeaderProps {
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  email: string;
  website: string;
  location: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  firstName,
  lastName,
  title,
  phone,
  email,
  website,
  location,
}) => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 space-y-6 lg:space-y-0">
        {/* Left side - Name and Title */}
        <div className="flex-1">
          <div className="w-full lg:w-80 h-auto lg:h-24 justify-start">
            <span className="text-gray-700 text-3xl sm:text-4xl lg:text-5xl font-normal  uppercase leading-tight lg:leading-[47.50px]">
              {firstName}
              <br />
            </span>
            <span className="text-gray-700 text-3xl sm:text-4xl lg:text-5xl font-extrabold  uppercase leading-tight lg:leading-[47.50px] ">
              {lastName}
            </span>
          </div>
          <div className="w-full  justify-start text-gray-700 text-lg sm:text-xl font-semibold  uppercase mt-2 lg:mt-[8px]">
            {title}
          </div>
        </div>

        {/* Right side - Contact Information */}
        <div className="text-left lg:text-right space-y-4 sm:space-y-5 lg:space-y-6 mt-6 lg:mt-0 lg:pr-[40px]">
          <div className="flex items-center justify-start lg:justify-end space-x-3">
            <span className="w-full sm:w-52 lg:w-52 text-left lg:text-right justify-start text-gray-700 text-xs font-semibold font-['Open_Sans'] uppercase leading-none">
              {phone}
            </span>
            <img
              src={phoneIcon}
              alt="Phone"
              className="w-4 h-4 flex-shrink-0"
            />
          </div>
          <div className="flex items-center justify-start lg:justify-end space-x-3">
            <span className="w-full sm:w-52 lg:w-52 text-left lg:text-right justify-start text-gray-700 text-xs font-semibold font-['Open_Sans'] uppercase leading-none">
              {email}
            </span>
            <img
              src={emailIcon}
              alt="Email"
              className="w-4 h-4 flex-shrink-0"
            />
          </div>
          <div className="flex items-center justify-start lg:justify-end space-x-3">
            <span className="w-full sm:w-52 lg:w-52 text-left lg:text-right justify-start text-gray-700 text-xs font-semibold font-['Open_Sans'] uppercase leading-none">
              {website}
            </span>
            <img
              src={worldIcon}
              alt="Website"
              className="w-4 h-4 flex-shrink-0"
            />
          </div>
          <div className="flex items-center justify-start lg:justify-end space-x-3">
            <span className="w-full sm:w-53 lg:w-52   text-left lg:text-right justify-start text-gray-700 text-xs font-semibold font-['Open_Sans'] uppercase leading-none">
              {location}
            </span>
            <img
              src={locationIcon}
              alt="Location"
              className="w-4 h-4 flex-shrink-0"
            />
          </div>
        </div>
      </div>

      {/* Horizontal line separator */}
      <div className="w-full h-px bg-gray-700"></div>
    </div>
  );
};

export default ResumeHeader;
