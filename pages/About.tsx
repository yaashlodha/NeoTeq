import React from 'react';
import { Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  const brands = [
    "HP Enterprise", "Dell Technologies", "Lenovo", "Apple", 
    "Cisco", "Microsoft", "Samsung", "Logitech",
    "Canon", "Epson", "Asus", "Acer"
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving digital transformation through superior hardware and dedicated service.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <img 
                 src="https://picsum.photos/seed/meeting/800/600" 
                 alt="Our Team" 
                 className="rounded-lg shadow-xl"
               />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Neoteq Solutions was founded with a singular vision: to simplify IT procurement and infrastructure management for modern enterprises. Over the last decade, we have established ourselves as a reliable partner for hundreds of businesses, ranging from agile startups to Fortune 500 companies.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that the right technology serves as a catalyst for growth. Our team of experts works closely with clients to understand their unique operational challenges and deliver tailored hardware and software solutions that improve productivity and reduce downtime.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                 <div className="flex items-center space-x-3">
                    <Award className="text-brand-600" />
                    <span className="font-medium text-gray-900">Certified Reseller</span>
                 </div>
                 <div className="flex items-center space-x-3">
                    <Users className="text-brand-600" />
                    <span className="font-medium text-gray-900">Expert Support Team</span>
                 </div>
                 <div className="flex items-center space-x-3">
                    <Globe className="text-brand-600" />
                    <span className="font-medium text-gray-900">Nationwide Delivery</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies We Deal With */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900">Companies We Deal With</h2>
             <p className="text-gray-500 mt-4">Proud authorized partners of world-class technology brands.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
             {brands.map((brand, idx) => (
               <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow">
                 <span className="text-xl font-bold text-gray-400 hover:text-brand-600 transition-colors cursor-default">
                    {brand}
                 </span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;