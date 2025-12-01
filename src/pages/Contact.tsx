import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#1B75BB] to-[#5CB85C]">
        Get In Touch
      </h2>
      <form className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-10 space-y-8">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input type="text" id="name" className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5CB85C] transition-all duration-300" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5CB85C] transition-all duration-300" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea id="message" className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5CB85C] transition-all duration-300" rows={5} placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-gradient-to-r from-[#1B75BB] to-[#5CB85C] text-white px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;