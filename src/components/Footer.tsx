
import { Link } from "react-router-dom";
import { Cpu, Github, Linkedin, Twitter } from "lucide-react";

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
    <footer className="bg-slate-950 border-t border-green-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Cpu className="w-6 sm:w-8 h-6 sm:h-8 text-green-400" />
              <span className="text-lg sm:text-xl font-bold text-green-300">DevCyborg</span>
            </Link>
            <p className="text-gray-400 max-w-xs text-sm sm:text-base">
              Where Human Intelligence Meets Machine Precision. Crafting the digital future through cybernetic innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-300 mb-4">Neural Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-300 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-green-300 mb-4">Digital Presence</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-green-300 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-500/20 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {currentYear} DevCyborg. All systems operational.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
