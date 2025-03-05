
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import JobCard from '@/components/JobCard';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  BarChart, 
  FileText, 
  Settings,
  PlusCircle,
  Search,
  Filter,
  User
} from 'lucide-react';

// Sample data
const recentJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechVision Inc.',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    posted: '2 days ago',
    logo: 'https://images.unsplash.com/photo-1549921661-2f64a5201e5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'Blockchain Developer',
    company: 'Crypto Innovations',
    location: 'Remote',
    salary: '$130,000 - $170,000',
    type: 'Full-time',
    posted: '3 days ago',
    logo: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts'],
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'DesignHub Co.',
    location: 'New York, NY',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    posted: '1 week ago',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
    skills: ['Figma', 'Adobe XD', 'User Research'],
  }
];

const recentCandidates = [
  {
    id: '1',
    name: 'John Smith',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    matchScore: 95,
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    avatar: null
  },
  {
    id: '2',
    name: 'Emily Chen',
    title: 'UX/UI Designer',
    location: 'New York, NY',
    matchScore: 92,
    skills: ['Figma', 'Adobe XD', 'User Research'],
    avatar: null
  },
  {
    id: '3',
    name: 'Michael Johnson',
    title: 'Blockchain Developer',
    location: 'Remote',
    matchScore: 88,
    skills: ['Solidity', 'Ethereum', 'Smart Contracts'],
    avatar: null
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userType, setUserType] = useState('employer'); // or 'jobseeker'
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Verify authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to access the dashboard",
        variant: "destructive",
      });
      navigate('/sign-in');
    }
  }, [navigate, toast]);
  
  // Toggle between employer and job seeker view (for demo purposes)
  const toggleUserType = () => {
    setUserType(userType === 'employer' ? 'jobseeker' : 'employer');
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0 mb-8 md:mb-0 md:mr-8">
            <div className="glass-card p-4 mb-6">
              {/* User profile snapshot */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Alex Johnson</div>
                  <div className="text-sm text-muted-foreground">{userType === 'employer' ? 'Hiring Manager' : 'Job Seeker'}</div>
                </div>
              </div>
              
              {/* For demo purposes, allow switching between employer and job seeker views */}
              <button
                onClick={toggleUserType}
                className="text-xs text-primary hover:underline block mb-2"
              >
                Switch to {userType === 'employer' ? 'Job Seeker' : 'Employer'} View
              </button>
              
              <Link to="/profile" className="text-xs text-primary hover:underline block">
                View Profile
              </Link>
            </div>
            
            {/* Navigation Menu */}
            <div className="glass-card overflow-hidden">
              <nav className="flex flex-col">
                <button 
                  className={`flex items-center px-4 py-3 text-left hover:bg-primary/5 ${activeTab === 'dashboard' ? 'bg-primary/10 text-primary border-l-4 border-primary' : ''}`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  <LayoutDashboard className="w-5 h-5 mr-3" />
                  <span>Dashboard</span>
                </button>
                
                {userType === 'employer' ? (
                  <>
                    <button 
                      className={`flex items-center px-4 py-3 text-left hover:bg-primary/5 ${activeTab === 'jobs' ? 'bg-primary/10 text-primary border-l-4 border-primary' : ''}`}
                      onClick={() => setActiveTab('jobs')}
                    >
                      <Briefcase className="w-5 h-5 mr-3" />
                      <span>My Job Posts</span>
                    </button>
                    
                    <button 
                      className={`flex items-center px-4 py-3 text-left hover:bg-primary/5 ${activeTab === 'candidates' ? 'bg-primary/10 text-primary border-l-4 border-primary' : ''}`}
                      onClick={() => setActiveTab('candidates')}
                    >
                      <Users className="w-5 h-5 mr-3" />
                      <span>Candidates</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className={`flex items-center px-4 py-3 text-left hover:bg-primary/5 ${activeTab === 'applications' ? 'bg-primary/10 text-primary border-l-4 border-primary' : ''}`}
                      onClick={() => setActiveTab('applications')}
                    >
                      <FileText className="w-5 h-5 mr-3" />
                      <span>My Applications</span>
                    </button>
                    
                    <button 
                      className={`flex items-center px-4 py-3 text-left hover:bg-primary/5 ${activeTab === 'matches' ? 'bg-primary/10 text-primary border-l-4 border-primary' : ''}`}
                      onClick={() => setActiveTab('matches')}
                    >
                      <Search className="w-5 h-5 mr-3" />
                      <span>Job Matches</span>
                    </button>
                  </>
                )}
                
                <button 
                  className={`flex items-center px-4 py-3 text-left hover:bg-primary/5 ${activeTab === 'analytics' ? 'bg-primary/10 text-primary border-l-4 border-primary' : ''}`}
                  onClick={() => setActiveTab('analytics')}
                >
                  <BarChart className="w-5 h-5 mr-3" />
                  <span>Analytics</span>
                </button>
                
                <button 
                  className={`flex items-center px-4 py-3 text-left hover:bg-primary/5 ${activeTab === 'settings' ? 'bg-primary/10 text-primary border-l-4 border-primary' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Header with action buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <h1 className="text-2xl font-bold mb-4 sm:mb-0">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'jobs' && 'My Job Postings'}
                {activeTab === 'candidates' && 'Candidate Matches'}
                {activeTab === 'applications' && 'My Applications'}
                {activeTab === 'matches' && 'Job Matches'}
                {activeTab === 'analytics' && 'Analytics'}
                {activeTab === 'settings' && 'Account Settings'}
              </h1>
              
              <div className="flex space-x-4">
                {userType === 'employer' && activeTab === 'jobs' && (
                  <Button onClick={() => navigate('/post-job')}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Post New Job
                  </Button>
                )}
                
                {userType === 'jobseeker' && activeTab === 'matches' && (
                  <Button onClick={() => navigate('/find-jobs')}>
                    <Search className="mr-2 h-4 w-4" />
                    Find Jobs
                  </Button>
                )}
                
                {(activeTab === 'jobs' || activeTab === 'candidates' || activeTab === 'applications' || activeTab === 'matches') && (
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                )}
              </div>
            </div>
            
            {/* Dashboard Content */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {userType === 'employer' ? (
                    <>
                      <div className="glass-card p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Active Job Posts</div>
                            <div className="text-3xl font-bold">8</div>
                          </div>
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Total Applicants</div>
                            <div className="text-3xl font-bold">142</div>
                          </div>
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Blockchain Verifications</div>
                            <div className="text-3xl font-bold">76</div>
                          </div>
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="glass-card p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Job Applications</div>
                            <div className="text-3xl font-bold">12</div>
                          </div>
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">AI Matches</div>
                            <div className="text-3xl font-bold">28</div>
                          </div>
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Search className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">Verified Credentials</div>
                            <div className="text-3xl font-bold">6</div>
                          </div>
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Recent Activity */}
                <div className="glass-card p-6">
                  <h2 className="text-lg font-semibold mb-4">
                    {userType === 'employer' ? 'Recent Job Postings' : 'Recent Job Matches'}
                  </h2>
                  
                  <div className="space-y-6">
                    {recentJobs.map(job => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                </div>
                
                {/* Trending Section */}
                {userType === 'employer' && (
                  <div className="glass-card p-6">
                    <h2 className="text-lg font-semibold mb-4">Top Candidate Matches</h2>
                    
                    <div className="space-y-4">
                      {recentCandidates.map(candidate => (
                        <div key={candidate.id} className="flex items-center p-3 hover:bg-accent/50 rounded-md transition-colors">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-medium">{candidate.name}</h3>
                            <p className="text-sm text-muted-foreground">{candidate.title}</p>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm font-medium text-primary">{candidate.matchScore}% match</div>
                            <div className="text-xs text-muted-foreground">{candidate.location}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
