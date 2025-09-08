'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    const speed = 0.2

    const move = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const loop = () => {
      x += (tx - x) * speed
      y += (ty - y) * speed
      wrap.style.transform = `translate3d(${x}px, ${y}px, 0)`
      requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', move)
    loop()
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      <div ref={wrapRef} className="cursor-wrap">
        <div className="cursor-ring" />
        <div className="cursor-dot" />
      </div>
    </div>
  )
}


