
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, DollarSign, Clock } from 'lucide-react';
import Button from './Button';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary?: string;
    type: string;
    posted: string;
    logo?: string;
    skills?: string[];
  };
  showApplyButton?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, showApplyButton = true }) => {
  return (
    <div className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow bg-card">
      <div className="flex items-start">
        {job.logo ? (
          <div className="w-12 h-12 flex-shrink-0 mr-4 overflow-hidden rounded">
            <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 flex-shrink-0 mr-4 bg-primary/10 rounded flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">
            <Link to={`/jobs/${job.id}`} className="hover:text-primary transition-colors">
              {job.title}
            </Link>
          </h3>
          
          <div className="text-muted-foreground mb-3">{job.company}</div>
          
          <div className="flex flex-wrap gap-y-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center mr-6">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </div>
            
            {job.salary && (
              <div className="flex items-center mr-6">
                <DollarSign className="w-4 h-4 mr-1" />
                {job.salary}
              </div>
            )}
            
            <div className="flex items-center mr-6">
              <Briefcase className="w-4 h-4 mr-1" />
              {job.type}
            </div>
            
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Posted {job.posted}
            </div>
          </div>
          
          {job.skills && job.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          
          {showApplyButton && (
            <div className="flex justify-end">
              <Button variant="outline" size="sm">Apply Now</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
