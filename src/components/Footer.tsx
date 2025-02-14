import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Church Info */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Faith Temple</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              A Bible believing Interdenominational community dedicated in following Jesus Christ as Lord and Savior.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maroon-500 flex-shrink-0 mt-1" />
                <p className="text-gray-400 leading-relaxed">
                  NRI Hospital Road, Opp. SR Residency, Mangalagiri, AP, India.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-maroon-500 flex-shrink-0" />
                <p className="text-gray-400">+91 7799212199</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-maroon-500 flex-shrink-0" />
                <a 
                  href="mailto:faithtempleindia@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  faithtempleindia@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center">
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('youtube')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Videos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('donate')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('location')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
            <div className="flex gap-6 mb-8">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-maroon-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-maroon-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-maroon-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCutf60DPKVLQRDhAl-wNXKg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-maroon-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 leading-relaxed text-right mb-8">
              Follow us on social media to stay updated with our latest events, sermons, and community activities.
            </p>
            <div className="flex justify-end">
              <img 
                src="https://lctech.in/faithtemple-images/faithtemple-logo.jpg"
                alt="Faith Temple Logo"
                className="w-48 h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Faith Temple. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;