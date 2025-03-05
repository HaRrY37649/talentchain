
import React from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions about our platform? Looking to partner with us? Our team is here to help.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-muted p-6 rounded-xl text-center">
              <Mail className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <a href="mailto:support@intellichain.com" className="text-primary hover:underline">
                support@intellichain.com
              </a>
              <p className="text-muted-foreground mt-2">We'll respond within 24 hours</p>
            </div>
            
            <div className="bg-muted p-6 rounded-xl text-center">
              <Phone className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <a href="tel:+1234567890" className="text-primary hover:underline">
                +1 (234) 567-890
              </a>
              <p className="text-muted-foreground mt-2">Mon-Fri, 9am-5pm EST</p>
            </div>
            
            <div className="bg-muted p-6 rounded-xl text-center">
              <MapPin className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-primary">123 Innovation Street</p>
              <p className="text-muted-foreground mt-2">San Francisco, CA 94103</p>
            </div>
          </div>
          
          {/* Contact Form and Office Hours */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-medium">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-medium">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Office Hours and FAQ */}
            <div>
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="mr-2 h-6 w-6" />
                  Office Hours
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageSquare className="mr-2 h-6 w-6" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">How does the AI matching work?</h3>
                    <p className="text-muted-foreground">
                      Our AI uses natural language processing and machine learning to understand job descriptions and candidate profiles, matching them based on skills, experience, and culture fit.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Is my data secure on the blockchain?</h3>
                    <p className="text-muted-foreground">
                      Yes, we use advanced encryption and zero-knowledge proofs to ensure your data is secure while maintaining the benefits of blockchain verification.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">How do I verify my credentials?</h3>
                    <p className="text-muted-foreground">
                      Visit our Verify Credentials page where you can upload documents and certificates which will be verified and stored securely on our blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
