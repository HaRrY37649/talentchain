
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { FileCheck, FileText, Upload, File, CheckCircle, XCircle, Search, AlertCircle, Edit } from 'lucide-react';

interface Credential {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verified: boolean;
  status: 'verified' | 'pending' | 'rejected';
}

const VerifyCredentials = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'verify' | 'manage'>('verify');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [documentType, setDocumentType] = useState('');
  const [issuingOrganization, setIssuingOrganization] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  
  // Sample credentials
  const [credentials, setCredentials] = useState<Credential[]>([
    {
      id: '1',
      name: 'BSc Computer Science',
      issuer: 'University of California',
      date: '2020-06-15',
      verified: true,
      status: 'verified'
    },
    {
      id: '2',
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2021-03-10',
      verified: true,
      status: 'verified'
    },
    {
      id: '3',
      name: 'Blockchain Developer Certification',
      issuer: 'Ethereum Foundation',
      date: '2022-01-22',
      verified: false,
      status: 'pending'
    }
  ]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!documentType || !issuingOrganization || !file) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields and upload a document",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This would connect to your blockchain or backend
      // For now we'll just simulate with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add new credential to the list
      const newCredential: Credential = {
        id: (credentials.length + 1).toString(),
        name: documentType,
        issuer: issuingOrganization,
        date: new Date().toISOString().split('T')[0],
        verified: false,
        status: 'pending'
      };
      
      setCredentials([...credentials, newCredential]);
      
      // Reset form
      setDocumentType('');
      setIssuingOrganization('');
      setDescription('');
      setFile(null);
      
      toast({
        title: "Credential Submitted",
        description: "Your credential has been submitted for verification on the blockchain.",
      });
      
      // Switch to manage tab to show the new credential
      setActiveTab('manage');
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your credential. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout>
      <div className="container max-w-5xl mx-auto py-12 px-4 sm:px-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Credential Verification</h1>
          <p className="text-muted-foreground mt-2">
            Securely store and verify your credentials on the blockchain
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-border mb-8">
          <button
            className={`pb-4 px-6 ${
              activeTab === 'verify'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('verify')}
          >
            <FileCheck className="w-4 h-4 inline mr-2" />
            Verify New Credential
          </button>
          <button
            className={`pb-4 px-6 ${
              activeTab === 'manage'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('manage')}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Manage Credentials
          </button>
        </div>
        
        {/* Verify Tab */}
        {activeTab === 'verify' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass-card p-8">
                <h2 className="text-xl font-semibold mb-6">Submit a Credential for Verification</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="documentType" className="block mb-2 font-medium">
                      Credential Type *
                    </label>
                    <input
                      id="documentType"
                      type="text"
                      value={documentType}
                      onChange={(e) => setDocumentType(e.target.value)}
                      placeholder="e.g. Degree, Certificate, License"
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="issuer" className="block mb-2 font-medium">
                      Issuing Organization *
                    </label>
                    <input
                      id="issuer"
                      type="text"
                      value={issuingOrganization}
                      onChange={(e) => setIssuingOrganization(e.target.value)}
                      placeholder="e.g. University name, Company"
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block mb-2 font-medium">
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Additional details about this credential"
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">
                      Upload Document *
                    </label>
                    <div className="border-2 border-dashed border-input rounded-md p-6 text-center">
                      <input
                        type="file"
                        id="document"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      
                      {!file ? (
                        <label htmlFor="document" className="cursor-pointer block">
                          <Upload className="w-10 h-10 mx-auto text-muted-foreground mb-4" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF, JPG, PNG (max. 10MB)
                          </p>
                        </label>
                      ) : (
                        <div>
                          <File className="w-10 h-10 mx-auto text-primary mb-2" />
                          <p className="text-sm font-medium mb-2">{file.name}</p>
                          <p className="text-xs text-muted-foreground mb-4">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          <button
                            type="button"
                            onClick={() => setFile(null)}
                            className="text-xs text-primary hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      Submit for Verification
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="glass-card p-6 mb-6">
                <h3 className="font-semibold mb-4">How It Works</h3>
                <ol className="space-y-4 list-decimal list-inside text-sm text-muted-foreground">
                  <li>Upload your credential document</li>
                  <li>Our system creates a unique cryptographic hash</li>
                  <li>The hash is stored on the blockchain</li>
                  <li>Document is verified by the issuing organization</li>
                  <li>Employers can verify authenticity without accessing the actual document</li>
                </ol>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Privacy & Security</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your actual documents are never stored on the blockchain, only a cryptographic proof
                  of their existence and validity. This ensures your privacy while providing
                  verifiable proof to employers.
                </p>
                <p className="text-sm text-muted-foreground">
                  All data transmission is encrypted and secure.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Manage Tab */}
        {activeTab === 'manage' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Credentials</h2>
              
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search credentials..."
                    className="pl-10 p-2 text-sm border border-input rounded-md w-60"
                  />
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveTab('verify')}
                >
                  Add New
                </Button>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Credential
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Issuer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {credentials.map((credential) => (
                      <tr key={credential.id} className="hover:bg-muted/30">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium">{credential.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                          {credential.issuer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                          {new Date(credential.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {credential.status === 'verified' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Verified
                            </span>
                          )}
                          {credential.status === 'pending' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              Pending
                            </span>
                          )}
                          {credential.status === 'rejected' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              <XCircle className="w-3 h-3 mr-1" />
                              Rejected
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-primary hover:text-primary/80 mr-4">
                            <Search className="w-4 h-4" />
                          </button>
                          <button className="text-primary hover:text-primary/80">
                            <Edit className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VerifyCredentials;
