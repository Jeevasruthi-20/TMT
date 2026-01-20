import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary/10 to-primary/10 border-t border-border mt-24">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.jpeg" 
                alt="Thangam Magalir Thaiyalagam" 
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="font-serif font-bold text-lg text-foreground">
                Thangam Magalir Thaiyalagam
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering women through traditional crafts and custom tailoring services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/stitching" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Stitching Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Tailoring Classes</li>
              <li>Aari Work Classes</li>
              <li>Embroidery Classes</li>
              <li>Custom Stitching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>thangamwrites@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Thangam Magalir Thaiyalagam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

