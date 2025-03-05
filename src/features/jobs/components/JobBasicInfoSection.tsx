
import React from 'react';
import { Briefcase, MapPin, DollarSign, Clock } from 'lucide-react';

interface JobBasicInfoSectionProps {
  jobTitle: string;
  setJobTitle: React.Dispatch<React.SetStateAction<string>>;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  jobType: string;
  setJobType: React.Dispatch<React.SetStateAction<string>>;
  salary: string;
  setSalary: React.Dispatch<React.SetStateAction<string>>;
}

const JobBasicInfoSection: React.FC<JobBasicInfoSectionProps> = ({
  jobTitle, setJobTitle,
  company, setCompany,
  location, setLocation,
  jobType, setJobType,
  salary, setSalary
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center">
        <Briefcase className="w-5 h-5 mr-2" />
        Basic Information
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="jobTitle" className="block mb-2 font-medium">
            Job Title *
          </label>
          <input
            id="jobTitle"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g. Senior Frontend Developer"
            className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block mb-2 font-medium">
            Company *
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. TechVision Inc."
            className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="location" className="block mb-2 font-medium">
            <MapPin className="w-4 h-4 inline mr-1" />
            Location *
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. San Francisco, CA (or Remote)"
            className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="jobType" className="block mb-2 font-medium">
            <Clock className="w-4 h-4 inline mr-1" />
            Job Type *
          </label>
          <select
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="freelance">Freelance</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="salary" className="block mb-2 font-medium">
            <DollarSign className="w-4 h-4 inline mr-1" />
            Salary Range
          </label>
          <input
            id="salary"
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="e.g. $80,000 - $120,000"
            className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default JobBasicInfoSection;
