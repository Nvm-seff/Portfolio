'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Target, Rocket, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const stats = [
    { icon: User, label: 'Years Experience', value: '1+' },
    { icon: Target, label: 'AI Models Built', value: '15+' },
    { icon: Rocket, label: 'Technologies', value: '15+' },
    { icon: Heart, label: 'Projects Done', value: '10+' },
  ]

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">About Me</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Passionate developer with a love for creating innovative digital solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Turning Ideas Into Reality
              </h3>
              
                             <p className="text-gray-300 leading-relaxed">
                 I'm an AI/ML Engineer with a passion for building intelligent systems that solve real-world problems. 
                 With expertise in machine learning, blockchain, and Web3 technologies, I create innovative solutions 
                 that push the boundaries of what's possible with artificial intelligence.
               </p>
               
               <p className="text-gray-300 leading-relaxed">
                 My journey in AI started with curiosity about how machines can learn and has evolved into a career 
                 building cutting-edge solutions. I specialize in LLMs, RAG systems, Agentic AI, smart contracts, 
                 and decentralized applications, always exploring the latest advancements in AI and blockchain.
               </p>
            </div>

            {/* Skills Preview */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Core Competencies:</h4>
                             <div className="grid grid-cols-2 gap-3">
                 {[
                   'Machine Learning',
                   'Deep Learning',
                   'Natural Language Processing',
                   'Computer Vision',
                   'Blockchain Development',
                   'Smart Contracts',
                   'LLM Integration',
                   'Agentic AI Systems'
                 ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="floating-card p-6 text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 p-3 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="floating-card p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Personal Details</h4>
                             <div className="space-y-3 text-sm text-gray-300">
                 <div className="flex justify-between">
                   <span>Location:</span>
                   <span className="text-neon-blue">Islamabad, Pakistan</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Experience:</span>
                   <span className="text-neon-blue">1+ Years</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Specialization:</span>
                   <span className="text-neon-blue">AI/ML & Blockchain</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Availability:</span>
                   <span className="text-neon-blue">Open to Opportunities</span>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
