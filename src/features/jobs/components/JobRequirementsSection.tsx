
import React from 'react';
import { Plus, X } from 'lucide-react';

interface JobRequirementsSectionProps {
  requirements: string[];
  setRequirements: React.Dispatch<React.SetStateAction<string[]>>;
  handleAddItem: (type: 'requirements' | 'skills' | 'benefits') => void;
  handleRemoveItem: (type: 'requirements' | 'skills' | 'benefits', index: number) => void;
  handleItemChange: (type: 'requirements' | 'skills' | 'benefits', index: number, value: string) => void;
}

const JobRequirementsSection: React.FC<JobRequirementsSectionProps> = ({
  requirements,
  handleAddItem,
  handleRemoveItem,
  handleItemChange
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium">Job Requirements</label>
      {requirements.map((req, index) => (
        <div key={`req-${index}`} className="flex mb-2">
          <input
            type="text"
            value={req}
            onChange={(e) => handleItemChange('requirements', index, e.target.value)}
            placeholder="e.g. 3+ years of experience with React"
            className="flex-1 p-3 border border-input rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            onClick={() => handleRemoveItem('requirements', index)}
            className="bg-muted p-3 rounded-r-md hover:bg-muted/80"
            disabled={requirements.length <= 1}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleAddItem('requirements')}
        className="mt-2 flex items-center text-primary hover:text-primary/80"
      >
        <Plus className="w-4 h-4 mr-1" /> Add Requirement
      </button>
    </div>
  );
};

export default JobRequirementsSection;
