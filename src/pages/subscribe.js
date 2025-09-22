import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Subscribe() {
  const router = useRouter();

  async function handleSelect(plan) {
    // Add your backend API call here to create subscription/order
    // Example: 
    
    try {
      const res = await fetch("https://your-backend-url.com/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      if (!res.ok) throw new Error("Subscription create failed");
      const data = await res.json();
      // Optionally use returned data for navigation or alerts
    } catch (err) {
      alert("Subscription creation error: " + err.message);
      return;
    }


    router.push(`/payment?plan=${plan}`);
  }

  return (
    <div className="min-h-screen font-['Montserrat',sans-serif] relative overflow-hidden bg-gradient-to-br from-[#f7f9fb] via-[#e8e9ff] to-[#d1e9ff]">
      {/* Subtle Zigzag SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="none"
            stroke="#7f5af0"
            strokeWidth="2"
            d="M0,160L48,186.7C96,213,192,267,288,250.7C384,235,480,149,576,138.7C672,128,768,192,864,213.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96"
          />
        </svg>
      </div>

      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16 text-center relative z-10">
        {/* Heading with Icon */}
        <motion.div
          className="flex items-center justify-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg
            className="w-6 h-6 text-[#7f5af0] mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#232946] tracking-tight">
            Choose Your{" "}
            <motion.span
              className="bg-gradient-to-r from-[#7f5af0] to-[#00D4FF] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Subscription Plan
            </motion.span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <PricingCard
              highlight
              plan="Premium"
              price="₹4999/month"
              features={[
                "1000 AI Analysts",
                "Unlimited queries",
                "Premium Support (24/7)",
                "Early access to new tools",
              ]}
              onClick={() => handleSelect("premium")}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <PricingCard
              plan="Standard"
              price="₹999/month"
              features={["150 AI Analysts", "Unlimited queries", "Priority Support"]}
              onClick={() => handleSelect("standard")}
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}