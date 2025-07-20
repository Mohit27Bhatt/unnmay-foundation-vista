import { Target, Users, Calendar, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const KhaChanHumraGM = () => {
  const projectStats = [
    { label: 'Beneficiaries', value: '2,500+', icon: Users },
    { label: 'Duration', value: '3 Years', icon: Calendar },
    { label: 'Investment', value: '₹1.2 Crore', icon: Target },
    { label: 'Success Rate', value: '95%', icon: Award },
  ];

  const milestones = [
    {
      title: 'Project Launch',
      date: 'January 2021',
      description: 'Initiated community assessment and stakeholder engagement',
      completed: true
    },
    {
      title: 'Infrastructure Development',
      date: 'March 2021',
      description: 'Built community center, school upgrades, and healthcare facility',
      completed: true
    },
    {
      title: 'Skill Development Programs',
      date: 'June 2021',
      description: 'Launched vocational training and digital literacy programs',
      completed: true
    },
    {
      title: 'Sustainability Phase',
      date: 'December 2023',
      description: 'Transferred project ownership to local community leadership',
      completed: true
    }
  ];

  const achievements = [
    '2,500+ community members directly benefited',
    '500+ youth trained in vocational skills',
    '300+ women empowered through SHGs',
    '100% increase in school enrollment',
    '80% improvement in healthcare access',
    '15 micro-enterprises established',
    '3 community-led cooperatives formed',
    '100% project sustainability achieved'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Kha Chan Humra GM
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Our flagship community development project that transformed rural livelihoods 
              through integrated development and sustainable empowerment initiatives.
            </p>
            <div className="inline-flex items-center bg-primary-foreground/20 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Successfully Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Project <span className="text-primary">Overview</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  "Kha Chan Humra GM" (We Can Do It Together) was our most ambitious and successful 
                  community development project, implemented over three years in rural areas of 
                  Bihar and Uttar Pradesh. The project focused on holistic development through 
                  integrated approaches to education, healthcare, livelihood generation, and 
                  community empowerment.
                </p>
                <p>
                  What made this project unique was its community-driven approach. Rather than 
                  imposing external solutions, we worked closely with local communities to identify 
                  their needs, leverage their strengths, and build sustainable systems that they 
                  could own and operate independently.
                </p>
                <p>
                  The project's success lies not just in the numbers, but in the transformation 
                  of mindset and the creation of self-reliant communities that continue to thrive 
                  long after our direct involvement ended.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=500&fit=crop"
                alt="Community development"
                className="rounded-xl shadow-[var(--shadow-elegant)] w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Milestones */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Project <span className="text-primary">Timeline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A journey of transformation spanning three years of dedicated community engagement.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-px"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5 md:-translate-x-1.5 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}>
                    <div className="card-elegant p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                        <span className="text-sm text-primary font-medium">{milestone.date}</span>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                      {milestone.completed && (
                        <div className="flex items-center mt-3 text-accent">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">Completed</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Key <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable impact that continues to benefit communities today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-4 bg-muted/30 rounded-lg animate-fade-in">
                <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                <span className="text-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elegant p-8 lg:p-12 animate-fade-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Impact <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                A community transformed through collective action and sustainable development.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=400&fit=crop"
                  alt="Community celebration"
                  className="rounded-lg shadow-[var(--shadow-card)] w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                  "Before this project, our village had limited access to quality education and healthcare. 
                  Today, our children are learning digital skills, our women are running successful 
                  businesses, and our community has become self-reliant. This project didn't just 
                  change our circumstances; it changed our belief in what we could achieve together."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop"
                    alt="Community leader"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Rajesh Kumar</div>
                    <div className="text-sm text-muted-foreground">Village Development Committee Head</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Inspired by Our Success?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            The success of Kha Chan Humra GM shows what's possible when communities and organizations 
            work together. Join us in creating more such transformation stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upcoming-projects" className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              View Our Next Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KhaChanHumraGM;