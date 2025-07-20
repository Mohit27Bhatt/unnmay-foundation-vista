import { ArrowRight, Heart, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Lives Impacted' },
    { icon: Target, value: '50+', label: 'Projects Completed' },
    { icon: Heart, value: '25+', label: 'Communities Served' },
    { icon: Award, value: '5+', label: 'Years of Service' },
  ];

  const featuredProjects = [
    {
      title: 'Kha Chan Humra GM',
      description: 'Our flagship project focused on sustainable community development and education.',
      link: '/kha-chan-humra-gm',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop'
    },
    {
      title: 'Fantastic Four Explorer',
      description: 'Innovative youth engagement program promoting exploration and learning.',
      link: '/fantastic-four-explorer',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Brighter <br />
              <span className="text-accent-light">Communities Together</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Unnmay Foundation is dedicated to creating lasting change through education, 
              sustainable development, and community empowerment initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/our-work" className="btn-hero">
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Empowering Communities Through <span className="text-primary">Sustainable Change</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over five years, Unnmay Foundation has been at the forefront of community development, 
                working tirelessly to create opportunities for education, growth, and sustainable development 
                in underserved communities.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our approach combines grassroots engagement with innovative solutions, ensuring that every 
                initiative creates lasting impact and empowers local communities to thrive independently.
              </p>
              <Link to="/about" className="btn-hero">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Community engagement"
                className="rounded-xl shadow-[var(--shadow-elegant)] w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our flagship initiatives that are making a real difference in communities across the region.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="card-elegant p-6 animate-fade-in">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join us in our mission to create positive change. Whether through volunteering, 
            donations, or partnerships, every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Involved Today
            </Link>
            <Link to="/upcoming-projects" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Upcoming Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;