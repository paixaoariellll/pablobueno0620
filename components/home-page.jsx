"use client";

import Features02Page from "@/components/features-02/features-02";
import ProjectGallery from "@/components/features-06/features-06";
import Hero07 from "@/components/hero-07/hero-07";
import Diferenciais from "@/components/stats-01/stats-01";
import Timeline from "@/components/timeline-01/timeline-01";
import WhoIs from "@/components/whoIs";
import { motion } from "motion/react";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className='flex flex-1 flex-col pt-0 mt-2'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div variants={itemVariants}>
        <Hero07 />
      </motion.div>
      <motion.div variants={itemVariants}>
        <WhoIs />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Timeline />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Diferenciais />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Features02Page />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ProjectGallery />
      </motion.div>
    </motion.div>
  );
}
