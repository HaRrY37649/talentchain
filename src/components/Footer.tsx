
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github, Cpu, Shield, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-primary/5 to-background pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">IC</span>
              </div>
              <span className="text-xl font-bold">Intellichain</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Revolutionizing recruitment with AI and blockchain technology for a transparent, efficient, and trustless job marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link to="/find-jobs" className="text-muted-foreground hover:text-primary transition-colors">Find Jobs</Link></li>
              <li><Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">Create Profile</Link></li>
              <li><Link to="/store-credentials" className="text-muted-foreground hover:text-primary transition-colors">Store Credentials</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Controls</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="text-muted-foreground hover:text-primary transition-colors">Post a Job</Link></li>
              <li><Link to="/ai-matching" className="text-muted-foreground hover:text-primary transition-colors">AI Talent Matching</Link></li>
              <li><Link to="/verify-credentials" className="text-muted-foreground hover:text-primary transition-colors">Verify Credentials</Link></li>
              <li><Link to="/smart-contracts" className="text-muted-foreground hover:text-primary transition-colors">Smart Contracts</Link></li>
            </ul>
          </div>
          
          {/* Features highlight */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Technology</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Cpu className="w-5 h-5 mr-2 text-primary" />
                  <span>AI-Powered Matching</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  <span>Blockchain Credentials</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  <span>Smart Contract Jobs</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-t border-border my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Intellichain. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
