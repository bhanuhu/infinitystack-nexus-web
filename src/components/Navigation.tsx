
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
          <span className="text-lg sm:text-xl font-bold text-cyan-300">StaxInfinity</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                  ? "text-cyan-300 bg-cyan-900/30"
                  : "text-gray-300 hover:text-cyan-300 hover:bg-slate-800/50"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile menu button and drawer */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 bg-slate-950 border-r border-cyan-500/20">
              <div className="flex flex-col h-full">
                <div className="flex items-center px-4 py-4 border-b border-cyan-500/10">
                  <Code className="w-6 h-6 text-cyan-400 mr-2" />
                  <span className="text-lg font-bold text-cyan-300">StaxInfinity</span>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path)
                        ? "text-cyan-300"
                        : "text-gray-300 hover:text-cyan-300 hover:bg-slate-800/50 focus:bg-slate-800/50"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
