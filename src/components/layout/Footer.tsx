import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Upcoming Projects', href: '/upcoming-projects' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">UF</span>
              </div>
              <span className="text-xl font-bold">Unnmay Foundation</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Dedicated to creating positive change in communities through sustainable development, 
              education, and empowerment initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@unnmayfoundation.org</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="text-primary-foreground/80 mt-1" />
                <span className="text-primary-foreground/80">
                  Address Line 1<br />
                  City, State - PIN Code
                </span>
              </div>
            </div>
          </div>

          {/* Social Media & Registration */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <div className="space-y-2 mt-6">
              <p className="text-xs text-primary-foreground/80">
                <strong>NGO Registration:</strong> XXXXXXXX
              </p>
              <p className="text-xs text-primary-foreground/80">
                <strong>12A & 80G Certified</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Unnmay Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;