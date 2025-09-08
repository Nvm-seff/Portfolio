'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Github, Code, ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [expanded, setExpanded] = useState(false)
  const pageSize = expanded ? 1000 : 6

  const projects = [
    {
      id: 1,
      title: 'ScholarChain (Final Year Project)',
      description: 'Decentralized Web3.0 app on Ethereum enabling interest-free student loans. Integrated LLM for risk assessment, personalized repayment plans, and chatbot support, reducing manual evaluation time by ~60%.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml', 'blockchain'],
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'LLM'],
      liveUrl: 'https://github.com/Nvm-seff/ScholarChain',
      githubUrl: 'https://github.com/Nvm-seff/ScholarChain',
      featured: true,
      stats: {
        contracts: '100+',
        evaluation: '60% faster',
        users: 'Pilot-tested'
      }
    },
    {
      id: 2,
      title: 'AI-Powered Ideal Call Generator',
      description: 'Automated healthcare call generator using OpenAI’s Whisper for transcription and Nari-Dia TTS for speech synthesis. Features include dynamic voice cloning with gender-based voice control, boosting realism and engagement by 40%.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml'],
      technologies: ['Python', 'OpenAI Whisper', 'TTS (Nari-Dia)', 'FastAPI'],
      liveUrl: 'https://github.com/Nvm-seff/AI-Powered-Ideal-Call-Generator',
      githubUrl: 'https://github.com/Nvm-seff/AI-Powered-Ideal-Call-Generator',
      featured: true,
      stats: {
        calls: 'Automated',
        realism: '+40%',
        latency: '<300ms'
      }
    },
    {
      id: 3,
      title: 'Glaucoma Detection Model',
      description: 'Deep learning model for glaucoma detection from retinal images using TensorFlow/Keras. Applied data augmentation to improve accuracy and generalization.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml'],
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      liveUrl: 'https://github.com/Nvm-seff/Glaucoma-Detection',
      githubUrl: 'https://github.com/Nvm-seff/Glaucoma-Detection',
      featured: false,
      stats: {
        accuracy: '90%+',
        images: '10K+',
        augmentation: 'applied'
      }
    },
    {
      id: 4,
      title: 'University Timetable Generator',
      description: 'AI-based timetable generator in Python using genetic algorithms. Optimizes scheduling efficiency by minimizing conflicts and reducing generation time.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml'],
      technologies: ['Python', 'Genetic Algorithms', 'Flask'],
      liveUrl: 'https://github.com/Nvm-seff/University-Timetable-Generator',
      githubUrl: 'https://github.com/Nvm-seff/University-Timetable-Generator',
      featured: false,
      stats: {
        schedules: '100+',
        conflicts: 'minimized',
        efficiency: 'optimized'
      }
    },
    {
      id: 5,
      title: 'English to Urdu Machine Translation',
      description: 'LSTM-based sequence-to-sequence model for English-to-Urdu translation with encoder-decoder architecture. Evaluated using BLEU scores and visualized with Grad-CAM.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml'],
      technologies: ['Python', 'TensorFlow', 'Keras', 'LSTM'],
      liveUrl: 'https://github.com/Nvm-seff/Eng-Urdu-Translation',
      githubUrl: 'https://github.com/Nvm-seff/Eng-Urdu-Translation',
      featured: false,
      stats: {
        bleu: 'evaluated',
        corpus: 'parallel dataset',
        architecture: 'seq2seq'
      }
    },
    {
      id: 6,
      title: 'Face Mask Detection',
      description: 'Real-time face mask detection using transfer learning (MobileNetV2, ResNet50, EfficientNet). Deployed with Flask and OpenCV.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml'],
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
      liveUrl: 'https://github.com/Nvm-seff/Face-Mask-Detection',
      githubUrl: 'https://github.com/Nvm-seff/Face-Mask-Detection',
      featured: false,
      stats: {
        models: '3 optimized',
        accuracy: '95%+',
        realtime: 'enabled'
      }
    },
    {
      id: 7,
      title: 'Diabetes Prediction',
      description: 'Feedforward neural network trained on Pima Indians dataset. Applied SHAP and permutation importance for explainability. Hyperparameters tuned via grid search.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml'],
      technologies: ['Python', 'TensorFlow', 'Keras', 'SHAP'],
      liveUrl: 'https://github.com/Nvm-seff/Diabetes-Prediction',
      githubUrl: 'https://github.com/Nvm-seff/Diabetes-Prediction',
      featured: false,
      stats: {
        dataset: 'Pima Indians',
        accuracy: 'optimized',
        explainability: 'applied'
      }
    },
    {
      id: 8,
      title: 'Facial Recognition Attendance System',
      description: 'Siamese network-based face recognition with triplet & contrastive loss. Web-based Flask app for automated attendance with scalable embeddings.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml'],
      technologies: ['Python', 'TensorFlow', 'Keras', 'Flask', 'OpenCV'],
      liveUrl: 'https://github.com/Nvm-seff/Facial-Recognition-Attendance',
      githubUrl: 'https://github.com/Nvm-seff/Facial-Recognition-Attendance',
      featured: false,
      stats: {
        faces: 'scalable',
        accuracy: 'high',
        latency: '<200ms'
      }
    },
    {
      id: 9,
      title: 'Dual-Input CNN for COVID-19 Detection',
      description: 'Dual-branch CNN fusing X-ray and CT scans for COVID-19 diagnosis. Improved accuracy via multimodal feature fusion.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml'],
      technologies: ['Python', 'TensorFlow', 'Keras', 'CNN'],
      liveUrl: 'https://github.com/Nvm-seff/COVID19-DualInputCNN',
      githubUrl: 'https://github.com/Nvm-seff/COVID19-DualInputCNN',
      featured: false,
      stats: {
        modalities: 'X-ray & CT',
        accuracy: 'boosted',
        performance: 'optimized'
      }
    },
    {
      id: 10,
      title: 'Vehicle Counting & Speed Estimation',
      description: 'Computer vision system using YOLOv8 & Faster R-CNN to detect, track, and count vehicles with real-time speed estimation.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml'],
      technologies: ['Python', 'YOLOv8', 'Faster R-CNN', 'OpenCV'],
      liveUrl: 'https://github.com/Nvm-seff/Vehicle-Counting-Speed',
      githubUrl: 'https://github.com/Nvm-seff/Vehicle-Counting-Speed',
      featured: true,
      stats: {
        vehicles: 'thousands',
        speed: 'accurate',
        realTime: 'yes'
      }
    },
    {
      id: 11,
      title: 'DBD-GPT (In Progress)',
      description: 'An n8n-powered agentic RAG chatbot designed to scrape and query the Dead by Daylight wiki via API. Planned to evolve into a full-stack Next.js + FastAPI app hosted on Vercel/GitHub Pages.',
      image: '/api/placeholder/600/400',
      category: ['ai-ml', 'fullstack'],
      technologies: ['Next.js', 'FastAPI', 'n8n', 'RAG', 'OpenAI API'],
      liveUrl: '',
      githubUrl: '',
      featured: false,
      stats: {
        status: 'Work in Progress',
        goal: 'Full-stack deployment',
        domain: 'DBD Wiki Knowledge'
      }
    }
  ];

  const includesCategory = (project: any, category: string) => Array.isArray(project.category)
    ? project.category.includes(category)
    : project.category === category

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai-ml', label: 'AI/ML', count: projects.filter(p => includesCategory(p, 'ai-ml')).length },
    { id: 'blockchain', label: 'Blockchain', count: projects.filter(p => includesCategory(p, 'blockchain')).length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => includesCategory(p, 'fullstack')).length }
  ]

  const filteredProjects = useMemo(() => (
    activeFilter === 'all' ? projects : projects.filter(project => includesCategory(project, activeFilter))
  ), [activeFilter, projects])

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize))
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return filteredProjects.slice(start, start + pageSize)
  }, [filteredProjects, currentPage])

  useEffect(() => {
    // reset to first page when filter changes
    setCurrentPage(1)
  }, [activeFilter])

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.6 },
    },
  }

  const handlePrev = () => {
    setCurrentPage((p) => Math.max(1, p - 1))
    const el = document.getElementById('projects')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleNext = () => {
    setCurrentPage((p) => Math.min(totalPages, p + 1))
    const el = document.getElementById('projects')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev)
    const el = document.getElementById('projects')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="projects" className="py-20 relative z-10">
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
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my latest work, demonstrating technical expertise and creative problem-solving
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-neon-blue text-dark-300 shadow-lg shadow-neon-blue/25'
                  : 'bg-dark-200/50 text-gray-300 hover:bg-dark-200 hover:text-white border border-white/10'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 bg-white/10 rounded-full text-xs">
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch"
        >
          {paginatedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="floating-card group overflow-hidden flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-dark-200 to-dark-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-neon-blue/30" />
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-neon-blue text-dark-300 text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
                
                {/* Removed project stats overlay for cleaner card */}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-100 text-xs text-gray-400 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-white/20 text-white rounded-lg hover:border-neon-purple hover:text-neon-purple transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expand / Collapse & Pagination Controls */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggleExpand}
            className="px-5 py-2 rounded-lg border border-white/15 text-gray-300 hover:border-neon-blue/60"
          >
            {expanded ? 'View Less' : 'View More'}
          </motion.button>

          {!expanded && totalPages > 1 && (
            <div className="flex items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: currentPage > 1 ? 1.05 : 1 }}
                whileTap={{ scale: currentPage > 1 ? 0.95 : 1 }}
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`inline-flex items-center px-4 py-2 rounded-lg border ${currentPage === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:border-neon-blue/60'} border-white/15 text-gray-300`}
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Prev
              </motion.button>
              <span className="text-sm text-gray-400 font-mono">
                Page {currentPage} of {totalPages}
              </span>
              <motion.button
                whileHover={{ scale: currentPage < totalPages ? 1.05 : 1 }}
                whileTap={{ scale: currentPage < totalPages ? 0.95 : 1 }}
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`inline-flex items-center px-4 py-2 rounded-lg border ${currentPage === totalPages ? 'opacity-40 cursor-not-allowed' : 'hover:border-neon-blue/60'} border-white/15 text-gray-300`}
              >
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          )}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-6"
        >
          <motion.a
            href="https://github.com/Nvm-seff"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button text-sm px-6 py-3 inline-flex items-center"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
