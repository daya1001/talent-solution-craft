import { Button } from "@/components/ui/button";
import { Award, Target, Heart, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Successful Placements" },
    { number: "150+", label: "Software Projects" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver nothing but the highest quality in everything we do."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Accurate matching of talent and technology solutions to your needs."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building lasting relationships through trust and transparency."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and methodologies."
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About TalentSolutions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With over a decade of experience, we bridge the gap between exceptional talent and innovative technology solutions. Our dual expertise in manpower consultancy and software development makes us your ideal partner for comprehensive business growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
