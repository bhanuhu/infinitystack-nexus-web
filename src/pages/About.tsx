
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Rocket, Shield, Zap } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech innovation and strategic business development.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO",
      bio: "Technical architect specializing in scalable cloud solutions and AI implementation.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Kim",
      role: "Lead Developer",
      bio: "Full-stack engineer passionate about creating exceptional user experiences.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "Data Scientist",
      bio: "AI/ML expert transforming complex data into actionable business insights.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "InfinityStack was established with a vision to democratize cutting-edge technology for businesses of all sizes."
    },
    {
      year: "2019",
      title: "First Major Client",
      description: "Successfully delivered our first enterprise-level project, establishing our reputation in the market."
    },
    {
      year: "2020",
      title: "AI Division Launch",
      description: "Expanded our expertise to include artificial intelligence and machine learning solutions."
    },
    {
      year: "2021",
      title: "Cloud Partnership",
      description: "Became certified partners with major cloud providers, enhancing our service offerings."
    },
    {
      year: "2022",
      title: "100+ Projects",
      description: "Reached the milestone of 100 successful project deliveries across various industries."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Extended our services internationally, serving clients across three continents."
    },
    {
      year: "2024",
      title: "Innovation Lab",
      description: "Launched our R&D division focused on emerging technologies and experimental solutions."
    }
  ];

  const values = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible, embracing new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our commitment to quality and dependability ensures that our solutions perform consistently and meet the highest standards."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and in partnership with our clients."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for excellence in every project, continuously improving our processes and delivering exceptional results."
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
            About InfinityStack
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are pioneers in the digital transformation space, dedicated to empowering businesses
            with innovative technology solutions that drive growth and success.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">Our Story</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                InfinityStack was founded in 2018 with a simple yet ambitious vision: to bridge the gap between
                cutting-edge technology and practical business solutions. Our founders, having witnessed the transformative
                power of technology in various industries, recognized the need for a company that could make advanced
                technological capabilities accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From our humble beginnings as a small team of passionate developers and strategists, we have grown into
                a comprehensive technology partner serving clients across the globe. Our journey has been marked by
                continuous learning, adaptation, and an unwavering commitment to excellence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, InfinityStack stands as a testament to the power of innovation and collaboration. We continue to
                push boundaries, explore new technologies, and create solutions that not only meet current needs but
                anticipate future challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="bg-slate-900/50 border-cyan-500/20 text-center p-4">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">Meet Our Team</h2>
            <p className="text-lg text-gray-300">
              The brilliant minds behind InfinityStack's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/20 text-center group hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-cyan-500/30 group-hover:ring-cyan-400/50 transition-all duration-300">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/fallback.png';
                      }}
                    />
                  </div>
                  <CardTitle className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-cyan-400 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">Our Journey</h2>
            <p className="text-lg text-gray-300">
              Key milestones that shaped our growth and success
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="bg-slate-900/50 border-cyan-500/20">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <span className="text-cyan-400 font-mono text-lg">{milestone.year}</span>
                        <CardTitle className="text-cyan-300">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
