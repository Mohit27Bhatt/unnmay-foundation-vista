import { Calendar, MapPin, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UpcomingProjects = () => {
  const upcomingProjects = [
    {
      title: 'Digital Education Hub',
      location: 'Rural Bihar',
      startDate: 'March 2024',
      duration: '12 months',
      budget: '₹25,00,000',
      beneficiaries: '500+ students',
      description: 'Establishing a comprehensive digital learning center with modern computer labs, high-speed internet, and trained instructors to bridge the digital divide in rural communities.',
      goals: [
        'Setup 50-seat computer lab with latest equipment',
        'Train 20 local teachers in digital pedagogy',
        'Provide coding and digital literacy courses',
        'Create sustainable income opportunities for graduates'
      ],
      status: 'Fundraising',
      progress: 65,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop'
    },
    {
      title: 'Women Empowerment Center',
      location: 'Ghaziabad, UP',
      startDate: 'April 2024',
      duration: '18 months',
      budget: '₹35,00,000',
      beneficiaries: '300+ women',
      description: 'Creating a dedicated space for women to learn new skills, start businesses, and access support services including childcare, legal aid, and financial literacy programs.',
      goals: [
        'Establish skill development workshops',
        'Provide micro-finance support',
        'Create childcare facilities',
        'Offer business mentorship programs'
      ],
      status: 'Planning',
      progress: 30,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop'
    },
    {
      title: 'Community Health Initiative',
      location: 'Multiple Villages, Rajasthan',
      startDate: 'May 2024',
      duration: '24 months',
      budget: '₹50,00,000',
      beneficiaries: '2,000+ people',
      description: 'Mobile healthcare units providing regular medical checkups, vaccination drives, maternal health services, and health education to remote communities.',
      goals: [
        'Deploy 3 mobile health units',
        'Train 15 community health workers',
        'Conduct monthly health camps',
        'Establish telemedicine connectivity'
      ],
      status: 'Partner Selection',
      progress: 45,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=300&fit=crop'
    },
    {
      title: 'Sustainable Agriculture Program',
      location: 'Punjab & Haryana',
      startDate: 'June 2024',
      duration: '36 months',
      budget: '₹75,00,000',
      beneficiaries: '1,000+ farmers',
      description: 'Promoting organic farming techniques, water conservation methods, and providing modern agricultural equipment to increase crop yield while protecting the environment.',
      goals: [
        'Train farmers in organic farming',
        'Install drip irrigation systems',
        'Provide solar-powered equipment',
        'Establish farmer producer organizations'
      ],
      status: 'Approval Pending',
      progress: 20,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=300&fit=crop'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fundraising': return 'text-accent bg-accent/10';
      case 'Planning': return 'text-primary bg-primary/10';
      case 'Partner Selection': return 'text-orange-600 bg-orange-100';
      case 'Approval Pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Upcoming <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our planned initiatives designed to create even greater impact in the communities 
              we serve. Every project represents hope, transformation, and sustainable change.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="card-elegant overflow-hidden animate-fade-in">
                <div className="grid lg:grid-cols-5 gap-6">
                  {/* Project Image */}
                  <div className="lg:col-span-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  
                  {/* Project Details */}
                  <div className="lg:col-span-3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{project.startDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{project.beneficiaries}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Project Progress</span>
                        <span className="text-sm text-muted-foreground">{project.progress}% Complete</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-semibold text-foreground">{project.duration}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-sm text-muted-foreground">Budget</div>
                        <div className="font-semibold text-foreground">{project.budget}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg col-span-2 md:col-span-1">
                        <div className="text-sm text-muted-foreground">Beneficiaries</div>
                        <div className="font-semibold text-foreground">{project.beneficiaries}</div>
                      </div>
                    </div>

                    {/* Project Goals */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Key Goals
                      </h4>
                      <ul className="space-y-2">
                        {project.goals.map((goal, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/contact" className="btn-hero">
                        Support This Project
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <button className="btn-outline">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How You Can <span className="text-primary">Help</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your support can turn these plans into reality. There are many ways to contribute to our upcoming projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elegant p-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Financial Support</h3>
              <p className="text-muted-foreground mb-4">
                Direct funding helps us implement projects faster and reach more beneficiaries.
              </p>
              <Link to="/contact" className="text-primary hover:text-primary-light font-medium inline-flex items-center">
                Donate Now
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            
            <div className="card-elegant p-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Volunteer</h3>
              <p className="text-muted-foreground mb-4">
                Share your skills and time to help us execute projects more effectively.
              </p>
              <Link to="/contact" className="text-primary hover:text-primary-light font-medium inline-flex items-center">
                Join Us
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            
            <div className="card-elegant p-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Partner with Us</h3>
              <p className="text-muted-foreground mb-4">
                Corporate partnerships can provide resources, expertise, and sustainable support.
              </p>
              <Link to="/contact" className="text-primary hover:text-primary-light font-medium inline-flex items-center">
                Partner
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Turn Vision into Reality
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            These projects represent thousands of lives that can be transformed with your support. 
            Every contribution, big or small, makes a difference.
          </p>
          <Link to="/contact" className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Get Involved Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UpcomingProjects;