import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <p className="text-gray-600 mb-4">"2424 Carpet Cleaning transformed our office carpets! The team was professional, and the results were outstanding."</p>
          <h4 className="font-semibold">- Emily Turner, Office Manager at ABC Corp</h4>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <p className="text-gray-600 mb-4">"Our home feels so much fresher after getting our carpets cleaned. Highly recommend their services!"</p>
          <h4 className="font-semibold">- John Doe, Homeowner</h4>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <p className="text-gray-600 mb-4">"Professional, efficient, and affordable. 2424 Carpet Cleaning is our go-to for any carpet issues."</p>
          <h4 className="font-semibold">- Sarah Lee, Business Owner</h4>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <p className="text-gray-600 mb-4">"Great service and attention to detail. Our upholstery looks brand new!"</p>
          <h4 className="font-semibold">- Mike Johnson, Interior Designer</h4>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <p className="text-gray-600 mb-4">"I was amazed by the stain removal service. They got out stains that I thought were permanent."</p>
          <h4 className="font-semibold">- Lisa White, Homeowner</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;