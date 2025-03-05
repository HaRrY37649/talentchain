
import React from 'react';
import Layout from '@/components/Layout';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

const Terms = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <div className="flex justify-center">
              <FileText className="h-16 w-16 text-primary" />
            </div>
            <p className="text-muted-foreground mt-4">Last updated: June 1, 2024</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to Intellichain. These Terms of Service ("Terms") govern your access to and use of Intellichain's website, services, and applications (collectively, the "Services"). Please read these Terms carefully before using our Services.
            </p>
            
            <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
              <CheckCircle className="mr-2 h-6 w-6" />
              Acceptance of Terms
            </h2>
            
            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use our Services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Eligibility</h2>
            
            <p>
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and to abide by all of the terms and conditions set forth herein.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Account Registration</h2>
            
            <p>
              To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
              <AlertCircle className="mr-2 h-6 w-6" />
              Prohibited Conduct
            </h2>
            
            <p>
              You agree not to engage in any of the following prohibited activities:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Violating any applicable laws or regulations</li>
              <li>Providing false or misleading information</li>
              <li>Using the Services for any illegal or unauthorized purpose</li>
              <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Services</li>
              <li>Uploading invalid data, viruses, worms, or other software agents through the Services</li>
              <li>Collecting or harvesting any personally identifiable information from the Services</li>
              <li>Impersonating another person or otherwise misrepresenting your affiliation with a person or entity</li>
              <li>Interfering with or disrupting the Services or servers or networks connected to the Services</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property Rights</h2>
            
            <p>
              The Services and its entire contents, features, and functionality, including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof, are owned by Intellichain, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Blockchain Features and Smart Contracts</h2>
            
            <p>
              Our Services utilize blockchain technology and smart contracts. You acknowledge that:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Blockchain transactions are irreversible and immutable once confirmed</li>
              <li>Smart contracts execute automatically based on predetermined conditions</li>
              <li>You are responsible for maintaining the security of your private keys and wallet credentials</li>
              <li>Blockchain networks may experience delays, congestion, or technical issues beyond our control</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Termination</h2>
            
            <p>
              We reserve the right to terminate or suspend your account and access to the Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Services, us, or third parties, or for any other reason.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer of Warranties</h2>
            
            <p>
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. INTELLICHAIN DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            
            <p>
              IN NO EVENT SHALL INTELLICHAIN BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
            
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website with a new effective date. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <p className="mt-4">
              <strong>Email:</strong> legal@intellichain.com<br />
              <strong>Address:</strong> 123 Innovation Street, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
