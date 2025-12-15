import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  console.log("FORM SUBMITTED");
  e.preventDefault();

  const form = e.currentTarget;

  const name = (form.querySelector('#name') as HTMLInputElement)?.value;
  const phone = (form.querySelector('#phone') as HTMLInputElement)?.value;
  const email = (form.querySelector('#email') as HTMLInputElement)?.value;
  const subject = (form.querySelector('#subject') as HTMLSelectElement)?.value;
  const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value;

  const whatsappNumber = "919047305863"; // replace with your number

  const text = `
New Contact Enquiry

Name: ${name}
Phone: ${phone}
Email: ${email}
Subject: ${subject}

Message:
${message}
  `;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We're here to help. Reach out to us for quotes, support, or general inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            
            <div className="flex items-start space-x-4">
              <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Head Office</h3>
                <p className="text-gray-600 mt-1">
                  123 Tech Park, Silicon Avenue<br />
                  Indiranagar, Bangalore<br />
                  Karnataka, 560100
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone Support</h3>
                <p className="text-gray-600 mt-1">
                  +91 9042358909<br />
                  <span className="text-sm text-gray-500">Mon-Fri 9am to 6pm</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-gray-600 mt-1">
                  +91 9042358909
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Sales</h3>
                <p className="text-gray-600 mt-1">
                  sales@neoteq.com<br />
                  support@neoteq.com
                </p>
              </div>
            </div>
            
             <div className="flex items-start space-x-4 border-t pt-8 border-gray-100">
              <div className="bg-gray-100 p-3 rounded-full text-gray-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Working Hours</h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="+91 90000 00000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                 <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Request for Quotation (Bulk)</option>
                    <option>Technical Support</option>
                    <option>Partnership Proposal</option>
                 </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto px-8 py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center">
                <Send size={18} className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;