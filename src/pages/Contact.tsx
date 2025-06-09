
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss opportunities and collaborations. I'm always excited to work on innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div>
              <h2 className="text-2xl font-bold text-purple-300 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg hover-scale transition-all duration-300 hover:bg-slate-800/50">
                  <Mail className="text-purple-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:sanketzore348@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                      sanketzore348@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg hover-scale transition-all duration-300 hover:bg-slate-800/50">
                  <Phone className="text-purple-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+919769957469" className="text-white hover:text-purple-400 transition-colors">
                      +91 9769957469
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg hover-scale transition-all duration-300 hover:bg-slate-800/50">
                  <MapPin className="text-purple-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Mumbai - 400030, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/SanketZore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/30 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sanketzore135" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/30 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-slate-800/30 p-6 rounded-xl animate-fade-in hover-scale transition-all duration-300" style={{animationDelay: '0.6s'}}>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">Looking For</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Full-time Java Developer positions</li>
                <li>• Backend development opportunities</li>
                <li>• Software Development Engineer</li>
                <li>• Full-stack development roles</li>
                <li>• Spring Boot projects</li>
                <li>• Internship opportunities</li>
                <li>• Freelance projects</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 p-8 rounded-xl animate-fade-in hover-scale transition-all duration-300" style={{animationDelay: '0.8s'}}>
            <h2 className="text-2xl font-bold text-purple-300 mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-300">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-slate-700 border-slate-600 text-white focus:border-purple-500 transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-slate-700 border-slate-600 text-white focus:border-purple-500 transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 bg-slate-700 border-slate-600 text-white focus:border-purple-500 transition-colors resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={16} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
