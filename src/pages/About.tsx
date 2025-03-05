
import React from 'react';
import Layout from '@/components/Layout';
import { Code, Shield, Cpu, Users, ArrowRight } from 'lucide-react';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">How Intellichain Works</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Intellichain combines AI and blockchain technology to create a transparent, efficient, and secure hiring platform for employers and job seekers.
            </p>
          </div>
          
          {/* How It Works Section */}
          <HowItWorks />
          
          {/* Technology Stack */}
          <div className="my-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-muted p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced AI</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Natural Language Processing for resume and job description analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Machine Learning algorithms for perfect candidate matching</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Neural networks for identifying skills beyond keyword matching</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Sentiment analysis to optimize job descriptions for inclusion</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Blockchain Infrastructure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Immutable credential storage using distributed ledger technology</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Smart contracts for automated hiring workflows and agreements</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Zero-knowledge proofs for privacy-preserving credential verification</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Tokenized incentives for platform participation and referrals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <Features />
          
          {/* Team Section */}
          <div className="my-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg">Team Member {item}</h3>
                  <p className="text-primary">Co-Founder & CTO</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Former Tech Lead at major tech companies with 10+ years of experience.
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-primary/10 rounded-xl p-8 md:p-12 text-center my-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Hiring Process?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of companies and job seekers who are already using Intellichain to find their perfect match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Users className="mr-2 h-5 w-5" />
                For Employers
              </Button>
              <Button size="lg" variant="outline">
                <Shield className="mr-2 h-5 w-5" />
                For Job Seekers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
