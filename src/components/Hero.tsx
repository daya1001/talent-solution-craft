import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10 flex items-center">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              TalentSolutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Your Premier Partner for Manpower Consultancy & Software Development Solutions
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg px-6 py-4 border">
              <Users className="h-6 w-6 text-primary" />
              <span className="font-medium">Expert Talent Placement</span>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg px-6 py-4 border">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-medium">Custom Software Solutions</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
