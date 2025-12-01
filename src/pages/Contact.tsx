import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5CB85C]" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5CB85C]" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
          <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5CB85C]" rows={5} placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-gradient-to-r from-[#1B75BB] to-[#5CB85C] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;