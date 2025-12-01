import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-gradient-to-b from-[#1B75BB] to-[#5CB85C] text-center py-16 rounded-2xl shadow-xl mb-12" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1920&h=1080&fit=crop')"}}>
        <h2 className="text-6xl font-bold text-white mb-4">About Us</h2>
        <p className="text-xl text-white">Dedicated to providing top-notch carpet cleaning services across Northern Ireland.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-[#2E3A45]">Our Mission</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            At 2424 Carpet Cleaning, we are committed to delivering exceptional cleaning services that not only meet but exceed our clients' expectations. Our eco-friendly products and advanced cleaning techniques ensure a cleaner, healthier environment for all.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe in the power of clean spaces to enhance well-being and productivity. Our mission is to transform every home and business with our expert cleaning solutions.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="https://images.unsplash.com/photo-1560264418-02924c49b2a8?w=600&h=400&fit=crop" alt="Team" className="rounded-full shadow-lg hover:shadow-2xl transition-all duration-300" />
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-4xl font-bold text-center text-[#2E3A45] mb-12">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Example team member cards */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <img src="https://images.unsplash.com/photo-1502767089025-6572583495d9?w=300&h=300&fit=crop" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4 hover:shadow-2xl transition-all duration-300" />
            <h4 className="text-xl font-semibold text-[#2E3A45]">Jane Doe</h4>
            <p className="text-gray-600">Lead Technician</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4 hover:shadow-2xl transition-all duration-300" />
            <h4 className="text-xl font-semibold text-[#2E3A45]">John Smith</h4>
            <p className="text-gray-600">Customer Service Manager</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <img src="https://images.unsplash.com/photo-1540479859555-17af45c3b73c?w=300&h=300&fit=crop" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4 hover:shadow-2xl transition-all duration-300" />
            <h4 className="text-xl font-semibold text-[#2E3A45]">Emily Brown</h4>
            <p className="text-gray-600">Operations Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;