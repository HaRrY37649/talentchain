
import React from 'react';
import { FileText } from 'lucide-react';

interface JobDescriptionSectionProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const JobDescriptionSection: React.FC<JobDescriptionSectionProps> = ({
  description,
  setDescription
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center">
        <FileText className="w-5 h-5 mr-2" />
        Job Description
      </h2>
      
      <div>
        <label htmlFor="description" className="block mb-2 font-medium">
          Description *
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide a detailed description of the job role, responsibilities, and your company..."
          className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
          required
        />
      </div>
    </div>
  );
};

export default JobDescriptionSection;
