
import React from 'react';
import { Tag } from 'lucide-react';
import JobRequirementsSection from './JobRequirementsSection';
import JobSkillsSection from './JobSkillsSection';

interface JobRequirementsSkillsSectionProps {
  requirements: string[];
  skills: string[];
  handleAddItem: (type: 'requirements' | 'skills' | 'benefits') => void;
  handleRemoveItem: (type: 'requirements' | 'skills' | 'benefits', index: number) => void;
  handleItemChange: (type: 'requirements' | 'skills' | 'benefits', index: number, value: string) => void;
}

const JobRequirementsSkillsSection: React.FC<JobRequirementsSkillsSectionProps> = ({
  requirements,
  skills,
  handleAddItem,
  handleRemoveItem,
  handleItemChange
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center">
        <Tag className="w-5 h-5 mr-2" />
        Requirements & Skills
      </h2>
      
      <JobRequirementsSection
        requirements={requirements}
        setRequirements={() => {}}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        handleItemChange={handleItemChange}
      />
      
      <JobSkillsSection
        skills={skills}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        handleItemChange={handleItemChange}
      />
    </div>
  );
};

export default JobRequirementsSkillsSection;
