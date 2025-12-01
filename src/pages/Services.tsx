import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#1B75BB] to-[#5CB85C]">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            title: "Residential Carpet Cleaning",
            description:
              "Ensure a clean and fresh environment in your home with our comprehensive residential carpet cleaning services.",
            img: "https://images.unsplash.com/photo-1590487980296-8f0caa97f3d8?w=800&h=600&fit=crop",
          },
          {
            title: "Commercial Carpet Cleaning",
            description:
              "Maintain a professional appearance in your office with our specialized commercial carpet cleaning solutions.",
            img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop",
          },
          {
            title: "Upholstery Cleaning",
            description:
              "Revitalize your furniture with our expert upholstery cleaning services, ensuring longevity and freshness.",
            img: "https://images.unsplash.com/photo-1572295445805-eed9eaf1f529?w=800&h=600&fit=crop",
          },
          {
            title: "Stain Removal",
            description:
              "Our advanced stain removal techniques effectively tackle tough stains, restoring your carpets to their original beauty.",
            img: "https://images.unsplash.com/photo-1509228627159-54b5b0c8a5a7?w=800&h=600&fit=crop",
          },
          {
            title: "Rug Cleaning",
            description:
              "Protect and preserve your area rugs with our meticulous rug cleaning services, tailored to your specific needs.",
            img: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=800&h=600&fit=crop",
          },
          {
            title: "Pet Odor Elimination",
            description:
              "Eliminate pet odors and maintain a pleasant atmosphere with our specialized pet odor elimination treatments.",
            img: "https://images.unsplash.com/photo-1581838992986-0d6f4f8717a6?w=800&h=600&fit=crop",
          },
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-10 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover rounded-xl mb-6" />
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;