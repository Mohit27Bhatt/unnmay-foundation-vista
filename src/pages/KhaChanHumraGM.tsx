import { Target, Users, Calendar, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const KhaChanHumraGM = () => {
  const projectStats = [
    { label: 'Beneficiaries', value: '6000+ and counting..', icon: Users },
    { label: 'Duration', value: '4 weeks+ and counting..', icon: Calendar },
    { label: 'Investment', value: '₹86000+ and counting.. ', icon: Target },
    { label: 'Active Volunteer', value: '28+ and counting', icon: Award },
  ];

  const milestones = [
    {
      title: 'Project Launch',
      date: 'July 2025',
      description: 'We laid the groundwork for the mission by assembling our core team and finalizing the project blueprint.',
      completed: true
    },
    {
      title: 'Talent Detection Phase',
      date: 'August 2025',
      description: 'The hunt for our Grandmaster officially began as our team started visiting schools and finding our first set of talented students.',
      completed: false
    },
    {
      title: 'The Grooming & Mentorship Program',
      date: 'In future',
      description: 'We will initiate a structured mentorship program, providing our selected students with foundational chess training, strategic guidance, and expert coaching. This phase will be dedicated to nurturing their raw talent and growing their passion for the game.',
      completed: false
    },
    {
      title: 'Advanced Training & GM Pathway',
      date: 'In future',
      description: 'We will identify the most promising players from our mentorship program and provide them with advanced, high-level training and personalized guidance. This intense phase will place them on a focused pathway with the ultimate goal of earning the Grandmaster title.',
      completed: false
    }
  ];

  const achievements = [
    'Reached over 4,000 students with our talent detection tests',
    'Built a dedicated team of 28+ members to drive our mission.',
    'Successfully launched our talent search in 4+ schools.',
    'Actively engaging with new schools and government officials to expand our program.',
    'The search for our "Fantastic Four" has officially begun, and we have already identified promising talent.',
    'And loading more..'
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
               Our flagship community project focused on discovering and nurturing chess talent in Uttarakhand. We believe the next Grandmaster is among us, and we're committed to providing the guidance and support needed to help them reach their full potential.
            </p>
            <div className="inline-flex items-center bg-primary-foreground/20 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">LIVE</span>
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
                 Every Grandmaster starts somewhere. For us, that journey begins with a question:
                "Kha Chan Humra GM?" We believe the answer lies in the classrooms and playgrounds 
                of Uttarakhand. This project is our quest to find that one special talent, to give
                 them a platform, and to guide them every step of the way. This is more than a project;
                  it's the start of a new legacy.
                </p>
                <p>
                  Our mission is to systematically discover this hidden potential. We visit schools 
                  across the state, conducting specialized talent detection tests to identify students 
                  with a natural aptitude and passion for chess. From each class, we select the top four 
                  brightest minds, our "Fantastic Four," and bring them into our program for mentorship, resources, and expert guidance.
                </p>
                <p>
                  From there, we commit to a long-term partnership with these young players. We work
                   closely with them, helping to refine their skills, teaching them strategic thinking,
                    and building the mental fortitude required for the highest levels of the game. Our
                     ultimate goal is to take the most dedicated of these champions and guide them on the
                      difficult but rewarding path to becoming a chess Grandmaster.
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
              A journey of transformation, dedicated to discovering and nurturing chess talent in Uttarakhand.
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
              Key <span className="text-primary">Achievements</span> so far..
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

     {/* { Impact Story }
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
     */}
      {/* Fantastic Four Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-4 text-primary-foreground/90">
              A Special Initiative Under Kha Chan Humra GM
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Fantastic Four — <br/>
              <span className="text-accent-light">The Search for Our Chess Champions.</span>
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
             Every Grandmaster starts somewhere, and for our project, that journey begins with the "Fantastic Four." 
             These are the four most promising students discovered in each class, chosen for their raw talent, hunger
              to learn, and natural connection to the game of chess. They are the first wave of champions we will mentor,
               guide, and help to build into a new generation of chess legends.
            </p>
            <Link to="/fantastic-four-explorer" className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Explore Fantastic 4 Students
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
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