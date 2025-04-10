"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Mic, Play } from "lucide-react";
import { Button } from "@heroui/button";

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full h-screen overflow-hidden relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg_hero_edited.png')",
          filter: isDark
            ? "brightness(0.4) saturate(1.2)"
            : "brightness(0.8) saturate(1.1)",
          backgroundSize: "cover", // Ensures the image covers the entire screen
          backgroundPosition: "center", // Center the image
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-8 text-left max-w-4xl mx-auto">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Uganda Must Laugh 2 - A comedy Special
        </motion.h1>
        <motion.h4
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-900 bg-gray-100 py-2 px-4 rounded-full text-xl mt-3 sm:text-2xl md:text-3xl font-extrabold leading-tight tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Returns 13th June - National Theatre
        </motion.h4>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="text-white/90 text-base sm:text-lg md:text-xl mt-6 max-w-2xl drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dive into laughter with live performances that keep the good vibes
          rolling. Find tour dates across the country and experience stand-up
          like never before.
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
         
            className="text-white rounded-full"
            href="https://karitickets.com/artist/home"
            size="lg"
            variant="bordered"
            target="_blank"
          >
            <Mic className="mr-2 h-5 w-5" /> Book Tickets
          </Button>
          <Button
            className="text-white rounded-full"
            href="#"
            size="lg"
            variant="bordered"
          >
            <Play className="mr-2 h-5 w-5" /> Watch Clips
          </Button>
        </motion.div>
      </div>

      {/* Glowing floating blobs */}
      <motion.div
        animate={{ opacity: 0.6 }}
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-500/30 blur-3xl"
        initial={{ opacity: 0 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        animate={{ opacity: 0.5 }}
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-orange-500/30 blur-3xl"
        initial={{ opacity: 0 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />
    </section>
  );
}
