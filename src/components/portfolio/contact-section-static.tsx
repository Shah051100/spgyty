import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSectionStatic() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      const mailtoLink = `mailto:shahsaadat101@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your message has been prepared in your email client. Please send the email to complete your inquiry.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again or contact directly at shahsaadat101@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-green rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Let's <span className="text-neon-green">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to explore innovative food technology solutions? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Send Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          className="bg-black/30 border-gray-600 text-white placeholder-gray-400 focus:border-neon-green"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="bg-black/30 border-gray-600 text-white placeholder-gray-400 focus:border-neon-green"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's this about?"
                          className="bg-black/30 border-gray-600 text-white placeholder-gray-400 focus:border-neon-green"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or question..."
                          className="bg-black/30 border-gray-600 text-white placeholder-gray-400 focus:border-neon-green min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold py-3 px-6 rounded-lg hover:from-neon-cyan hover:to-neon-green transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Preparing Email...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-neon-orange">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-neon-green"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:shahsaadat101@gmail.com" className="text-neon-green hover:text-neon-cyan transition-colors">
                      shahsaadat101@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-neon-cyan"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Kashmir, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-neon-cyan">Research Interests</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-leaf text-neon-green text-sm"></i>
                  <span>Natural Food Preservation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-microscope text-neon-cyan text-sm"></i>
                  <span>Food Microbiology</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-flask text-neon-orange text-sm"></i>
                  <span>Biotechnology Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-apple-alt text-neon-green text-sm"></i>
                  <span>Dry Fruit Processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}