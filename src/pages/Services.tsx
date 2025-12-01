import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Residential Carpet Cleaning</h3>
          <p className="text-gray-600">Ensure a clean and fresh environment in your home with our comprehensive residential carpet cleaning services.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Commercial Carpet Cleaning</h3>
          <p className="text-gray-600">Maintain a professional appearance in your office with our specialized commercial carpet cleaning solutions.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Upholstery Cleaning</h3>
          <p className="text-gray-600">Revitalize your furniture with our expert upholstery cleaning services, ensuring longevity and freshness.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Stain Removal</h3>
          <p className="text-gray-600">Our advanced stain removal techniques effectively tackle tough stains, restoring your carpets to their original beauty.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Rug Cleaning</h3>
          <p className="text-gray-600">Protect and preserve your area rugs with our meticulous rug cleaning services, tailored to your specific needs.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Pet Odor Elimination</h3>
          <p className="text-gray-600">Eliminate pet odors and maintain a pleasant atmosphere with our specialized pet odor elimination treatments.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;