import Link from 'next/link';
import type React from 'react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code, Users, Briefcase, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Increased logo size in desktop view */}
            <Logo className="h-10 w-auto" />
             {/* Removed company title span */}
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#services"
              className="transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#team"
              className="transition-colors hover:text-primary"
            >
              Team
            </Link>
            <Link
              href="#portfolio"
              className="transition-colors hover:text-primary"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle Navigation"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="flex items-center mb-4" // Added margin bottom
              onClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()}
            >
              {/* Used larger logo in sheet */}
              <Logo className="mr-2 h-8 w-auto" />
              {/* Removed company title span */}
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link
                  href="#services"
                  className="flex items-center transition-colors hover:text-primary"
                   onClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()}
                >
                   <Code className="mr-2 h-4 w-4" /> Services
                </Link>
                <Link
                  href="#team"
                  className="flex items-center transition-colors hover:text-primary"
                  onClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()}
                >
                   <Users className="mr-2 h-4 w-4" /> Team
                </Link>
                <Link
                  href="#portfolio"
                  className="flex items-center transition-colors hover:text-primary"
                  onClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()}
                >
                  <Briefcase className="mr-2 h-4 w-4" /> Portfolio
                </Link>
                <Link
                  href="#contact"
                  className="flex items-center transition-colors hover:text-primary"
                  onClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()}
                >
                  <Phone className="mr-2 h-4 w-4" /> Contact
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
         {/* Logo for mobile view */}
         <div className="flex flex-1 items-center justify-start space-x-2 md:hidden">
           <Link href="/" className="flex items-center">
             {/* Used larger logo in mobile view */}
             <Logo className="h-8 w-auto" />
             {/* Removed company title span */}
           </Link>
         </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Optionally add buttons like Login/Signup */}
          <Button variant="outline" size="sm" asChild>
             <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
