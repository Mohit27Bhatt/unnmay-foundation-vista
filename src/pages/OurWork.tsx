import { GraduationCap, Heart, Leaf, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurWork = () => {
  const workAreas = [
    {
      icon: GraduationCap,
      title: 'Education & Skill Development',
      description:
        'Providing quality education and vocational training to empower individuals with knowledge and skills for sustainable livelihoods.',
      projects: [
        'Digital Literacy Programs',
        'Vocational Training Centers',
        'Scholarship Programs',
        'Adult Education Initiatives',
      ],
      impact: '5,000+ students trained',
    },
    {
      icon: Heart,
      title: 'Healthcare & Wellness',
      description:
        'Ensuring access to basic healthcare services and promoting wellness through preventive care and health education.',
      projects: [
        'Mobile Health Clinics',
        'Maternal Health Programs',
        'Nutrition Awareness',
        'Mental Health Support',
      ],
      impact: '3,000+ lives improved',
    },
    {
      icon: Leaf,
      title: 'Environmental Conservation',
      description:
        'Promoting sustainable practices and environmental awareness to protect natural resources for future generations.',
      projects: [
        'Tree Plantation Drives',
        'Waste Management',
        'Water Conservation',
        'Renewable Energy',
      ],
      impact: '10,000+ trees planted',
    },
    {
      icon: Users,
      title: 'Community Development',
      description:
        'Building stronger communities through infrastructure development, capacity building, and social cohesion programs.',
      projects: [
        'Infrastructure Development',
        'Women Empowerment',
        'Youth Programs',
        'Senior Citizen Care',
      ],
      impact: '25+ communities served',
    },
  ];

  const successStories = [
    {
      title: 'Transforming Rural Education',
      location: 'Village Rampur, Bihar',
      description:
        'Established a digital learning center that has improved literacy rates by 40% in the local community.',
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
      impact: '300+ children benefited',
    },
    {
      title: 'Women Entrepreneurship Program',
      location: 'Ghaziabad, Uttar Pradesh',
      description:
        'Trained 200+ women in various skills, helping them start their own businesses and achieve financial independence.',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      impact: '200+ women empowered',
    },
    {
      title: 'Community Health Initiative',
      location: 'Multiple Villages, Rajasthan',
      description:
        'Mobile health clinics providing regular checkups and preventive care to remote communities.',
      image:
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop',
      impact: '1,500+ people served',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Creating lasting impact through comprehensive programs that address the root causes of 
              social challenges and empower communities to build sustainable futures.
            </p>
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Focus <span className="text-primary">Areas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work across multiple sectors to create holistic development and lasting change.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {workAreas.map((area, index) => (
              <div key={index} className="card-elegant p-8 animate-fade-in">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Key Projects:</h4>
                      <ul className="space-y-1">
                        {area.projects.map((project, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm font-medium text-primary">{area.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From inspiring our first group of young chess players, to reaching tens of thousands of students and schools, our projects have steadily grown in impact and scale. Here’s a look at our journey and accomplishments.
            </p>
          </div>
          <div className="space-y-10">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  First Project <span className="text-primary">| Mid Oct - 27 Dec 2020</span>
                </h3>
                <p className="text-muted-foreground mb-2">Team Size: <strong>12</strong></p>
                <ul className="list-disc pl-6 text-muted-foreground mb-2">
                  <li>Connected with <b>3,000 schools</b></li>
                  <li>Engaged with <b>100 schools</b>, <b>50 schools</b> participated</li>
                  <li>Reached <b>8,000–9,000 students</b></li>
                  <li><b>550 students</b> played in the tournament</li>
                </ul>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  Second Project <span className="text-primary">| Sep - 24th Oct 2021</span>
                </h3>
                <p className="text-muted-foreground mb-2">Team Size: <strong>15</strong></p>
                <ul className="list-disc pl-6 text-muted-foreground mb-2">
                  <li>Reached <b>14,000–15,000 students</b></li>
                  <li><b>80 schools</b> participated</li>
                </ul>
              </div>
            </div>
            {/* Ongoing Project */}
            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  Ongoing Initiatives <span className="text-primary">| 2022 - Present</span>
                </h3>
                <p className="text-muted-foreground mb-2">
                  Working in both online and offline modes
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-2">
                  <li>Reached <b>200+ schools</b></li>
                  <li>Impacted <b>40,000+ students</b></li>
                  <li>Continuing to expand outreach and engagement for chess in education</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real stories of transformation and positive change from the communities we serve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="card-elegant overflow-hidden animate-fade-in">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {story.location}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {story.description}
                  </p>
                  <div className="text-sm font-medium text-accent">{story.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect the positive change we've created together.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Lives Directly Impacted</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Communities Served</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Every success story starts with people who believe in change. Join us in creating 
            more stories of transformation and hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-hero bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Get Involved
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/upcoming-projects"
              className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Upcoming Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
