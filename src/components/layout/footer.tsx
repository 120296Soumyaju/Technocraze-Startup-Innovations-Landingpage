import type React from 'react';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react'; // Added icons

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-8 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* Increased logo size in footer */}
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Turning ideas into innovation with technology.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
              <Link href="#team" className="hover:text-primary transition-colors">Our Team</Link>
              <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
             <h4 className="font-semibold">Services</h4>
             <ul className="space-y-2 text-sm text-muted-foreground list-none p-0">
               <li>Software Development</li>
               <li>Hardware Solutions</li>
               <li>Web Apps</li>
               <li>Mobile Apps</li>
               <li>IoT & Embedded Systems</li>
               <li>ML & AI Solutions</li>
               <li>Student Projects</li>
             </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="flex items-start space-x-2 text-sm">
              <Phone className="h-4 w-4 mt-1 shrink-0 text-primary" />
              <a href="tel:+919137288315" className="hover:text-primary transition-colors">+91 9137288315</a>
            </div>
             {/* Add email and address if available
             <div className="flex items-start space-x-2 text-sm">
               <Mail className="h-4 w-4 mt-1 shrink-0 text-primary" />
               <a href="mailto:info@technocraze.com" className="hover:text-primary transition-colors">info@technocraze.com</a>
             </div>
             <div className="flex items-start space-x-2 text-sm">
               <MapPin className="h-4 w-4 mt-1 shrink-0 text-primary" />
               <span>123 Innovation Drive, Tech City</span>
             </div>
             */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground md:flex md:justify-between md:text-left">
          <p>&copy; {currentYear} Technocraze Startup Innovations. All rights reserved.</p>
          {/* Optional: Add social links or privacy policy links here */}
           <div className="flex justify-center space-x-4 mt-4 md:mt-0">
             {/* Example Social Link
             <Link href="#" className="hover:text-primary transition-colors">
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> ... </svg>
             </Link>
             */}
             <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
