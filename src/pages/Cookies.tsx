
import React from 'react';
import Layout from '@/components/Layout';
import { Cookie, List, Settings } from 'lucide-react';

const Cookies = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
            <div className="flex justify-center">
              <Cookie className="h-16 w-16 text-primary" />
            </div>
            <p className="text-muted-foreground mt-4">Last updated: June 1, 2024</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              This Cookie Policy explains how Intellichain ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
              <List className="mr-2 h-6 w-6" />
              What Are Cookies?
            </h2>
            
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            
            <p>
              Cookies set by the website owner (in this case, Intellichain) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>
            
            <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
              <Settings className="mr-2 h-6 w-6" />
              Why Do We Use Cookies?
            </h2>
            
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Types of Cookies We Use</h2>
            
            <p>
              The specific types of first and third-party cookies served through our website and the purposes they perform are described below:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
            
            <p>
              These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Performance and Functionality Cookies</h3>
            
            <p>
              These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Analytics and Customization Cookies</h3>
            
            <p>
              These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Advertising Cookies</h3>
            
            <p>
              These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Social Networking Cookies</h3>
            
            <p>
              These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Your Choices Regarding Cookies</h2>
            
            <p>
              If you prefer to avoid the use of cookies on the website, first you must disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time.
            </p>
            
            <p>
              If you do not accept our cookies, you may experience some inconvenience in your use of our website and some features may not function properly.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Cookie Policy</h2>
            
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default Cookies;
