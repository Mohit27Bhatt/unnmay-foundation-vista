import { Compass, Star, Users, Target, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const FantasticFourExplorer = () => {
  const programStats = [
    { label: 'Youth Engaged', value: '800+', icon: Users },
    { label: 'Exploration Missions', value: '50+', icon: Compass },
    { label: 'Skills Developed', value: '20+', icon: Star },
    { label: 'Success Stories', value: '95%', icon: Target },
  ];

  const explorationAreas = [
    {
      title: 'Science & Technology',
      description: 'Hands-on experiments, coding workshops, and innovation labs.',
      activities: ['Robotics', 'App Development', 'Science Fair', 'Tech Innovation'],
      icon: '🔬',
      participants: '200+ youth'
    },
    {
      title: 'Arts & Culture',
      description: 'Creative expression through various artistic mediums and cultural exploration.',
      activities: ['Digital Art', 'Music Production', 'Cultural Heritage', 'Creative Writing'],
      icon: '🎨',
      participants: '180+ youth'
    },
    {
      title: 'Environmental Science',
      description: 'Understanding nature, conservation, and sustainable living practices.',
      activities: ['Eco Tours', 'Conservation Projects', 'Green Innovation', 'Climate Action'],
      icon: '🌱',
      participants: '220+ youth'
    },
    {
      title: 'Social Innovation',
      description: 'Developing solutions for community challenges and social issues.',
      activities: ['Community Mapping', 'Social Entrepreneurship', 'Leadership Training', 'Project Management'],
      icon: '💡',
      participants: '200+ youth'
    }
  ];

  const successStories = [
    {
      name: 'Ananya Sharma',
      age: '17',
      achievement: 'Won State Science Fair',
      story: 'Developed a water purification system for her village after participating in our environmental exploration program.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      program: 'Environmental Science Explorer'
    },
    {
      name: 'Rohit Kumar',
      age: '16',
      achievement: 'Created Mobile App',
      story: 'Built an educational app for local language learning that is now used by 500+ students.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      program: 'Tech Innovation Explorer'
    },
    {
      name: 'Priya Patel',
      age: '18',
      achievement: 'Community Leader',
      story: 'Started a youth collective that organizes monthly environmental clean-up drives in her district.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      program: 'Social Innovation Explorer'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Fantastic Four <br/>
              <span className="text-accent-light">Explorer Program</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Inspiring young minds to explore, discover, and innovate through hands-on learning 
              experiences across science, technology, arts, and social innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-hero">
                Join the Program
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {programStats.map((stat, index) => (
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

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Empowering Young <span className="text-primary">Explorers</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  The Fantastic Four Explorer Program is designed to ignite curiosity and foster 
                  innovation among youth aged 13-18. Through four key exploration areas, participants 
                  embark on exciting learning journeys that combine theoretical knowledge with 
                  practical application.
                </p>
                <p>
                  Our unique approach encourages young people to become active creators rather than 
                  passive consumers of knowledge. Each participant chooses their exploration path 
                  and works on real-world projects that make a difference in their communities.
                </p>
                <p>
                  The program runs year-round with seasonal camps, monthly workshops, and ongoing 
                  mentorship opportunities. We believe that every young person has the potential 
                  to be an innovator and changemaker.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop"
                alt="Youth innovation"
                className="rounded-xl shadow-[var(--shadow-elegant)] w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exploration Areas */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Four Paths of <span className="text-primary">Exploration</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose your adventure and dive deep into the areas that spark your curiosity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {explorationAreas.map((area, index) => (
              <div key={index} className="card-elegant p-8 animate-fade-in">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Activities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.activities.map((activity, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-accent">{area.participants}</span>
                  <Link to="/contact" className="text-primary hover:text-primary-light font-medium inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Young <span className="text-primary">Changemakers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the incredible young people who are already making a difference in their communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card-elegant p-6 text-center animate-fade-in">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">{story.name}</h3>
                <div className="text-sm text-primary font-medium mb-1">Age: {story.age}</div>
                <div className="text-sm text-muted-foreground mb-4">{story.program}</div>
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {story.achievement}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Join the <span className="text-primary">Explorer Program?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Hands-on Learning</h3>
              <p className="text-muted-foreground">Learn by doing with real projects and practical applications.</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Mentorship</h3>
              <p className="text-muted-foreground">Get guidance from industry professionals and experienced mentors.</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Skill Certification</h3>
              <p className="text-muted-foreground">Earn recognized certifications and build your portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join hundreds of young explorers who are already discovering their potential and 
            creating positive change in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/our-work" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View More Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FantasticFourExplorer;