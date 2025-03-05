
import React from 'react';
import Layout from '@/components/Layout';
import { Shield, Lock, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <div className="flex justify-center">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <p className="text-muted-foreground mt-4">Last updated: June 1, 2024</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              At Intellichain, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
            </p>
            
            <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
              <Lock className="mr-2 h-6 w-6" />
              Information We Collect
            </h2>
            
            <p>
              We collect information that you provide directly to us when you:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Create an account or profile</li>
              <li>Apply for jobs through our platform</li>
              <li>Post job listings as an employer</li>
              <li>Upload credentials for verification</li>
              <li>Contact us with inquiries</li>
              <li>Subscribe to our newsletters</li>
            </ul>
            
            <p>
              This information may include your name, email address, phone number, resume data, employment history, education background, professional certifications, and other information relevant to job applications and hiring.
            </p>
            
            <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
              <FileText className="mr-2 h-6 w-6" />
              How We Use Your Information
            </h2>
            
            <p>
              We use the information we collect to:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process job applications and match candidates with employers</li>
              <li>Verify credentials and employment history</li>
              <li>Communicate with you about our services, updates, and promotions</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against fraud and unauthorized access</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
              <Shield className="mr-2 h-6 w-6" />
              Blockchain Technology and Data Security
            </h2>
            
            <p>
              Intellichain uses blockchain technology to store verified credentials securely. This provides several privacy benefits:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Immutable records that cannot be altered or tampered with</li>
              <li>Zero-knowledge proofs allowing verification without revealing all underlying data</li>
              <li>Decentralized storage reducing risk of central data breaches</li>
              <li>User-controlled sharing permissions</li>
            </ul>
            
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, or destruction.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
            
            <p>
              We retain your personal information as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Choices</h2>
            
            <p>
              You can access, update, or delete your account information at any time by logging into your account settings. You may also contact us directly to request access to, correction of, or deletion of personal information we hold about you.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
            
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new effective date.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions or concerns about our Privacy Policy or data practices, please contact us at:
            </p>
            
            <p className="mt-4">
              <strong>Email:</strong> privacy@intellichain.com<br />
              <strong>Address:</strong> 123 Innovation Street, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
