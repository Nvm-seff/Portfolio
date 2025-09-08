'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, Calendar } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string; visible: boolean }>({ type: 'success', message: '', visible: false })

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message, visible: true })
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS configuration (you'll need to set up your EmailJS account)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (
        typeof serviceId === 'string' && serviceId.length > 0 && !serviceId.startsWith('your_') &&
        typeof templateId === 'string' && templateId.length > 0 && !templateId.startsWith('your_') &&
        typeof publicKey === 'string' && publicKey.length > 0 && !publicKey.startsWith('your_')
      ) {
        // Send email using EmailJS
        await emailjs.send(serviceId as string, templateId as string, {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        }, publicKey as string)
      } else {
        // Fallback: open user's email client with prefilled content
        const mailto = new URL(`mailto:saifullah.rizw@gmail.com`)
        mailto.searchParams.set('subject', `[Portfolio] ${formData.subject}`)
        const body = `Hi Saifullah,%0D%0A%0D%0A${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`
        mailto.searchParams.set('body', body)
        window.location.href = mailto.toString()
      }
      
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Toast success
      showToast('success', "Message sent! I'll get back to you soon.")
    } catch (error) {
      console.error('Error sending message:', error)
      setIsSubmitting(false)
      showToast('error', 'There was an error sending your message. Please try again.')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saifullah.rizw@gmail.com',
      href: 'mailto:saifullah.rizw@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+92) 346-3899036',
      href: 'tel:+923463899036'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote / Islamabad, Pakistan',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Nvm-seff',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nvm-saifullah',
      color: 'hover:text-blue-400'
    },
    {
      icon: Calendar,
      label: 'Book Meeting',
      href: 'https://calendly.com/saifullah-rizw',
      color: 'hover:text-green-400'
    }
  ]

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

  return (
    <section id="contact" className="py-20 relative z-10">
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
            <span className="gradient-text">Get In Touch</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Ready to start a project or just want to chat? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="floating-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
                             <div className="space-y-4">
                 <motion.button
                   type="submit"
                   disabled={isSubmitting}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full cyber-button text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? (
                     <div className="flex items-center justify-center space-x-2">
                       <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                       <span>Sending...</span>
                     </div>
                   ) : (
                     <div className="flex items-center justify-center space-x-2">
                       <Send className="w-5 h-5" />
                       <span>Send Message</span>
                     </div>
                   )}
                 </motion.button>
                 
                 <div className="text-center text-gray-400 text-sm">
                   <span>or</span>
                 </div>
                 
                 <motion.a
                   href={process.env.NEXT_PUBLIC_CALENDLY_URL}
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white rounded-lg hover:from-neon-purple/80 hover:to-neon-pink/80 transition-all duration-300 text-lg font-medium"
                 >
                   <Calendar className="w-5 h-5" />
                   <span>Schedule a Meeting</span>
                 </motion.a>
               </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 floating-card group hover:border-neon-blue/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 p-3 bg-neon-blue/10 rounded-lg group-hover:bg-neon-blue/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center space-x-3 p-4 floating-card group hover:border-neon-blue/50 transition-all duration-300 ${social.color}`}
                  >
                    <div className="w-10 h-10 p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                      <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-white font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="floating-card p-6 text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green font-medium">Available for new projects</span>
              </div>
              <p className="text-gray-400 text-sm">
                I'm currently accepting new freelance opportunities and interesting project collaborations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          className={`fixed bottom-6 right-6 z-[9999] px-5 py-4 rounded-lg shadow-lg border ${toast.type === 'success' ? 'bg-dark-200/90 border-green-500/40 text-green-300' : 'bg-dark-200/90 border-red-500/40 text-red-300'}`}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-2 h-2 rounded-full ${toast.type === 'success' ? 'bg-green-400' : 'bg-red-400'}`}></div>
            <span className="font-medium">{toast.message}</span>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Contact
