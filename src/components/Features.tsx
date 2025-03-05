
import React from 'react';
import { BrainCircuit, ShieldCheck, FileText, Cpu, Lock, Coins } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Skill Matching',
    description: 'NLP & Machine Learning analyze resumes to extract key skills and match candidates to the perfect roles.',
    icon: BrainCircuit,
    color: 'bg-blue-500/10',
    textColor: 'text-blue-500',
    delay: '0ms'
  },
  {
    title: 'Blockchain Credentials',
    description: 'Store degrees, certifications, and work experience on-chain as instantly verifiable credentials.',
    icon: ShieldCheck,
    color: 'bg-green-500/10',
    textColor: 'text-green-500',
    delay: '150ms'
  },
  {
    title: 'Smart Contract Hiring',
    description: 'Automate job applications, interviews, and contract generation with blockchain technology.',
    icon: FileText,
    color: 'bg-purple-500/10',
    textColor: 'text-purple-500',
    delay: '300ms'
  },
  {
    title: 'Multi-Language Support',
    description: 'AI translation allows hiring across global markets and matches candidates regardless of language.',
    icon: Cpu,
    color: 'bg-indigo-500/10',
    textColor: 'text-indigo-500',
    delay: '450ms'
  },
  {
    title: 'Data Privacy Controls',
    description: 'Zero-knowledge proofs ensure applicants share only necessary information while keeping data private.',
    icon: Lock,
    color: 'bg-amber-500/10',
    textColor: 'text-amber-500',
    delay: '600ms'
  },
  {
    title: 'Tokenized Incentives',
    description: 'Earn rewards for referrals and successful job matches with our reputation-based token system.',
    icon: Coins,
    color: 'bg-rose-500/10',
    textColor: 'text-rose-500',
    delay: '750ms'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">AI & Blockchain-Powered <span className="text-gradient">Recruitment</span></h2>
          <p className="text-lg text-muted-foreground animate-fadeIn" style={{animationDelay: '150ms'}}>
            Intellichain combines cutting-edge technologies to create the next generation of hiring platforms, eliminating bias and enhancing transparency.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 animate-fadeIn"
              style={{
                animationDelay: feature.delay,
                animationFillMode: 'forwards'
              }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Features;
