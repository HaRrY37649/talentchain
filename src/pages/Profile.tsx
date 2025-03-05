
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import { User, Mail, Briefcase, MapPin, Phone, Calendar, Award, Edit, Save, Plus, X } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // User profile data
  const [profile, setProfile] = useState({
    fullName: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Software Engineer',
    bio: 'Passionate software engineer with 7+ years of experience in full-stack development. Specialized in React, Node.js, and blockchain technologies.',
    joinDate: '2023-05-15',
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Blockchain', 'Solidity'],
    experience: [
      {
        id: '1',
        company: 'TechVision Inc.',
        position: 'Senior Software Engineer',
        duration: 'Jan 2020 - Present',
        description: 'Leading development of blockchain-based applications and smart contracts.'
      },
      {
        id: '2',
        company: 'WebSolutions',
        position: 'Software Developer',
        duration: 'Mar 2017 - Dec 2019',
        description: 'Developed and maintained full-stack web applications using React and Node.js.'
      }
    ],
    education: [
      {
        id: '1',
        institution: 'University of California',
        degree: 'Master of Computer Science',
        year: '2015-2017'
      },
      {
        id: '2',
        institution: 'Stanford University',
        degree: 'Bachelor of Science in Computer Engineering',
        year: '2011-2015'
      }
    ],
    certifications: [
      {
        id: '1',
        name: 'Certified Blockchain Developer',
        issuer: 'Blockchain Council',
        year: '2022'
      },
      {
        id: '2',
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2021'
      }
    ]
  });
  
  // Verify authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to view your profile",
        variant: "destructive",
      });
      navigate('/sign-in');
    }
  }, [navigate, toast]);
  
  // Handle profile update
  const handleSaveProfile = async () => {
    setIsLoading(true);
    
    try {
      // This would connect to your blockchain or backend
      // For now we'll just simulate with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Profile Updated",
        description: "Your profile changes have been saved successfully.",
      });
      
      setIsEditing(false);
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Add a new skill
  const handleAddSkill = () => {
    setProfile({
      ...profile,
      skills: [...profile.skills, '']
    });
  };
  
  // Remove a skill
  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...profile.skills];
    updatedSkills.splice(index, 1);
    
    setProfile({
      ...profile,
      skills: updatedSkills
    });
  };
  
  // Update a skill
  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...profile.skills];
    updatedSkills[index] = value;
    
    setProfile({
      ...profile,
      skills: updatedSkills
    });
  };
  
  return (
    <Layout>
      <div className="container max-w-5xl mx-auto py-12 px-4 sm:px-6">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Profile</h1>
          
          <Button
            variant={isEditing ? "outline" : "primary"}
            onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
            isLoading={isLoading}
          >
            {isEditing ? (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            ) : (
              <>
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </>
            )}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="col-span-1">
            <div className="glass-card p-6 mb-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <User className="w-16 h-16 text-primary" />
                </div>
                
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.fullName}
                    onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                    className="text-xl font-bold mb-1 text-center w-full p-2 border border-input rounded-md"
                  />
                ) : (
                  <h2 className="text-xl font-bold mb-1">{profile.fullName}</h2>
                )}
                
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.title}
                    onChange={(e) => setProfile({...profile, title: e.target.value})}
                    className="text-sm text-muted-foreground mb-4 text-center w-full p-2 border border-input rounded-md"
                  />
                ) : (
                  <p className="text-sm text-muted-foreground mb-4">{profile.title}</p>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="text-sm flex-1 p-2 border border-input rounded-md"
                    />
                  ) : (
                    <span>{profile.email}</span>
                  )}
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-muted-foreground" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      className="text-sm flex-1 p-2 border border-input rounded-md"
                    />
                  ) : (
                    <span>{profile.phone}</span>
                  )}
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-muted-foreground" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                      className="text-sm flex-1 p-2 border border-input rounded-md"
                    />
                  ) : (
                    <span>{profile.location}</span>
                  )}
                </div>
                
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-muted-foreground" />
                  <span>Member since {new Date(profile.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Skills
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <div key={index}>
                    {isEditing ? (
                      <div className="flex mb-2">
                        <input
                          type="text"
                          value={skill}
                          onChange={(e) => handleSkillChange(index, e.target.value)}
                          className="text-sm p-2 border border-input rounded-l-md"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(index)}
                          className="bg-muted p-2 rounded-r-md hover:bg-muted/80"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    )}
                  </div>
                ))}
                
                {isEditing && (
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add Skill
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4">About Me</h3>
              
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  className="w-full p-3 border border-input rounded-md min-h-[120px]"
                ></textarea>
              ) : (
                <p className="text-muted-foreground">{profile.bio}</p>
              )}
            </div>
            
            {/* Experience Section */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {profile.experience.map((exp) => (
                  <div key={exp.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{exp.company}</h4>
                        <p className="text-muted-foreground">{exp.position}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    </div>
                    <p className="mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Education</h3>
                
                <div className="space-y-4">
                  {profile.education.map((edu) => (
                    <div key={edu.id}>
                      <h4 className="font-medium">{edu.institution}</h4>
                      <p className="text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Certifications</h3>
                
                <div className="space-y-4">
                  {profile.certifications.map((cert) => (
                    <div key={cert.id}>
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
