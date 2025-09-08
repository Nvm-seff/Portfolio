'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = { w: window.innerWidth, h: window.innerHeight }
      canvas.width = rect.w * dpr
      canvas.height = rect.h * dpr
      canvas.style.width = rect.w + 'px'
      canvas.style.height = rect.h + 'px'
      ctx.scale(dpr, dpr)
    }
    setSize()

    // Revert to original particles + connections
    const stars: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let scrollOffset = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      stars.forEach((p) => {
        p.x += p.vx + (mouseX - canvas.width / 2) * 0.00005
        p.y += p.vy + (mouseY - canvas.height / 2) * 0.00005

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity})`
        ctx.fill()
      })

      // Connections
      stars.forEach((p1, i) => {
        stars.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      // Parallax gradient blobs
      // Soft vignette
      const gradient = ctx.createRadialGradient(
        mouseX * 0.8,
        mouseY * 0.8 + scrollOffset * 0.2,
        50,
        mouseX * 0.8,
        mouseY * 0.8 + scrollOffset * 0.2,
        Math.max(canvas.width, canvas.height) * 0.7
      )
      gradient.addColorStop(0, 'rgba(0,245,255,0.08)')
      gradient.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = { w: window.innerWidth, h: window.innerHeight }
      canvas.width = rect.w * dpr
      canvas.height = rect.h * dpr
      canvas.style.width = rect.w + 'px'
      canvas.style.height = rect.h + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleScroll = () => {
      scrollOffset = window.scrollY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      {/* Smooth gradient blobs for refinement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at center, rgba(168,85,247,0.25), rgba(0,0,0,0))' }}
        />
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-[45rem] h-[45rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle at center, rgba(0,245,255,0.2), rgba(0,0,0,0))' }}
        />
      </div>
    </div>
  )
}

export default AnimatedBackground
