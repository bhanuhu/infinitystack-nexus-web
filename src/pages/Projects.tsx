
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openProject, setOpenProject] = useState<null | typeof projects[0]>(null);

  const categories = ["All", "Web", "Mobile", "AI", "Cloud"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Next-generation online marketplace with AI-powered product recommendations and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      category: "Web",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe API"],
      client: "RetailCorp",
      results: "300% increase in conversion rates, 50% reduction in cart abandonment",
      url: "https://ecommerce-demo.example.com"
    },
    {
      id: 2,
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization platform for investment firms with advanced risk assessment tools.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      category: "Web",
      technologies: ["React", "D3.js", "Python", "Apache Kafka", "MongoDB"],
      client: "InvestTech Solutions",
      results: "Reduced analysis time by 80%, improved decision-making accuracy by 45%"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "Cloud-based patient management platform with telemedicine capabilities and AI-powered diagnostics.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      category: "Cloud",
      technologies: ["React Native", "AWS", "TensorFlow", "FHIR", "WebRTC"],
      client: "MedCare Group",
      results: "Improved patient satisfaction by 60%, reduced administrative overhead by 40%"
    },
    {
      id: 4,
      title: "Supply Chain Optimization",
      description: "AI-powered logistics platform that optimizes delivery routes and predicts demand patterns.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      category: "AI",
      technologies: ["Python", "TensorFlow", "Apache Spark", "Kubernetes", "Tableau"],
      client: "LogiFlow International",
      results: "30% reduction in delivery costs, 95% improvement in delivery time accuracy"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time fraud detection.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      category: "Mobile",
      technologies: ["React Native", "Node.js", "OAuth", "Blockchain", "Machine Learning"],
      client: "SecureBank",
      results: "2M+ active users, 99.9% uptime, zero security breaches"
    },
    {
      id: 6,
      title: "JewelCraft - Jewelry E-commerce Site",
      description: "A modern, responsive jewelry e-commerce website built with React.js and Material-UI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Web",
      technologies: ["Reactjs", "TypeScript", "MaterialUI", "React Context API"],
      results: "25% reduction in energy consumption, 40% improvement in traffic flow",
      url: "https://ecommerce-demo.example.com"
    },
    {
      id: 7,
      title: "Jira Clone",
      description: "The application allows users to log in via email, password, or Jira token. Once authenticated, users land on a clean and functional dashboard where they can:- View all Jira stories in a structured layout. Filter tasks by project, status, priority, or date. Quickly analyze task distribution based on their status or priority.Navigate with ease thanks to a responsive and user-friendly interface",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Web",
      technologies: ["React", "Typescript", "Chakra UI", "Vite"],

    },
    {
      id: 8,
      title: "Ecommerce",
      description: "Developed a fully functional shopping cart. Designed the entire platform to be responsive using media queries, ensuring a smooth shopping experience across all devices, including mobile, tablet, and desktop.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Cloud",
      technologies: ["React", "Typescript", "Chakra UI", "Vite"],
      url: "https://dreamy-bunny-19625d.netlify.app/"
    },
    {
      id: 9,
      title: "Smart City IoT Platform",
      description: "Comprehensive IoT platform for smart city management including traffic, energy, and waste management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Cloud",
      technologies: ["AWS IoT", "Microservices", "Kubernetes", "Elasticsearch", "Grafana"],
      client: "CityTech Municipal",
      results: "25% reduction in energy consumption, 40% improvement in traffic flow"
    },

  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have transformed businesses across various industries.
            Each project showcases our commitment to innovation, quality, and results.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const showMore = project.technologies.length > 3;
              const maxDescLength = 180; // adjust as needed for 3 lines
              const isDescTruncated = project.description.length > maxDescLength;
              return (
                <div key={project.id} className="flex flex-col h-full">
                  <Card
                    className="flex flex-col h-full bg-slate-900/50 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden cursor-pointer"
                    tabIndex={0}
                    role="button"
                    aria-label={`Open details for ${project.title}`}
                    onClick={() => setOpenProject(project)}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpenProject(project); }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => (e.currentTarget.src = '/fallback.png')}
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-500/30">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-cyan-300 group-hover:text-cyan-200 transition-colors truncate line-clamp-1">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 line-clamp-3 min-h-[72px]">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-300 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-cyan-900/20 text-cyan-400 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                          {showMore && (
                            <button
                              type="button"
                              className="px-2 py-1 bg-cyan-900/20 text-cyan-400 text-xs rounded underline focus:outline-none focus:ring-2 focus:ring-cyan-400"
                              onClick={e => { e.stopPropagation(); setOpenProject(project); }}
                              aria-label={`Show all technologies for ${project.title}`}
                            >
                              +{project.technologies.length - 3} more
                            </button>
                          )}
                        </div>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-3 text-cyan-400 hover:text-cyan-200 text-xs font-medium border border-cyan-400 rounded-full px-3 py-1 transition-colors duration-200 ml-0"
                            onClick={e => e.stopPropagation()}
                            aria-label={`Open live demo for ${project.title}`}
                          >
                            Live Demo <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>


                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Project Details Dialog */}
      <Dialog open={!!openProject} onOpenChange={open => !open && setOpenProject(null)}>
        <DialogContent className="max-w-2xl">
          {openProject && (
            <>
              <DialogHeader>
                <DialogTitle>{openProject.title}</DialogTitle>
                <DialogDescription>{openProject.description}</DialogDescription>
              </DialogHeader>
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={openProject.image}
                  alt={openProject.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={e => (e.currentTarget.src = '/fallback.png')}
                />
              </div>
              {openProject.url && (
                <div className="mb-4 flex justify-end">
                  <a
                    href={openProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-200 text-sm font-medium border border-cyan-400 rounded-full px-4 py-1 transition-colors duration-200"
                    aria-label={`Open live demo for ${openProject.title}`}
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-300 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {openProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-cyan-900/20 text-cyan-400 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together. Contact us to discuss your next project.
            </p>
            <Button variant="default" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
