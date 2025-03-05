
import React from 'react';
import Layout from '@/components/Layout';
import { Brain, Zap, Search, FileCheck, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AiMatching = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">AI-Powered Talent Matching</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Our advanced machine learning algorithms analyze job descriptions and candidate profiles to create perfect matches based on skills, experience, and culture fit.
            </p>
            <Button size="lg" className="font-semibold">
              <Brain className="mr-2 h-5 w-5" />
              Start Matching Now
            </Button>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">How Our AI Matching Works</h2>
              <p className="text-muted-foreground">
                Intellichain's proprietary machine learning algorithms go beyond keyword matching to understand the nuances of job requirements and candidate qualifications.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Natural Language Processing</h3>
                    <p className="text-muted-foreground">Our AI interprets job descriptions and resumes to extract key skills and requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Semantic Matching</h3>
                    <p className="text-muted-foreground">We understand the meaning behind words, not just the words themselves.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Blockchain Verification</h3>
                    <p className="text-muted-foreground">All credentials are verified using our blockchain technology for instant proof of skills.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Match Scoring</h3>
                    <p className="text-muted-foreground">Candidates are ranked by match percentage with detailed reasoning.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Try Our Matching Algorithm</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="jobTitle" className="block mb-2 font-medium">Job Title</label>
                  <input 
                    type="text" 
                    id="jobTitle" 
                    placeholder="e.g. Senior Frontend Developer"
                    className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="skills" className="block mb-2 font-medium">Key Skills Required</label>
                  <textarea 
                    id="skills" 
                    placeholder="Enter skills separated by commas (e.g. React, TypeScript, UI/UX)"
                    className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block mb-2 font-medium">Experience Level</label>
                  <select 
                    id="experience"
                    className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-5 years)</option>
                    <option value="senior">Senior Level (5+ years)</option>
                    <option value="lead">Lead/Manager (8+ years)</option>
                  </select>
                </div>
                
                <Button className="w-full">Find Matching Candidates</Button>
              </form>
            </div>
          </div>
          
          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-border">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">94%</p>
              <p className="text-muted-foreground">Matching Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">72h</p>
              <p className="text-muted-foreground">Average Time to Hire</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">83%</p>
              <p className="text-muted-foreground">Retention Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10k+</p>
              <p className="text-muted-foreground">Matches Made</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AiMatching;
