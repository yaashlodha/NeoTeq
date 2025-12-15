import React from 'react';
import { Laptop, Printer, Server, Wifi, Shield, HardDrive, Smartphone, Monitor } from 'lucide-react';

const Solutions: React.FC = () => {
  const categories = [
    {
      title: "Laptops & Notebooks",
      desc: "High-performance business laptops from Dell, HP, Lenovo, and Apple. Customized configurations for every role.",
      icon: <Laptop size={40} className="text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Desktops & Workstations",
      desc: "Powerful tower and mini-PC solutions for data-intensive tasks, creative design, and general office productivity.",
      icon: <Monitor size={40} className="text-white" />,
      color: "bg-indigo-600"
    },
    {
      title: "Printers & Imaging",
      desc: "Enterprise-grade laser printers, multifunctional devices, and scanners to streamline your document workflow.",
      icon: <Printer size={40} className="text-white" />,
      color: "bg-cyan-600"
    },
    {
      title: "Servers & Storage",
      desc: "Scalable rack and tower servers, NAS solutions, and cloud integration for secure data management.",
      icon: <Server size={40} className="text-white" />,
      color: "bg-slate-600"
    },
    {
      title: "Networking",
      desc: "Routers, switches, and wireless access points to ensure fast, reliable, and secure connectivity across your office.",
      icon: <Wifi size={40} className="text-white" />,
      color: "bg-violet-600"
    },
    {
      title: "Peripherals & Accessories",
      desc: "Essential add-ons including docking stations, monitors, keyboards, mice, and ergonomic solutions.",
      icon: <HardDrive size={40} className="text-white" />,
      color: "bg-teal-600"
    },
    {
      title: "Cyber Security",
      desc: "Hardware firewalls and endpoint security software to protect your infrastructure from modern threats.",
      icon: <Shield size={40} className="text-white" />,
      color: "bg-red-600"
    },
    {
      title: "Mobile Solutions",
      desc: "Tablets and enterprise mobile devices for field force automation and remote work flexibility.",
      icon: <Smartphone size={40} className="text-white" />,
      color: "bg-emerald-600"
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-brand-900 py-20 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive hardware and technology portfolio designed to meet the demands of modern business.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((item, idx) => (
            <div key={idx} className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={`${item.color} p-6 flex justify-center items-center h-32`}>
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <span className="text-brand-600 text-sm font-semibold group-hover:underline cursor-pointer">
                  View Products &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Strip */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-8">
            We deal with specialized enterprise hardware requests. Contact our sales team for custom procurement.
          </p>
          <a href="#/contact" className="inline-block bg-brand-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-700 transition-colors">
            Contact Sales Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;