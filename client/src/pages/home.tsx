import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Briefcase, 
  Users, 
  Compass, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Calendar,
  Menu,
  X,
  ArrowRight,
  DollarSign,
  Upload,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Import assets
import heroImage from "@assets/generated_images/minimalist_modern_white_and_navy_office_desk_with_financial_documents.png";
import abstractImage from "@assets/generated_images/modern_architectural_abstract_with_navy_and_gold_accents.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tight text-primary">
            Alto Accounting
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">Services</button>
            <button onClick={() => scrollToSection('why-us')} className="text-sm font-medium hover:text-accent transition-colors">Why Alto</button>
            <a 
              href="https://verifyle.com/@altoaccounting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Client Portal
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              onClick={() => scrollToSection('pricing')}
            >
              Start Tax Prep
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-10">
                  <button onClick={() => scrollToSection('about')} className="text-lg font-medium text-left">About</button>
                  <button onClick={() => scrollToSection('services')} className="text-lg font-medium text-left">Services</button>
                  <button onClick={() => scrollToSection('why-us')} className="text-lg font-medium text-left">Why Alto</button>
                  <a href="https://verifyle.com/@altoaccounting" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-left">Client Portal</a>
                  <Button onClick={() => scrollToSection('pricing')} className="w-full">Start Tax Prep</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern office workspace" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight mb-6">
                Expert Tax & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Bookkeeping
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">Professional accounting you can trust. Available for individuals and small businesses.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-lg h-12 px-8 bg-primary hover:bg-primary/90" onClick={() => scrollToSection('contact')}>
                  Book a Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="rounded-full text-lg h-12 px-8 border-primary text-primary hover:bg-secondary/50" onClick={() => scrollToSection('services')}>
                  View Services
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  graydon@altoaccounting.com
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center md:col-span-1"
            >
              <div className="relative w-4/5">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-tl-3xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary/10 rounded-br-3xl -z-10" />
                <img 
                  src="/team-photo.jpg" 
                  alt="Graydon Anderson and Angela Anderson" 
                  className="rounded-xl shadow-2xl w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 md:pl-8 max-w-3xl"
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">About us</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Alto Accounting is led by husband-and-wife team Graydon Anderson, CPA, and Angela Bennion Anderson, CPA. We're proud parents of four children.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Both of us are graduates of BYU's top-ranked accounting program. Graydon spent five years at <span className="font-semibold text-primary">EY</span> and ten years in financial and operational planning at <span className="font-semibold text-primary">Apple</span>. Angela brings experience from <span className="font-semibold text-primary">PwC</span> and <span className="font-semibold text-primary">Sonos</span>.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We combine Fortune 100–level precision with the personal attention of a family-run firm to support your bookkeeping, business taxes, and financial strategy.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary mt-1">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Former Big 4</h4>
                    <p className="text-sm text-muted-foreground">EY and PwC Experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Fortune 100</h4>
                    <p className="text-sm text-muted-foreground">Apple Experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary mt-1">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">BYU Grads</h4>
                    <p className="text-sm text-muted-foreground">Top-Ranked Accounting School</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive financial solutions tailored to your needs. From daily bookkeeping to complex tax strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Users,
                title: "Individual Taxes",
                description: "Straightforward, stress-free tax prep with proactive advice for next year."
              },
              {
                icon: Briefcase,
                title: "Business Taxes",
                description: "C-Corps, S-Corps, partnerships, LLCs, and sole proprietors—file confidently and maximize deductions."
              },
              {
                icon: BookOpen,
                title: "Bookkeeping",
                description: "Accurate monthly books, reconciliations, and financial reports you can trust."
              },
              {
                icon: DollarSign,
                title: "Payroll",
                description: "Reliable payroll processing, tax filings, and compliance so you can focus on your business."
              },
              {
                icon: Compass,
                title: "Advisory & Planning",
                description: "Cash flow insights and growth-focused financial guidance."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary mb-4 transition-colors duration-300">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Get Started Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-5xl font-serif font-bold text-primary mb-8">Getting Started is Easy</h2>
            <div className="text-muted-foreground text-xl leading-relaxed mb-12">
              <div className="flex flex-col gap-5 text-left max-w-lg mx-auto">
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center text-base font-semibold shrink-0">1</span>
                  <span className="pt-1">Complete the intake form</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center text-base font-semibold shrink-0">2</span>
                  <span className="pt-1">Download the tax organizer and begin compiling your documents</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfNRkZwA7AR6sC816lnQogEQNxYadfb3ysAVAooeE1qiWqVEA/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="rounded-full text-lg h-12 px-8 bg-primary hover:bg-primary/90">
                  <ArrowRight className="w-5 h-5 mr-2" /> Start Intake Form
                </Button>
              </a>
              <a 
                href="https://docs.google.com/spreadsheets/d/1UwUbBLAiIq90YmRRt23OP-odkMIO3rO-6JVjAZWFrag/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="rounded-full text-lg h-12 px-8 border-primary text-primary hover:bg-secondary/50">
                  <ArrowRight className="w-5 h-5 mr-2" /> Tax Organizer
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-4xl font-serif font-bold text-primary mb-6">Pricing</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              These ranges give you an idea of what tax preparation and e-filing will likely cost. Every return is different, and these are starting ranges. Reach out for a tailored quote.
            </p>

            <div className="bg-muted/30 rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-4 px-6 font-semibold">Service</th>
                    <th className="text-right py-4 px-6 font-semibold">Starting At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-foreground text-left">Individual Federal 1040 + One State Return</td>
                    <td className="py-4 px-6 text-right font-semibold text-primary">$400+</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-foreground text-left">Federal 1040 with Schedule A (Itemized) + State</td>
                    <td className="py-4 px-6 text-right font-semibold text-primary">$450+</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-foreground text-left">Additional Schedules C/D/E (Self-Employed, Capital Gains/Losses, Rental/Royalty)</td>
                    <td className="py-4 px-6 text-right font-semibold text-primary">$200+</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-foreground text-left">Additional State Returns</td>
                    <td className="py-4 px-6 text-right font-semibold text-primary">$150+</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-foreground text-left">Business Tax Return (1065, 1120S, 1120)</td>
                    <td className="py-4 px-6 text-right font-semibold text-primary">$900+</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-foreground text-left">Other</td>
                    <td className="py-4 px-6 text-right font-semibold text-primary">Inquire</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Why Clients Choose Alto</h2>
              <div className="space-y-6">
                {[
                  "Big 4 and Fortune 100 expertise",
                  "Owner-operated, hands-on service",
                  "Personalized, responsive service",
                  "Local knowledge — available remote or in-person"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <h3 className="text-2xl font-serif font-bold mb-4">Ready to simplify your finances?</h3>
              <p className="text-white/80 mb-8">
                Get the same level of financial strategy used by the world's biggest companies, tailored for you.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-white text-primary hover:bg-secondary font-bold text-lg h-14"
                onClick={() => scrollToSection('contact')}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Contact / CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-secondary/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Let’s Talk</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                If you’re ready for accounting that feels effortless — and advice you can actually use — let’s connect.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-xl mx-auto">
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:graydon@altoaccounting.com" className="text-accent hover:underline font-medium">graydon@altoaccounting.com</a>
                </div>

                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-4">
                    <Upload className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Client Portal</h3>
                  <a href="https://verifyle.com/@altoaccounting" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Upload Documents</a>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 text-lg rounded-full shadow-xl shadow-primary/20" onClick={() => scrollToSection('contact')}>
                Email to Schedule <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary py-12 text-white/80 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-serif font-bold text-white">
              Alto Accounting
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Alto Accounting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
