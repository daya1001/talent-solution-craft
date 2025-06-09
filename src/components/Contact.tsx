
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@talensolutionss.com",
      subtext: "24/7 support available"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri 9AM-6PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Business Plaza, Tech District",
      subtext: "Downtown Office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      subtext: "9:00 AM - 6:00 PM"
    }
  ];

  return (
    <section className="py-20 bg-primary/5" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with our expertise? Contact us today and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Contact Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-border/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.subtext}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Service Interest
                  </label>
                  <Input placeholder="Manpower Consultancy / Software Development" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
