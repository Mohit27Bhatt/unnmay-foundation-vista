import { useState, useEffect } from 'react';
import { ChevronDown, Search, Star, MapPin, GraduationCap, User } from 'lucide-react';

// Mock data structure
const mockData = {
  state: 'Uttarakhand',
  districts: [
    {
      name: 'Dehradun',
      blocks: [
        {
          name: 'Mussoorie',
          schools: [
            {
              name: 'Government Inter College Mussoorie',
              sections: [
                {
                  name: 'Section A',
                  students: [
                    {
                      name: 'Arjun Rawat',
                      class: 'Class 10',
                      bio: 'Excelling in mathematics and science with a passion for astronomy.',
                      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
                    },
                    {
                      name: 'Priya Negi',
                      class: 'Class 9',
                      bio: 'Young environmental activist organizing tree plantation drives.',
                      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop'
                    },
                    {
                      name: 'Vikash Singh',
                      class: 'Class 11',
                      bio: 'Talented artist creating awareness posters for social causes.',
                      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
                    },
                    {
                      name: 'Meera Bisht',
                      class: 'Class 10',
                      bio: 'Student leader promoting girls education in rural areas.',
                      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Kalsi',
          schools: [
            {
              name: 'Himalayan Public School',
              sections: [
                {
                  name: 'Section B',
                  students: [
                    {
                      name: 'Rahul Thapa',
                      class: 'Class 12',
                      bio: 'Coding enthusiast building mobile apps for local businesses.',
                      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
                    },
                    {
                      name: 'Anita Sharma',
                      class: 'Class 11',
                      bio: 'Debate champion advocating for digital literacy in villages.',
                      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop'
                    },
                    {
                      name: 'Deepak Kumar',
                      class: 'Class 10',
                      bio: 'Sports enthusiast teaching fitness to younger students.',
                      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
                    },
                    {
                      name: 'Kavita Devi',
                      class: 'Class 9',
                      bio: 'Innovative thinker creating solutions for water conservation.',
                      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Haridwar',
      blocks: [
        {
          name: 'Roorkee',
          schools: [
            {
              name: 'Ganga Valley School',
              sections: [
                {
                  name: 'Section A',
                  students: [
                    {
                      name: 'Siddharth Joshi',
                      class: 'Class 11',
                      bio: 'Science fair winner with innovative renewable energy project.',
                      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
                    },
                    {
                      name: 'Ritu Agarwal',
                      class: 'Class 10',
                      bio: 'Cultural ambassador preserving traditional folk songs.',
                      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop'
                    },
                    {
                      name: 'Mohit Verma',
                      class: 'Class 12',
                      bio: 'Community volunteer organizing health camps in villages.',
                      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
                    },
                    {
                      name: 'Sunita Rani',
                      class: 'Class 9',
                      bio: 'Young entrepreneur selling handmade crafts online.',
                      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const FantasticFourExplorer = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const availableBlocks = selectedDistrict 
    ? mockData.districts.find(d => d.name === selectedDistrict)?.blocks || []
    : [];

  const availableSchools = selectedBlock 
    ? availableBlocks.find(b => b.name === selectedBlock)?.schools || []
    : [];

  const availableSections = selectedSchool 
    ? availableSchools.find(s => s.name === selectedSchool)?.sections || []
    : [];

  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
    setSelectedBlock('');
    setSelectedSchool('');
    setSelectedSection('');
    setStudents([]);
  };

  const handleBlockChange = (block: string) => {
    setSelectedBlock(block);
    setSelectedSchool('');
    setSelectedSection('');
    setStudents([]);
  };

  const handleSchoolChange = (school: string) => {
    setSelectedSchool(school);
    setSelectedSection('');
    setStudents([]);
  };

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const sectionData = availableSections.find(s => s.name === section);
      setStudents(sectionData?.students || []);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Fantastic Four <span className="text-accent-light">Explorer</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Discover the exceptional students making a difference in their communities across Uttarakhand.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elegant p-8 mb-8">
            <div className="flex items-center mb-6">
              <Search className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Find Students</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* State - Fixed */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">State</label>
                <div className="relative">
                  <input
                    type="text"
                    value={mockData.state}
                    disabled
                    className="w-full px-4 py-3 border border-border rounded-lg bg-muted/50 text-muted-foreground cursor-not-allowed"
                  />
                  <MapPin className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              {/* District Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">District</label>
                <div className="relative">
                  <select
                    value={selectedDistrict}
                    onChange={(e) => handleDistrictChange(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background appearance-none"
                  >
                    <option value="">Select District</option>
                    {mockData.districts.map((district) => (
                      <option key={district.name} value={district.name}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Block Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Block</label>
                <div className="relative">
                  <select
                    value={selectedBlock}
                    onChange={(e) => handleBlockChange(e.target.value)}
                    disabled={!selectedDistrict}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background appearance-none disabled:bg-muted/50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Block</option>
                    {availableBlocks.map((block) => (
                      <option key={block.name} value={block.name}>
                        {block.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* School Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">School</label>
                <div className="relative">
                  <select
                    value={selectedSchool}
                    onChange={(e) => handleSchoolChange(e.target.value)}
                    disabled={!selectedBlock}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background appearance-none disabled:bg-muted/50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select School</option>
                    {availableSchools.map((school) => (
                      <option key={school.name} value={school.name}>
                        {school.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Section Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Section</label>
                <div className="relative">
                  <select
                    value={selectedSection}
                    onChange={(e) => handleSectionChange(e.target.value)}
                    disabled={!selectedSchool}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background appearance-none disabled:bg-muted/50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Section</option>
                    {availableSections.map((section) => (
                      <option key={section.name} value={section.name}>
                        {section.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading fantastic students...</p>
            </div>
          )}

          {!isLoading && students.length > 0 && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Meet Our <span className="text-primary">Fantastic Four</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Exceptional students from {selectedSchool}, {selectedSection}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {students.map((student, index) => (
                  <div key={index} className="card-elegant p-6 text-center animate-fade-in hover:scale-105 transition-transform duration-300">
                    <div className="relative mb-4">
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-accent-foreground" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">{student.name}</h3>
                    
                    <div className="flex items-center justify-center mb-3">
                      <GraduationCap className="w-4 h-4 text-primary mr-2" />
                      <span className="text-primary font-medium">{student.class}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {student.bio}
                    </p>
                    
                    <div className="flex items-center justify-center text-xs text-muted-foreground">
                      <User className="w-3 h-3 mr-1" />
                      <span>Student #{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!isLoading && students.length === 0 && selectedSection && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">No students found for the selected criteria.</p>
            </div>
          )}

          {!selectedSection && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Explore?</h3>
              <p className="text-muted-foreground">
                Use the filters above to discover our fantastic students from across Uttarakhand.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FantasticFourExplorer;