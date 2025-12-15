import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp, Monitor, Server } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/techbg/1920/1080')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-start justify-center min-h-[600px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Empowering Your Business <br />
            <span className="text-brand-500">With Next-Gen Tech</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            We provide comprehensive IT hardware and infrastructure solutions designed to scale with your enterprise. From high-performance workstations to secure server networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/solutions" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-md font-semibold text-lg transition-all flex items-center justify-center">
              Explore Solutions <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-900 rounded-md font-semibold text-lg transition-all flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Your Trusted Technology Partner</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              At TechCore, we bridge the gap between complex technology and business efficiency. We are a premier provider of enterprise-grade hardware, networking solutions, and IT support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Monitor size={48} />, 
                title: "Premium Hardware", 
                desc: "Authorized dealer for top global brands offering laptops, desktops, and peripherals." 
              },
              { 
                icon: <Server size={48} />, 
                title: "Infrastructure", 
                desc: "Robust server and networking setups tailored for reliability and uptime." 
              },
              { 
                icon: <ShieldCheck size={48} />, 
                title: "Security Focused", 
                desc: "End-to-end security integration to protect your valuable business assets." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-brand-600 mb-6">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stat Banner */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-4xl font-bold text-brand-500 mb-2">15+</div>
                    <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-brand-500 mb-2">500+</div>
                    <div className="text-gray-400">Corporate Clients</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-brand-500 mb-2">50+</div>
                    <div className="text-gray-400">Global Partners</div>
                </div>
                <div>
                    <div className="text-4xl font-bold text-brand-500 mb-2">24/7</div>
                    <div className="text-gray-400">Support Available</div>
                </div>
            </div>
        </div>
      </section>

      {/* Featured CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
             <div className="md:w-1/2 relative h-64 md:h-auto">
                <img 
                  src="https://picsum.photos/seed/workplace/800/600" 
                  alt="Modern Office" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
             <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to upgrade your infrastructure?</h3>
                <p className="text-gray-600 mb-8">
                  Get a customized quote for your organization's hardware needs. We offer competitive bulk pricing and authorized warranty support.
                </p>
                <Link to="/contact" className="inline-flex items-center text-brand-700 font-bold hover:text-brand-500">
                  Get in Touch <TrendingUp className="ml-2" size={20} />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;