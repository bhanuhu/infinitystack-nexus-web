
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Cloud, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "We create custom software solutions tailored to your business needs. From web applications to mobile apps, our team delivers high-quality, scalable solutions using the latest technologies and best practices.",
      technologies: ["React", "Node.js", "Python", "TypeScript", "PostgreSQL", "Docker"],
      features: [
        "Custom Web Applications",
        "Mobile App Development",
        "API Development & Integration",
        "Database Design & Optimization",
        "Quality Assurance & Testing",
        "Maintenance & Support"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Transform your infrastructure with our comprehensive cloud services. We help businesses migrate to the cloud, optimize performance, and ensure scalability while reducing costs and improving reliability.",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "CI/CD"],
      features: [
        "Cloud Migration Strategy",
        "Infrastructure as Code",
        "Container Orchestration",
        "Auto-scaling Solutions",
        "Backup & Disaster Recovery",
        "Performance Monitoring"
      ]
    },
    {
      icon: Zap,
      title: "AI & Data Analytics",
      description: "Unlock the power of your data with our AI and analytics solutions. We build intelligent systems that provide actionable insights, automate processes, and drive data-driven decision making.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Apache Spark", "Elasticsearch", "Tableau"],
      features: [
        "Machine Learning Models",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Real-time Data Processing",
        "Business Intelligence Dashboards"
      ]
    },
    {
      icon: Shield,
      title: "IT Consulting",
      description: "Strategic technology guidance to help your business thrive. Our experts provide comprehensive IT consulting services to optimize your technology stack, improve security, and align IT with business goals.",
      technologies: ["Security Audits", "Architecture Design", "DevOps", "Agile", "ITIL", "Compliance"],
      features: [
        "Technology Strategy Planning",
        "System Architecture Review",
        "Security Assessment",
        "Digital Transformation",
        "Process Optimization",
        "Team Training & Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Expertise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that drive innovation, efficiency, and growth. 
            Our team of experts combines deep technical knowledge with industry best practices to transform your business.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="flex-1">
                <Card className="bg-slate-900/50 border-cyan-500/20 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon className="w-12 h-12 text-cyan-400" />
                      <CardTitle className="text-2xl text-cyan-300">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-300 mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-400 flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-300 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expertise can help you achieve your technology goals.
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
