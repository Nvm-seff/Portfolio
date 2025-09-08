'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code, Zap, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold breathe">
                <span className="gradient-text">Hello, I'm</span>
              </h1>
            </div>
            
            <motion.h2
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold text-white"
            >
              Saifullah Rizwan
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-400"
            >
              <Code className="w-8 h-8 text-neon-blue" />
              <span>AI/ML Engineer</span>
              <Zap className="w-8 h-8 text-neon-green" />
              <span>Blockchain Developer</span>
              <Sparkles className="w-8 h-8 text-neon-purple" />
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Building intelligent systems with AI/ML, Blockchain, and Web3 technologies. 
            Specializing in LLMs, RAG systems, Agentic AI, and decentralized applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button text-lg px-8 py-4 inline-block"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 text-white hover:border-neon-purple hover:text-neon-purple transition-all duration-300 text-lg rounded-lg inline-block"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            variants={itemVariants}
            className="pt-16"
          >
            <p className="text-gray-400 text-lg mb-6">Technologies I work with:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              {['N8N', 'TensorFlow', 'PyTorch', 'Solidity', 'Web3.js', 'OpenAI API', 'LangChain', 'Docker'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-dark-200/50 rounded-full border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate="animate"
          variants={floatingVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-neon-blue" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-10 w-2 h-2 bg-neon-blue rounded-full opacity-60"
        />
        
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-10 w-3 h-3 bg-neon-purple rounded-full opacity-60"
        />
        
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-1 h-1 bg-neon-green rounded-full"
        />
      </div>
    </section>
  )
}

export default Hero

