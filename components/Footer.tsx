import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">NeoTeq Solutions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with cutting-edge IT infrastructure and hardware solutions. We build the foundation for your digital success.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Solutions', path: '/solutions' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-brand-400 transition-colors flex items-center text-sm group">
                    <ChevronRight size={16} className="mr-2 text-brand-600 group-hover:text-brand-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-brand-500 shrink-0 mt-0.5" />
                <span>Mount Road<br />Chennai,600100</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-brand-500 shrink-0" />
                <span>+91 9042358909</span>
              </li>
              <li className="flex items-center">
                <MessageCircle size={20} className="mr-3 text-brand-500 shrink-0" />
                <span>+91 9042358909 (WhatsApp)</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-brand-500 shrink-0" />
                <span>sales@neoteq.com</span>
              </li>
            </ul>
          </div>

          {/* Map Embedding */}
          <div className="h-64 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003614131577!2d77.6395995!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7c3647311%3A0x6b6960c1d636561!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Map Location"
             ></iframe>
          </div>

        </div>

        <div className="border-t border-gray-800 py-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TechCore Enterprise Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;