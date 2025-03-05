
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

export const useJobForm = () => {
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

  return {
    jobTitle, setJobTitle,
    company, setCompany,
    location, setLocation,
    jobType, setJobType,
    salary, setSalary,
    description, setDescription,
    requirements, setRequirements,
    skills, setSkills,
    benefits, setBenefits,
    isLoading,
    handleAddItem,
    handleRemoveItem,
    handleItemChange,
    handleSubmit
  };
};
