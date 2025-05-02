import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Code, Cpu, Smartphone, Cloud, BrainCircuit, Users, Briefcase, Phone, Rocket, Lightbulb, CheckCircle, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technocraze Innovations - Turning Ideas into Reality',
  description: 'Expert software, hardware, web/mobile app, IoT, AI/ML development. We build innovative solutions and final year projects.',
};

// Team Data (Updated)
const teamMembers = [
  { name: "TEJAS KADAM", role: "Founder & Lead Full Stack Engineer", image: "https://picsum.photos/200/200?random=1", bio: "Visionary leader driving innovation." },
  { name: "SUJIT TADADIKAR", role: "CTO (Research and Development) & Co-Founder, Lead Embedded Software Engineer", image: "https://picsum.photos/200/200?random=2", bio: "Specialist in IoT and embedded systems."}, // BIO updated (swapped with member 3)
  { name: "NEHALI TANDEL", role: "CHIEF OF PRODUCT DESIGN & SENIOR EXECUTIVE – CYBERSECURITY (SOC & VAPT)", image: "https://picsum.photos/200/200?random=3", bio: "Expertise in full-stack development, SOC operations, and VAPT, she drives innovation while ensuring secure, scalable digital solutions." }, // BIO updated (swapped with member 2)
];

// Portfolio Data (replace with actual data)
const portfolioItems = [
  { title: "Smart Home System", description: "IoT-based home automation.", image: "https://picsum.photos/400/300?random=4", dataAiHint: "smart home technology", category: "IoT" },
  { title: "E-commerce Web App", description: "Scalable online store platform.", image: "https://picsum.photos/400/300?random=5", dataAiHint: "ecommerce website", category: "Web App" },
  { title: "AI Predictive Maintenance", description: "ML model for industrial equipment.", image: "https://picsum.photos/400/300?random=6", dataAiHint: "factory machine", category: "AI/ML" },
  { title: "Student Project Portal", description: "Platform for showcasing final year projects.", image: "https://picsum.photos/400/300?random=7", dataAiHint: "student presentation", category: "Web App" },
];

