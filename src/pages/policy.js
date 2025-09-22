import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Policy() {
  return (
    <div className="min-h-screen font-['Montserrat',sans-serif] relative overflow-hidden bg-gradient-to-br from-[#f7f9fb] via-[#e8e9ff] to-[#d1e9ff]">
      {/* Subtle Diagonal Lines SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <defs>
            <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40 L40 0" fill="none" stroke="#7f5af0" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="1440" height="320" fill="url(#diagonal)"/>
        </svg>
      </div>

      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#232946] mb-8 text-center tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-[#7f5af0] to-[#00D4FF] bg-clip-text text-transparent">Privacy Policy</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-[#54545c] mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At AI Stock Advisor, we prioritize your privacy and ensure your data is handled securely in compliance with applicable regulations.
        </motion.p>

        {/* Data Collection Section */}
        <motion.div
          className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-[#7f5af0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
            </svg>
            <h3 className="text-2xl font-bold text-[#232946]">Data Collection</h3>
          </div>
          <p className="text-[#54545c] text-base leading-relaxed">
            We collect only the data necessary to provide our AI-powered stock market insights, such as trading position screenshots you upload. No personal financial details or sensitive information is stored without your consent.
          </p>
        </motion.div>

        {/* Data Use Section */}
        <motion.div
          className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-[#7f5af0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-2xl font-bold text-[#232946]">How We Use Your Data</h3>
          </div>
          <p className="text-[#54545c] text-base leading-relaxed">
            Your data is used solely to generate probabilistic price ranges and risk zone analyses. Outputs are informational, not financial advice, and comply with SEBI regulations. We do not share your data with third parties without explicit permission.
          </p>
        </motion.div>

        {/* Data Security Section */}
        <motion.div
          className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-[#7f5af0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3zm-9-3h18m-9 12c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
            <h3 className="text-2xl font-bold text-[#232946]">Data Security</h3>
          </div>
          <p className="text-[#54545c] text-base leading-relaxed">
            We employ industry-standard encryption and security protocols to protect your data. All uploaded screenshots and user information are stored securely and accessible only to authorized systems.
          </p>
        </motion.div>

        {/* User Rights Section */}
        <motion.div
          className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-[#7f5af0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2"></path>
            </svg>
            <h3 className="text-2xl font-bold text-[#232946]">Your Rights</h3>
          </div>
          <p className="text-[#54545c] text-base leading-relaxed">
            You have the right to access, modify, or delete your data at any time. Contact our support team to exercise these rights or learn more about our data practices.
          </p>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-[#54545c] text-lg mb-4">
            Have questions about our privacy practices?{" "}
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#7f5af0] to-[#00D4FF] bg-clip-text text-transparent font-semibold hover:underline"
            >
              Contact Us
            </a>
          </p>
          <button
            className="bg-gradient-to-r from-[#7f5af0] to-[#00D4FF] text-white font-bold py-4 px-10 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = "/subscribe"}
          >
            Join AI Stock Advisor
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}