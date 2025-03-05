
import React from 'react';
import { Plus, X } from 'lucide-react';

interface JobBenefitsSectionProps {
  benefits: string[];
  handleAddItem: (type: 'requirements' | 'skills' | 'benefits') => void;
  handleRemoveItem: (type: 'requirements' | 'skills' | 'benefits', index: number) => void;
  handleItemChange: (type: 'requirements' | 'skills' | 'benefits', index: number, value: string) => void;
}

const JobBenefitsSection: React.FC<JobBenefitsSectionProps> = ({
  benefits,
  handleAddItem,
  handleRemoveItem,
  handleItemChange
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium">Benefits</label>
      {benefits.map((benefit, index) => (
        <div key={`benefit-${index}`} className="flex mb-2">
          <input
            type="text"
            value={benefit}
            onChange={(e) => handleItemChange('benefits', index, e.target.value)}
            placeholder="e.g. Flexible work hours"
            className="flex-1 p-3 border border-input rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            onClick={() => handleRemoveItem('benefits', index)}
            className="bg-muted p-3 rounded-r-md hover:bg-muted/80"
            disabled={benefits.length <= 1}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleAddItem('benefits')}
        className="mt-2 flex items-center text-primary hover:text-primary/80"
      >
        <Plus className="w-4 h-4 mr-1" /> Add Benefit
      </button>
    </div>
  );
};

export default JobBenefitsSection;
