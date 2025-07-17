
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Users } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactDetails = [
    {
      title: "Email",
      value: "hello@infinitystack.dev",
      href: "mailto:hello@infinitystack.dev"
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      title: "Address",
      value: "123 Tech Street, Innovation District, Silicon Valley, CA 94000",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/infinitystack",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/infinitystack",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/infinitystack",
      color: "hover:text-gray-300"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology?
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>
      {/* Contact Form and Info */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-cyan-500/20 shadow-xl p-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-cyan-300">Send us a message</CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-cyan-300">Name</Label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-800 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 pl-10"
                      placeholder="Your full name"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400">
                      <Users className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cyan-300">Email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-800 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 pl-10"
                      placeholder="your.email@example.com"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cyan-300">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-slate-800 border-cyan-500/30 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                    placeholder="Tell us about your project or how we can help you..."
                  />
                </div>
                <div className="pt-2 flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="default"
                    className="rounded-full px-8 py-2 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-base"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          {/* Contact Info & Social */}
          <div className="flex flex-col gap-6">
            <Card className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-cyan-900/60 border-cyan-500/30 shadow-2xl p-6 rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-cyan-300">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200" />
                    <a href="mailto:hello@infinitystack.dev" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium">hello@infinitystack.dev</a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Phone className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200" />
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium">+1 (555) 123-4567</a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <MapPin className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200" />
                    <span className="text-gray-300 font-medium">123 Tech Street, Innovation District, Silicon Valley, CA 94000</span>
                  </div>
                </div>
                <div className="border-t border-cyan-500/20 pt-4">
                  <div className="flex gap-4 justify-center">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} hover:text-cyan-300 transition-colors duration-200 rounded-full p-2 bg-slate-800/40 hover:bg-cyan-900/30 shadow-sm`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-7 h-7" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "What types of projects do you work on?",
                answer: "We work on a wide range of projects including web applications, mobile apps, cloud infrastructure, AI/ML solutions, and custom software development. Our expertise spans across various industries and technologies."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity and scope. Simple projects may take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally. This includes bug fixes, updates, security patches, and feature enhancements."
              },
              {
                question: "What is your development process?",
                answer: "We follow an agile development methodology with regular client communication, iterative development, and continuous testing. This ensures transparency, quality, and timely delivery of your project."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-cyan-300">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
