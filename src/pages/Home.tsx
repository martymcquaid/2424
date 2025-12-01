import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen" style={{backgroundImage: "url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&h=1080&fit=crop')"}}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Welcome to 2424 Carpet Cleaning</h1>
          <p className="text-xl mb-8">Your trusted partner for top-notch carpet cleaning services across Northern Ireland.</p>
          <div>
            <a href="/services" className="bg-gradient-to-r from-[#1B75BB] to-[#5CB85C] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 mr-4">Our Services</a>
            <a href="/contact" className="border-2 border-[#5CB85C] text-[#5CB85C] px-8 py-4 rounded-full font-semibold hover:bg-[#5CB85C] hover:text-white transition-all duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;