// Services Data
const services = [
 { title: "Software Development", icon: <Code className="h-8 w-8 text-primary mb-4" />, description: "Custom software solutions tailored to your business needs." },
 { title: "Hardware & IoT", icon: <Cpu className="h-8 w-8 text-primary mb-4" />, description: "Smart app-based embedded hardware and security systems." },
 { title: "Web Applications", icon: <Cloud className="h-8 w-8 text-primary mb-4" />, description: "Modern, scalable, and responsive web applications." },
 { title: "Mobile Apps", icon: <Smartphone className="h-8 w-8 text-primary mb-4" />, description: "Native and cross-platform Android mobile applications." },
 { title: "AI & Machine Learning", icon: <BrainCircuit className="h-8 w-8 text-primary mb-4" />, description: "Intelligent solutions using AI and ML technologies." },
 { title: "Student Projects", icon: <Users className="h-8 w-8 text-primary mb-4" />, description: "Final year projects for Engineering and CS/IT students." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-background pt-20 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28">
           {/* Background shapes */}
          <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-10">
            <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="hsl(var(--primary))" d="M48.4,-64.9C62.1,-55.8,72.1,-42,77.4,-26.9C82.7,-11.9,83.3,4.4,78.1,19.5C72.9,34.6,61.9,48.6,48.7,59.4C35.5,70.2,20.1,77.8,3.4,79.1C-13.3,80.4,-30,75.4,-43.9,66.4C-57.8,57.4,-69,44.5,-74.8,30.1C-80.6,15.6,-81,-0.4,-76.7,-15.5C-72.4,-30.6,-63.3,-44.7,-51.1,-54.7C-38.9,-64.7,-23.6,-70.6,-8.3,-71.7C7,-72.8,22.3,-69.1,34.6,-66.9C40.1, -66, 48.4,-64.9" transform="translate(100 100)" />
            </svg>
          </div>
           <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
             <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <path fill="hsl(var(--accent))" d="M48.5,-46.5C61.7,-34.8,70.7,-17.4,71.1,0.5C71.5,18.4,63.4,36.8,50.1,48.4C36.8,59.9,18.4,64.5,-1.3,65.5C-21.1,66.5,-42.2,63.8,-55.3,52.7C-68.4,41.6,-73.5,20.8,-72.1,1.5C-70.7,-17.8,-62.8,-35.6,-50.4,-47.2C-38,-58.8,-21.1,-64.2,-3.6,-62.4C13.9,-60.5,27.9,-51.3,48.5,-46.5" transform="translate(100 100)" />
             </svg>
           </div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                   <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Technocraze Startup Innovations
                  </h1>
                  <p className="text-xl font-medium text-primary">
                    Turning Your Smallest Ideas into Future-Shaping Innovations.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We believe every idea holds potential. With advanced technology like AI, ML, and IoT, we transform concepts into reality – building websites, web apps, mobile apps, and smart hardware to solve real-world problems.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow transition-shadow hover:shadow-lg">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="shadow transition-shadow hover:shadow-lg">
                    <Link href="#portfolio">View Projects</Link>
                  </Button>
                </div>
              </div>
               <Image
                 src="https://picsum.photos/600/400?random=0"
                 alt="Hero Image"
                 width={600}
                 height={400}
                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg border border-border"
                 data-ai-hint="technology startup abstract"
               />
            </div>
          </div>
        </section>

        {/* About/Mission Section */}
        <section id="about" className="container px-4 md:px-6">
           <div className="flex flex-col items-center justify-center space-y-4 text-center">
             <div className="space-y-2">
               <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Mission</div>
               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Innovate for a Better Future</h2>
               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 At TSI, we're passionate about leveraging technology to tackle day-to-day challenges. We cater to businesses and students alike, providing comprehensive software and hardware solutions. From basic programming to advanced AI/ML, we bring creative ideas to life, contributing to India's technological advancement, one problem at a time.
               </p>
             </div>
           </div>
           <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                 <Rocket className="h-10 w-10 mx-auto text-accent" />
                 <h3 className="text-lg font-bold">Business Solutions</h3>
                 <p className="text-sm text-muted-foreground">Custom software, hardware, and app development to drive business growth.</p>
              </div>
              <div className="grid gap-1 text-center">
                 <Lightbulb className="h-10 w-10 mx-auto text-accent" />
                 <h3 className="text-lg font-bold">Student Projects</h3>
                 <p className="text-sm text-muted-foreground">Developing impactful final year projects for Diploma, BE, BSc, BCA, MSc, MCA students.</p>
              </div>
              <div className="grid gap-1 text-center">
                 <CheckCircle className="h-10 w-10 mx-auto text-accent" />
                 <h3 className="text-lg font-bold">Quality Focused</h3>
                 <p className="text-sm text-muted-foreground">Delivering high-quality, reliable, and scalable technological solutions.</p>
              </div>
            </div>
        </section>

        {/* Services Section */}
         <section id="services" className="bg-secondary">
           <div className="container px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
               <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Expertise</div>
               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 Comprehensive solutions from software development and hardware engineering to cutting-edge AI/ML applications and student project guidance.
               </p>
             </div>
             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {services.map((service, index) => (
                 <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
                   <CardHeader className="p-0 mb-4">
                      {service.icon}
                     <CardTitle>{service.title}</CardTitle>
                   </CardHeader>
                   <CardContent className="p-0">
                     <p className="text-muted-foreground">{service.description}</p>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>
         </section>

        {/* Team Section */}
        <section id="team" className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Innovators</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The passionate individuals driving Technocraze forward.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover"
                    data-ai-hint="professional headshot"
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-2">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                  <CardDescription>{member.bio}</CardDescription>
                </CardContent>
                {/* <CardFooter className="flex justify-center space-x-2 pb-6">
                    Optional: Add social links
                   <Button variant="outline" size="icon"><Users className="h-4 w-4" /></Button>
                   <Button variant="outline" size="icon"><Code className="h-4 w-4" /></Button>
                </CardFooter> */}
              </Card>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
             <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Work</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Project Portfolio</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A glimpse into the innovative solutions we've delivered.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.dataAiHint}
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                    <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full mb-2 inline-block">{item.category}</span>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                  {/* <CardFooter className="p-4 pt-0">
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardFooter> */}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
         <section id="contact" className="container px-4 md:px-6">
             <div className="grid gap-10 md:grid-cols-2">
               {/* Contact Information */}
               <div className="space-y-6">
                 <div className="space-y-2">
                   <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Contact Us</div>
                   <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                   <p className="text-muted-foreground md:text-lg">
                     Have a project in mind or want to learn more about our services? Reach out to us!
                   </p>
                 </div>
                 <div className="space-y-4">
                   <div className="flex items-center gap-4">
                     <Phone className="h-6 w-6 text-primary" />
                     <div>
                       <h3 className="font-semibold">Phone</h3>
                       <a href="tel:+919137288315" className="text-muted-foreground hover:text-primary transition-colors">+91 9137288315</a>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <Mail className="h-6 w-6 text-primary" />
                     <div>
                       <h3 className="font-semibold">Email</h3>
                       {/* Replace with actual email if available */}
                       <a href="mailto:contact@technocraze.com?subject=Inquiry%20from%20Website" className="text-muted-foreground hover:text-primary transition-colors">contact@technocraze.com</a>
                     </div>
                   </div>
                    <div className="flex items-center gap-4">
                      {/* Placeholder for social/DM link */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      <div>
                        <h3 className="font-semibold">Instagram DM</h3>
                        <a href="https://www.instagram.com/technocraze_startupinnovations/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@technocraze_startupinnovations</a>
                      </div>
                    </div>
                 </div>
               </div>

               {/* Contact Form */}
               <Card>
                 <CardHeader>
                   <CardTitle>Send us a Message</CardTitle>
                   <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                 </CardHeader>
                 <CardContent>
                   {/* Basic form structure - No Server Action implemented */}
                   <form className="space-y-4">
                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                       <div className="space-y-2">
                         <Label htmlFor="first-name">First Name</Label>
                         <Input id="first-name" placeholder="John" required />
                       </div>
                       <div className="space-y-2">
                         <Label htmlFor="last-name">Last Name</Label>
                         <Input id="last-name" placeholder="Doe" required />
                       </div>
                     </div>
                     <div className="space-y-2">
                       <Label htmlFor="email">Email</Label>
                       <Input id="email" type="email" placeholder="john.doe@example.com" required />
                     </div>
                     <div className="space-y-2">
                       <Label htmlFor="message">Message</Label>
                       <Textarea id="message" placeholder="Your message..." required className="min-h-[100px]" />
                     </div>
                     <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
                   </form>
                 </CardContent>
               </Card>
             </div>
           </section>

      </main>
      <Footer />
    </div>
  );
}
