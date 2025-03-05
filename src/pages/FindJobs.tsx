
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Search, MapPin, Briefcase, Filter, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JobCard from '@/components/JobCard';

// Sample job data
const sampleJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechVision Inc.',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    jobType: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to join our team.',
    postedDate: '2 days ago',
    skills: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: '2',
    title: 'Blockchain Engineer',
    company: 'CryptoFuture',
    location: 'Remote',
    salary: '$130,000 - $160,000',
    jobType: 'Full-time',
    description: 'Join our team to build cutting-edge blockchain solutions.',
    postedDate: '1 week ago',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts']
  },
  {
    id: '3',
    title: 'Product Designer',
    company: 'DesignHub',
    location: 'New York, NY',
    salary: '$90,000 - $110,000',
    jobType: 'Full-time',
    description: 'Create beautiful, intuitive designs for our clients.',
    postedDate: '3 days ago',
    skills: ['Figma', 'UI/UX', 'Design Systems']
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'DataMinds',
    location: 'Boston, MA',
    salary: '$115,000 - $140,000',
    jobType: 'Full-time',
    description: 'Apply advanced analytics to solve complex business problems.',
    postedDate: '5 days ago',
    skills: ['Python', 'Machine Learning', 'SQL']
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Remote',
    salary: '$100,000 - $130,000',
    jobType: 'Contract',
    description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
    postedDate: '1 day ago',
    skills: ['AWS', 'Docker', 'Kubernetes']
  }
];

const FindJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('all');
  
  const filteredJobs = sampleJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = location === '' || job.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesJobType = jobType === 'all' || 
                          (jobType === 'remote' && job.location.toLowerCase().includes('remote')) ||
                          (jobType !== 'remote' && job.jobType.toLowerCase() === jobType.toLowerCase());
    
    return matchesSearch && matchesLocation && matchesJobType;
  });

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Section */}
          <div className="bg-muted p-6 rounded-xl mb-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Find Your Dream Job</h1>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Job title, keyword, or company"
                    className="w-full pl-10 p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Location or Remote"
                    className="w-full pl-10 p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Button className="w-full h-full">Search Jobs</Button>
              </div>
            </div>
          </div>
          
          {/* Filters and Results */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Job Type</label>
                    <select
                      className="w-full p-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="remote">Remote</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Experience Level</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="entry" className="mr-2" />
                        <label htmlFor="entry">Entry Level</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="mid" className="mr-2" />
                        <label htmlFor="mid">Mid Level</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="senior" className="mr-2" />
                        <label htmlFor="senior">Senior Level</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Posted Within</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" name="posted" id="day" className="mr-2" />
                        <label htmlFor="day">24 hours</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" name="posted" id="week" className="mr-2" />
                        <label htmlFor="week">Last week</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" name="posted" id="month" className="mr-2" />
                        <label htmlFor="month">Last month</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="md:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">{filteredJobs.length} Jobs Found</h2>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <select className="p-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Most Recent</option>
                    <option>Highest Paid</option>
                    <option>Best Match</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map(job => (
                    <JobCard
                      key={job.id}
                      title={job.title}
                      company={job.company}
                      location={job.location}
                      salary={job.salary}
                      postedDate={job.postedDate}
                      skills={job.skills}
                    />
                  ))
                ) : (
                  <div className="text-center p-8 bg-muted rounded-lg">
                    <Briefcase className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                    <p className="text-muted-foreground">Try adjusting your search filters</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FindJobs;
