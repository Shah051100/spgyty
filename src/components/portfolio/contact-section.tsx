import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Transmission Successful",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContact) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Food science background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Food science laboratory with microscope and samples"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-center mb-16 text-neon-green animate-glow"> CONTACT</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-2xl">
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-cyan">Send Transmission</h3>
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
                          {...field}
                          placeholder="Enter your name"
                          className="bg-transparent border-2 border-gray-600 rounded-lg text-white focus:border-neon-green focus:outline-none transition-colors duration-300"
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
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          className="bg-transparent border-2 border-gray-600 rounded-lg text-white focus:border-neon-cyan focus:outline-none transition-colors duration-300"
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
                          {...field}
                          rows={5}
                          placeholder="Enter your message"
                          className="bg-transparent border-2 border-gray-600 rounded-lg text-white focus:border-neon-orange focus:outline-none transition-colors duration-300 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-panel py-4 rounded-lg text-neon-green border-2 border-neon-green hover-neon-green transition-all duration-300 font-orbitron font-bold bg-transparent"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  {isSubmitting ? "SENDING..." : "SEND TRANSMISSION"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-orbitron text-xl font-bold mb-4 text-neon-cyan">Direct Communication</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <i className="fas fa-envelope text-neon-green text-xl"></i>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a
                      href="mailto:shahsaadat101@gmail.com"
                      className="text-neon-green hover:text-neon-cyan transition-colors duration-300"
                    >
                      shahsaadat101@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-phone text-neon-cyan text-xl"></i>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a
                      href="tel:+919149637676"
                      className="text-neon-cyan hover:text-neon-green transition-colors duration-300"
                    >
                      +91 9149637676
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-orbitron text-xl font-bold mb-4 text-neon-orange">Social Networks</h3>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-3xl text-gray-400 hover:text-neon-green transition-colors duration-300 transform hover:scale-110">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-3xl text-gray-400 hover:text-neon-cyan transition-colors duration-300 transform hover:scale-110">
                  <i className="fab fa-twitter"></i>
                </a>
                <div className="ml-4">
                  <p className="text-gray-300 text-sm">@Shah_Saadat05</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-orbitron text-xl font-bold mb-4 text-neon-green">Location</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Kashmir, India</p>
                <p className="text-sm text-gray-400">Food Technology Research Hub</p>
              </div>
              <div className="mt-4 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-neon-green text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
