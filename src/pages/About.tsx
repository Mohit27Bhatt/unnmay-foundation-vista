import { Users, Target, Heart, Award, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every initiative with empathy and understanding, ensuring that community needs are at the center of our work.'
    },
    {
      icon: Target,
      title: 'Impact-Focused',
      description: 'Every project is designed with measurable outcomes in mind, creating lasting change that transforms communities.'
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'We believe in empowering local communities to lead their own development through capacity building and collaboration.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative solutions and cutting-edge approaches to address complex social challenges effectively.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & Executive Director',
      description: 'Visionary leader with 15+ years in social development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Program Director',
      description: 'Expert in community engagement and project management',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop'
    },
    {
      name: 'Amit Singh',
      role: 'Field Operations Manager',
      description: 'Grassroots specialist with deep community connections',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Unnmay Foundation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Established with a vision to create sustainable change, we are dedicated to empowering 
              communities through education, development, and innovative social initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-elegant p-8 animate-fade-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To create sustainable, community-driven solutions that address social, educational, 
                and economic challenges while empowering individuals and communities to achieve 
                their full potential through innovative programs and collaborative partnerships.
              </p>
            </div>
            <div className="card-elegant p-8 animate-fade-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A world where every community has the resources, knowledge, and opportunities 
                needed to thrive independently, creating a ripple effect of positive change 
                that transforms societies and builds a more equitable future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Unnmay Foundation was born from a simple yet powerful belief: that every community 
                  has the potential to transform itself given the right support, resources, and opportunities. 
                  Founded in 2018, our journey began with a small team of passionate individuals who 
                  witnessed firsthand the challenges faced by underserved communities.
                </p>
                <p>
                  What started as grassroots efforts in a few villages has now grown into a comprehensive 
                  organization serving over 25 communities. Our approach has always been collaborative—we 
                  don't impose solutions; we work alongside communities to identify their needs and 
                  co-create sustainable pathways to progress.
                </p>
                <p>
                  Today, we're proud to have impacted over 10,000 lives through our various initiatives, 
                  from education and skill development to healthcare and environmental conservation. 
                  Every project we undertake is a testament to the power of collective action and 
                  community resilience.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=500&fit=crop"
                alt="Community gathering"
                className="rounded-xl shadow-[var(--shadow-elegant)] w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every action we take.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate individuals committed to creating positive change in communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-elegant p-6 text-center animate-fade-in">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Whether you're looking to volunteer, partner with us, or support our cause, 
            there are many ways to be part of the change we're creating.
          </p>
          <a href="/contact" className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;