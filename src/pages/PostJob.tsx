
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import JobBasicInfoSection from '@/features/jobs/components/JobBasicInfoSection';
import JobDescriptionSection from '@/features/jobs/components/JobDescriptionSection';
import JobRequirementsSkillsSection from '@/features/jobs/components/JobRequirementsSkillsSection';
import JobBenefitsSection from '@/features/jobs/components/JobBenefitsSection';
import { useJobForm } from '@/features/jobs/hooks/useJobForm';

const PostJob = () => {
  const navigate = useNavigate();
  const {
    jobTitle, setJobTitle,
    company, setCompany,
    location, setLocation,
    jobType, setJobType,
    salary, setSalary,
    description, setDescription,
    requirements,
    skills,
    benefits,
    isLoading,
    handleAddItem,
    handleRemoveItem,
    handleItemChange,
    handleSubmit
  } = useJobForm();
  
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Post a New Job</h1>
          <p className="text-muted-foreground mt-2">
            Create a blockchain-secured job posting and find the perfect candidates with AI matching
          </p>
        </div>
        
        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic information */}
            <JobBasicInfoSection
              jobTitle={jobTitle}
              setJobTitle={setJobTitle}
              company={company}
              setCompany={setCompany}
              location={location}
              setLocation={setLocation}
              jobType={jobType}
              setJobType={setJobType}
              salary={salary}
              setSalary={setSalary}
            />
            
            {/* Job Description */}
            <JobDescriptionSection 
              description={description}
              setDescription={setDescription}
            />
            
            {/* Requirements & Skills */}
            <JobRequirementsSkillsSection
              requirements={requirements}
              skills={skills}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              handleItemChange={handleItemChange}
            />
            
            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Benefits & Perks</h2>
              <JobBenefitsSection
                benefits={benefits}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
                handleItemChange={handleItemChange}
              />
            </div>
            
            {/* Submission */}
            <div className="pt-6 border-t border-border flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="px-6"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                isLoading={isLoading}
                disabled={isLoading}
                className="px-8"
              >
                Post Job
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default PostJob;
