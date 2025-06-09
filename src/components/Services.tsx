
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Code, Search, Briefcase, Database, Smartphone } from "lucide-react";

const Services = () => {
  const manpowerServices = [
    {
      icon: Search,
      title: "Talent Acquisition",
      description: "Find the right professionals for your organization with our comprehensive recruitment services."
    },
    {
      icon: Users,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for short-term projects and seasonal requirements."
    },
    {
      icon: Briefcase,
      title: "Executive Search",
      description: "Specialized recruitment for senior-level positions and leadership roles."
    }
  ];

  const softwareServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements."
    },
    {
      icon: Database,
      title: "Enterprise Solutions",
      description: "Scalable enterprise applications and system integration services."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    }
  ];

  return (
    <section className="py-20 bg-secondary/5" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive solutions across manpower consultancy and software development to help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left text-primary">
              Manpower Consultancy
            </h3>
            <div className="space-y-6">
              {manpowerServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left text-primary">
              Software Development
            </h3>
            <div className="space-y-6">
              {softwareServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
