
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Layout from '@/components/Layout';
import { Button } from '@/components/Button';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  FileText, 
  Tag, 
  Plus, 
  X
} from 'lucide-react';

const PostJob = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('full-time');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState<string[]>(['']);
  const [skills, setSkills] = useState<string[]>(['']);
  const [benefits, setBenefits] = useState<string[]>(['']);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddItem = (type: 'requirements' | 'skills' | 'benefits') => {
    if (type === 'requirements') {
      setRequirements([...requirements, '']);
    } else if (type === 'skills') {
      setSkills([...skills, '']);
    } else {
      setBenefits([...benefits, '']);
    }
  };
  
  const handleRemoveItem = (type: 'requirements' | 'skills' | 'benefits', index: number) => {
    if (type === 'requirements') {
      setRequirements(requirements.filter((_, i) => i !== index));
    } else if (type === 'skills') {
      setSkills(skills.filter((_, i) => i !== index));
    } else {
      setBenefits(benefits.filter((_, i) => i !== index));
    }
  };
  
  const handleItemChange = (type: 'requirements' | 'skills' | 'benefits', index: number, value: string) => {
    if (type === 'requirements') {
      const newRequirements = [...requirements];
      newRequirements[index] = value;
      setRequirements(newRequirements);
    } else if (type === 'skills') {
      const newSkills = [...skills];
      newSkills[index] = value;
      setSkills(newSkills);
    } else {
      const newBenefits = [...benefits];
      newBenefits[index] = value;
      setBenefits(newBenefits);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!jobTitle || !company || !location || !description) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // This would connect to your blockchain or backend
      // For now we'll just simulate with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Job Posted Successfully",
        description: "Your job listing has been published to the blockchain.",
      });
      
      // Navigate back to jobs dashboard or listing page
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error posting your job. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
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
            
            {/* Job Description */}
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
            
            {/* Requirements */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Requirements & Skills
              </h2>
              
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
            </div>
            
            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Benefits & Perks</h2>
              
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
