
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle route navigation and close mobile menu
  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-background/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={handleNavigation}
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold">IC</span>
            </div>
            <span className="text-xl font-bold">Intellichain</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>For Employers</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="rounded-md shadow-lg py-1 bg-background border border-border overflow-hidden">
                  <Link to="/post-job" className="block px-4 py-2 text-sm hover:bg-primary/10" onClick={handleNavigation}>Post a Job</Link>
                  <Link to="/ai-matching" className="block px-4 py-2 text-sm hover:bg-primary/10" onClick={handleNavigation}>AI Talent Matching</Link>
                  <Link to="/verify-credentials" className="block px-4 py-2 text-sm hover:bg-primary/10" onClick={handleNavigation}>Verify Credentials</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>For Job Seekers</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="rounded-md shadow-lg py-1 bg-background border border-border overflow-hidden">
                  <Link to="/find-jobs" className="block px-4 py-2 text-sm hover:bg-primary/10" onClick={handleNavigation}>Find Jobs</Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-primary/10" onClick={handleNavigation}>Create Profile</Link>
                  <Link to="/store-credentials" className="block px-4 py-2 text-sm hover:bg-primary/10" onClick={handleNavigation}>Credential Storage</Link>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="text-foreground hover:text-primary transition-colors" onClick={handleNavigation}>
              How It Works
            </Link>
            
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors" onClick={handleNavigation}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Sign in</Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 text-foreground hover:bg-accent/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] border-b border-border' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4 py-4">
            <div className="border-b border-border pb-2">
              <p className="font-medium text-sm text-muted-foreground mb-1">For Employers</p>
              <Link to="/post-job" className="block py-2 text-foreground" onClick={handleNavigation}>Post a Job</Link>
              <Link to="/ai-matching" className="block py-2 text-foreground" onClick={handleNavigation}>AI Talent Matching</Link>
              <Link to="/verify-credentials" className="block py-2 text-foreground" onClick={handleNavigation}>Verify Credentials</Link>
            </div>
            
            <div className="border-b border-border pb-2">
              <p className="font-medium text-sm text-muted-foreground mb-1">For Job Seekers</p>
              <Link to="/find-jobs" className="block py-2 text-foreground" onClick={handleNavigation}>Find Jobs</Link>
              <Link to="/profile" className="block py-2 text-foreground" onClick={handleNavigation}>Create Profile</Link>
              <Link to="/store-credentials" className="block py-2 text-foreground" onClick={handleNavigation}>Credential Storage</Link>
            </div>
            
            <Link to="/about" className="py-2 text-foreground" onClick={handleNavigation}>
              How It Works
            </Link>
            
            <Link to="/contact" className="py-2 text-foreground" onClick={handleNavigation}>
              Contact
            </Link>
            
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-center">Sign in</Button>
              <Button size="sm" className="w-full justify-center">Get Started</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
