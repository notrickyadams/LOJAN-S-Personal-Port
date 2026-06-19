import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (curRef.current) {
        curRef.current.style.left = e.clientX + 'px'
        curRef.current.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)

    let raf
    const animRing = () => {
      const { mx, my, rx, ry } = pos.current
      pos.current.rx = rx + (mx - rx) * 0.12
      pos.current.ry = ry + (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px'
        ringRef.current.style.top = pos.current.ry + 'px'
      }
      raf = requestAnimationFrame(animRing)
    }
    raf = requestAnimationFrame(animRing)

    const grow = (e) => {
      if (!e.target.closest('a,button,.proj-row,.skill-pill,.ach-cell')) return
      curRef.current && (curRef.current.style.width = '6px', curRef.current.style.height = '6px')
      if (ringRef.current) {
        ringRef.current.style.width = '52px'
        ringRef.current.style.height = '52px'
        ringRef.current.style.opacity = '0.7'
      }
    }
    const shrink = (e) => {
      if (!e.target.closest('a,button,.proj-row,.skill-pill,.ach-cell')) return
      curRef.current && (curRef.current.style.width = '12px', curRef.current.style.height = '12px')
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.opacity = '0.4'
      }
    }
    document.addEventListener('mouseover', grow)
    document.addEventListener('mouseout', shrink)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', grow)
      document.removeEventListener('mouseout', shrink)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={curRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}