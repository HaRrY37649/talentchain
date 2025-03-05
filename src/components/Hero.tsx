
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight, CheckCircle2, Cpu, Shield, LineChart } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = heroRef.current;
      
      if (heroElement) {
        // Parallax effect for background
        heroElement.style.backgroundPosition = `center ${scrollY * 0.05}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Background particles/dots (decorative) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute top-36 right-40 w-3 h-3 rounded-full bg-primary animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-primary animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-primary animate-pulse" style={{animationDelay: '1.7s'}}></div>
        <div className="absolute bottom-20 right-96 w-3 h-3 rounded-full bg-primary animate-pulse" style={{animationDelay: '2.1s'}}></div>
      </div>
      
      {/* Content container */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero text */}
          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fadeIn">
              Revolutionizing Recruitment with AI & Web3
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fadeIn" style={{animationDelay: '0.1s'}}>
              <span className="text-gradient">AI-Powered</span> Blockchain <br className="hidden md:block" />
              Hiring Platform
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              Intellichain combines artificial intelligence with Web3 technology to create a 
              transparent, efficient, and trustless job marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8 animate-fadeIn" style={{animationDelay: '0.3s'}}>
              <Button 
                size="lg" 
                className="group relative overflow-hidden shadow-button transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-blue-gradient transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 animate-fadeIn" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white/90">Zero Knowledge Proofs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white/90">Smart Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-white/90">Verified Credentials</span>
              </div>
            </div>
          </div>
          
          {/* Hero graphic/image */}
          <div className="relative animate-fadeInRight">
            {/* Main graphic - glass-like container */}
            <div className="glassmorphism rounded-2xl p-8 aspect-square max-w-md mx-auto overflow-hidden">
              {/* Abstract decorative elements */}
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-primary/20 animate-float"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-primary/30 animate-float" style={{animationDelay: '1s'}}></div>
              
              {/* Stylized app elements */}
              <div className="glassmorphism rounded-lg p-4 mb-6 border border-white/20 animate-fadeIn" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center mb-3">
                  <Cpu className="w-5 h-5 mr-2 text-primary" />
                  <h3 className="text-white font-medium">AI Matching</h3>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full mb-2">
                  <div className="h-2.5 rounded-full bg-primary w-4/5 animate-shimmer" style={{backgroundSize: '200% 100%', backgroundImage: 'linear-gradient(to right, #3b82f6, #2563eb, #3b82f6)' }}></div>
                </div>
                <p className="text-xs text-white/70">Skills matched: 87%</p>
              </div>
              
              <div className="glassmorphism rounded-lg p-4 mb-6 border border-white/20 animate-fadeIn" style={{animationDelay: '0.8s'}}>
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  <h3 className="text-white font-medium">Verified Credentials</h3>
                </div>
                <div className="flex space-x-2 items-center">
                  <div className="h-8 w-8 rounded bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-xs text-white/70">University Degree</div>
                </div>
              </div>
              
              <div className="glassmorphism rounded-lg p-4 border border-white/20 animate-fadeIn" style={{animationDelay: '1s'}}>
                <div className="flex items-center mb-3">
                  <LineChart className="w-5 h-5 mr-2 text-purple-400" />
                  <h3 className="text-white font-medium">Reputation Score</h3>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-5 h-5 text-yellow-400">★</div>
                    ))}
                  </div>
                  <span className="text-white/90 font-medium">5.0</span>
                </div>
              </div>
            </div>
            
            {/* Floating decorative circles */}
            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-primary/30 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 animate-fadeIn" style={{animationDelay: '0.5s'}}>
        <img src="/src/assets/images/waves.svg" alt="Wave decoration" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
