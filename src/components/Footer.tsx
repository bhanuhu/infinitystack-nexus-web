
import { Link } from "react-router-dom";
import { Code, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "GitHub", icon: Github, href: "#" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 text-center sm:text-left">
            <Link to="/" className="flex items-center justify-center sm:justify-start space-x-2">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              <span className="text-lg sm:text-xl font-bold text-cyan-300">StaxInfinity</span>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base max-w-xs mx-auto sm:mx-0">
              Infinite Solutions. Infinite Possibilities. Transforming businesses through innovative technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-3 sm:mb-4">Connect With Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-cyan-500/20 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {currentYear} StaxInfinity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
