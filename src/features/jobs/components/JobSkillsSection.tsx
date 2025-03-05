
import React from 'react';
import { Plus, X } from 'lucide-react';

interface JobSkillsSectionProps {
  skills: string[];
  handleAddItem: (type: 'requirements' | 'skills' | 'benefits') => void;
  handleRemoveItem: (type: 'requirements' | 'skills' | 'benefits', index: number) => void;
  handleItemChange: (type: 'requirements' | 'skills' | 'benefits', index: number, value: string) => void;
}

const JobSkillsSection: React.FC<JobSkillsSectionProps> = ({
  skills,
  handleAddItem,
  handleRemoveItem,
  handleItemChange
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium">Required Skills</label>
      {skills.map((skill, index) => (
        <div key={`skill-${index}`} className="flex mb-2">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleItemChange('skills', index, e.target.value)}
            placeholder="e.g. JavaScript"
            className="flex-1 p-3 border border-input rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            onClick={() => handleRemoveItem('skills', index)}
            className="bg-muted p-3 rounded-r-md hover:bg-muted/80"
            disabled={skills.length <= 1}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleAddItem('skills')}
        className="mt-2 flex items-center text-primary hover:text-primary/80"
      >
        <Plus className="w-4 h-4 mr-1" /> Add Skill
      </button>
    </div>
  );
};

export default JobSkillsSection;
