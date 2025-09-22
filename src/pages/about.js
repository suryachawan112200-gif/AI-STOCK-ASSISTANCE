import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen font-['Montserrat',sans-serif] relative overflow-hidden bg-gradient-to-br from-[#f7f9fb] via-[#e8e9ff] to-[#d1e9ff]">
      {/* Subtle Grid SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7f5af0" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="1440" height="320" fill="url(#grid)"/>
        </svg>
      </div>

      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#232946] mb-8 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About <span className="bg-gradient-to-r from-[#7f5af0] to-[#00D4FF] bg-clip-text text-transparent">AI Stock Advisor</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-[#54545c] mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering retail traders with cutting-edge AI-driven insights for smarter stock market decisions.
        </motion.p>

        {/* Mission Section */}
        <motion.div
          className="mb-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#7f5af0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <h3 className="text-2xl font-bold text-[#232946]">Our Mission</h3>
          </div>
          <p className="text-[#54545c] text-lg leading-relaxed">
            To democratize stock market analysis by providing retail traders with AI-powered tools that deliver clear, compliant, and actionable insights without the complexity of traditional advisory services.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="mb-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-[#7f5af0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            <h3 className="text-2xl font-bold text-[#232946]">Our Vision</h3>
          </div>
          <p className="text-[#54545c] text-lg leading-relaxed">
            To revolutionize trading in India by offering a seamless, intelligent platform that empowers every trader to navigate the stock market with confidence and precision.
          </p>
        </motion.div>

        {/* Key Features Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-[#232946] mb-8">Why Choose AI Stock Advisor?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <svg className="w-8 h-8 text-[#7f5af0] mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 012-2h2a2 2 0 012 2v10"></path>
              </svg>
              <h4 className="text-xl font-semibold text-[#232946] mb-2">AI-Powered Insights</h4>
              <p className="text-[#54545c]">Analyze trading screenshots with advanced algorithms to identify probabilistic price ranges and risk zones.</p>
            </motion.div>
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <svg className="w-8 h-8 text-[#7f5af0] mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h4 className="text-xl font-semibold text-[#232946] mb-2">SEBI Compliance</h4>
              <p className="text-[#54545c]">Designed to align with SEBI regulations, ensuring safe and reliable guidance for retail traders.</p>
            </motion.div>
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <svg className="w-8 h-8 text-[#7f5af0] mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <h4 className="text-xl font-semibold text-[#232946] mb-2">Premium Support</h4>
              <p className="text-[#54545c]">Access priority support and exclusive features with our premium plans for a VIP experience.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button
            className="bg-gradient-to-r from-[#7f5af0] to-[#00D4FF] text-white font-bold py-4 px-10 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = "/subscribe"}
          >
            Join AI Stock Advisor Today
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}