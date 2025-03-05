
import React from 'react';
import { UserCircle, Building2, Brain, FileCheck, Briefcase, Star } from 'lucide-react';
import Button from './Button';

const jobSeekerSteps = [
  {
    icon: UserCircle,
    title: 'Create a Profile',
    description: 'Sign up and build your decentralized identity with complete privacy controls.',
    delay: '0ms'
  },
  {
    icon: FileCheck,
    title: 'Upload Credentials',
    description: 'Store your verifiable credentials on the blockchain for instant verification.',
    delay: '200ms'
  },
  {
    icon: Brain,
    title: 'AI Skill Matching',
    description: 'Let our AI match your skills and experience with the perfect opportunities.',
    delay: '400ms'
  }
];

const employerSteps = [
  {
    icon: Building2,
    title: 'Create Company Profile',
    description: 'Establish your company presence with verifiable blockchain credentials.',
    delay: '0ms'
  },
  {
    icon: Briefcase,
    title: 'Post Job Opportunities',
    description: 'Create smart contract-based job listings with automated workflows.',
    delay: '200ms'
  },
  {
    icon: Star,
    title: 'Find Top Talent',
    description: 'Let our AI match your requirements with the best verified candidates.',
    delay: '400ms'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">How Intellichain <span className="text-gradient">Works</span></h2>
          <p className="text-lg text-muted-foreground animate-fadeIn" style={{animationDelay: '150ms'}}>
            A streamlined, secure process for both job seekers and employers, powered by AI and blockchain technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
          {/* Job Seekers */}
          <div className="border border-primary/20 rounded-2xl p-8 glassmorphism animate-fadeInLeft">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              For Job Seekers
            </div>
            
            <div className="space-y-8">
              {jobSeekerSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-5 opacity-0 animate-fadeIn"
                  style={{
                    animationDelay: step.delay,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="shrink-0 mt-1">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg">Create Your Profile</Button>
            </div>
          </div>
          
          {/* Employers */}
          <div className="border border-primary/20 rounded-2xl p-8 glassmorphism animate-fadeInRight">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              For Employers
            </div>
            
            <div className="space-y-8">
              {employerSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-5 opacity-0 animate-fadeIn"
                  style={{
                    animationDelay: step.delay,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="shrink-0 mt-1">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg">Post a Job</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full max-h-80 rounded-full bg-primary/5 blur-3xl -z-10 opacity-70"></div>
    </section>
  );
};

export default HowItWorks;
