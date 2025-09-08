'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Cloud, Palette, Zap, Shield } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      icon: Code,
      title: 'AI/ML Engineering',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'OpenCV', level: 75 },
      ]
    },
    {
      icon: Database,
      title: 'LLM & NLP',
      skills: [
        { name: 'OpenAI API', level: 90 },
        { name: 'LangChain', level: 75 },
        { name: 'Hugging Face', level: 75 },
        { name: 'RAG Systems', level: 85 },
        { name: 'Vector Databases', level: 80 },
      ]
    },
    {
      icon: Cloud,
      title: 'Blockchain & Web3',
      skills: [
        { name: 'Solidity', level: 90 },
        { name: 'Web3.js', level: 80 },
        { name: 'Ethereum', level: 95 },
        { name: 'Smart Contracts', level: 75 },
        { name: 'DeFi Protocols', level: 70 },
      ]
    },
    {
      icon: Palette,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 70 },
        { name: 'AWS/GCP', level: 80 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'MLOps', level: 65 },
      ]
    },
    {
      icon: Zap,
      title: 'Data Science & Analytics',
      skills: [
        { name: 'Pandas/NumPy', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Statistical Analysis', level: 80 },
        { name: 'Feature Engineering', level: 75 },
        { name: 'Model Evaluation', level: 80 },
      ]
    },
    {
      icon: Shield,
      title: 'Full Stack Development',
      skills: [
        { name: 'React/Next.js', level: 65 },
        { name: 'Node.js/Python', level: 75 },
        { name: 'REST APIs', level: 80 },
        { name: 'Database Design', level: 75 },
        { name: 'System Architecture', level: 80 },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="py-20 relative z-10">
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
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive toolkit of technologies and methodologies I use to build exceptional applications
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="floating-card p-6 group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 p-2 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors duration-300">
                  <category.icon className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs text-neon-blue font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-100 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          ease: "easeOut"
                        }}
                        className="h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Jupyter', 'Streamlit', 'Gradio', 'FastAPI', 'Flask',
              'Pinecone', 'Weaviate', 'Chroma', 'Milvus', 'Qdrant',
              'Chainlink', 'IPFS', 'MetaMask', 'Truffle', 'Hardhat',
              'AgentGPT', 'AutoGPT', 'CrewAI', 'LlamaIndex', 'Haystack'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8 + (index * 0.05), duration: 0.3 }}
                className="px-4 py-2 bg-dark-200/50 rounded-full border border-white/10 hover:border-neon-blue/50 transition-all duration-300 text-sm text-gray-300 hover:text-neon-blue"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Skills
