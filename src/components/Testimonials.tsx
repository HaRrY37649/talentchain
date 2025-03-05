
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO at TechVision',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    quote: 'Intellichain has transformed our hiring process. The AI matching has reduced our time-to-hire by 70%, and the blockchain credential verification gives us confidence in every candidate we interview.',
    stars: 5
  },
  {
    name: 'Michael Chen',
    title: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    quote: 'As a job seeker, I love how Intellichain protects my data while still connecting me with relevant opportunities. The smart contract implementation for job offers and payments is revolutionary.',
    stars: 5
  },
  {
    name: 'Elena Rodriguez',
    title: 'HR Director at GlobalFirm',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    quote: "The combination of AI-powered matching and blockchain verification has revolutionized our recruitment process. We've seen a 40% increase in successful placements since adopting Intellichain.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">What Our Users <span className="text-gradient">Say</span></h2>
          <p className="text-lg text-muted-foreground animate-fadeIn" style={{animationDelay: '150ms'}}>
            Hear from job seekers and employers who have experienced the power of AI and blockchain in recruitment.
          </p>
        </div>
        
        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4">
                  <div className="glass-card p-8 md:p-10">
                    {/* Stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-background border border-border rounded-full p-2 shadow-md hover:bg-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-6 bg-background border border-border rounded-full p-2 shadow-md hover:bg-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Testimonials;
