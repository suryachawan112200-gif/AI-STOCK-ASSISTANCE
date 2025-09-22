import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import UploadBox from "../components/UploadBox";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen font-sans relative overflow-hidden bg-gradient-to-br from-[#f7f9fb] via-[#e8e9ff] to-[#d1e9ff]">
      {/* Subtle SVG Background Wave */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#7f5af0"
            fillOpacity="0.3"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-[#232946] mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Replace Human Advisors with <br />
          <span className="bg-gradient-to-r from-[#7f5af0] to-[#00D4FF] bg-clip-text text-transparent">
            AI Stock Advisor
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-[#54545c] mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          India’s 1st AI-Powered Stock Market Assistant. Clean, premium, VIP.
        </motion.p>

        {/* Analyst Box (UploadBox) */}
        <motion.div
          className="mb-16 shadow-xl rounded-2xl p-6 bg-white/80 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <UploadBox />
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="transform-gpu"
          >
            <PricingCard
              plan="Premium"
              price="₹4999/month"
              features={[
                "1000 AI Analysts",
                "Unlimited queries",
                "Premium Support (24/7)",
                "Early access to new tools",
              ]}
              highlight
              onClick={() => router.push("/subscribe")}
            />
          </motion.div>
          <motion.div
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="transform-gpu"
          >
            <PricingCard
              plan="Standard"
              price="₹999/month"
              features={["150 AI Analysts", "Unlimited queries", "Priority Support"]}
              onClick={() => router.push("/subscribe")}
            />
          </motion.div>
        </motion.div>

        {/* Membership Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            className="bg-gradient-to-r from-[#7f5af0] to-[#00D4FF] text-white font-bold py-4 px-10 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() => router.push("/subscribe")}
          >
            Explore Memberships
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}