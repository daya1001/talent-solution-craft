import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TalentSolutions</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner for manpower consultancy and software development solutions. Building bridges between talent and technology.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Talent Acquisition</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Contract Staffing</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Executive Search</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Software Development</li>
              <li className="hover:text-primary-foreground cursor-pointer transition-colors">Mobile Apps</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@talensolutionss.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">123 Business Plaza<br />Tech District</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 TalentSolutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-primary-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary-foreground cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-primary-foreground cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
