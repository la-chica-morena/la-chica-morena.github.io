import { useEffect, useRef, useState } from 'react'
import {
  AmbientLight,
  BoxGeometry,
  Clock,
  DirectionalLight,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene as ThreeScene,
  SRGBColorSpace,
  TorusGeometry,
  WebGLRenderer,
} from 'three'

import { profile } from '../data/profile'
import { makeCardTexture, makeStarGeometry, supportsWebGL } from '../lib/scene'

const CARD_ACCENTS = ['#f20a3f', '#00a6a6', '#f4bf2a', '#ffffff']

export default function Scene() {
  const mountRef = useRef(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount || !supportsWebGL()) {
      setFallback(true)
      return
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new ThreeScene()
    const camera = new PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 0.4, 10)

    const renderer = new WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.outputColorSpace = SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const rig = new Group()
    scene.add(rig)

    const ambient = new AmbientLight(0xffffff, 1.6)
    const key = new DirectionalLight(0xffffff, 2.4)
    key.position.set(4, 5, 5)
    scene.add(ambient, key)

    // Metric cards, arranged on a ring the rig rotates as you scroll.
    const cards = profile.metrics.map((metric, index) => {
      const texture = makeCardTexture(metric.value, metric.label, CARD_ACCENTS[index % CARD_ACCENTS.length])
      const material = new MeshBasicMaterial({ map: texture, transparent: true, side: DoubleSide })
      const mesh = new Mesh(new PlaneGeometry(2.5, 1.46), material)
      const angle = (index / profile.metrics.length) * Math.PI * 2
      mesh.position.set(Math.cos(angle) * 4.2, Math.sin(angle * 1.2) * 1.45, Math.sin(angle) * 1.6 - 1.1)
      mesh.rotation.set(0.12 * Math.sin(angle), -angle * 0.22, 0.08 * Math.cos(angle))
      rig.add(mesh)
      return mesh
    })

    const inkMaterial = new MeshStandardMaterial({ color: '#160008', roughness: 0.38, metalness: 0.2 })
    const accentMaterial = new MeshStandardMaterial({ color: '#f20a3f', roughness: 0.26, metalness: 0.34 })
    const tealMaterial = new MeshStandardMaterial({ color: '#00a6a6', roughness: 0.45, metalness: 0.18 })

    const blocks = new Group()
    for (let i = 0; i < 22; i += 1) {
      const geometry = new BoxGeometry(0.12 + (i % 4) * 0.08, 0.12 + (i % 5) * 0.1, 0.12)
      const material = i % 3 === 0 ? accentMaterial : i % 3 === 1 ? tealMaterial : inkMaterial
      const mesh = new Mesh(geometry, material)
      mesh.position.set((i % 6) * 0.42 - 1.15, Math.floor(i / 6) * 0.36 - 0.6, 0)
      mesh.rotation.z = (i % 2) * 0.2
      blocks.add(mesh)
    }
    blocks.position.set(0.3, -0.25, -0.4)
    blocks.rotation.set(-0.3, 0.35, 0.12)
    rig.add(blocks)

    const starGeometry = makeStarGeometry()
    const starMaterial = new MeshBasicMaterial({ color: '#f4bf2a', side: DoubleSide })
    const stars = new Group()
    for (let i = 0; i < 16; i += 1) {
      const mesh = new Mesh(starGeometry, starMaterial)
      const angle = (i / 16) * Math.PI * 2
      mesh.position.set(Math.cos(angle) * 5.4, Math.sin(angle) * 2.6, Math.sin(angle * 2) * 1.5)
      mesh.scale.setScalar(0.24 + (i % 4) * 0.06)
      stars.add(mesh)
    }
    rig.add(stars)

    const rings = new Group()
    const ringMaterial = new MeshBasicMaterial({
      color: '#160008',
      transparent: true,
      opacity: 0.18,
      side: DoubleSide,
    })
    for (let i = 0; i < 4; i += 1) {
      const mesh = new Mesh(new TorusGeometry(2.5 + i * 0.62, 0.006, 8, 120), ringMaterial)
      mesh.rotation.set(1.3, 0.25 + i * 0.2, i * 0.18)
      rings.add(mesh)
    }
    rig.add(rings)

    const pointer = { x: 0, y: 0 }
    const scrollProgress = { value: 0 }
    const layout = {
      x: window.innerWidth > 900 ? 1.9 : 1.05,
      scale: window.innerWidth > 900 ? 0.88 : 0.62,
    }
    rig.scale.setScalar(layout.scale)

    const handlePointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2
    }

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.value = max > 0 ? window.scrollY / max : 0
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      layout.x = window.innerWidth > 900 ? 1.9 : 1.05
      layout.scale = window.innerWidth > 900 ? 0.88 : 0.62
      rig.scale.setScalar(layout.scale)
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    handleScroll()

    let frame = 0
    const clock = new Clock()

    const renderFrame = () => {
      const elapsed = clock.getElapsedTime()

      rig.rotation.y = pointer.x * 0.12 + scrollProgress.value * 0.72
      rig.rotation.x = -pointer.y * 0.08 + scrollProgress.value * 0.18
      rig.position.y = 0.4 - scrollProgress.value * 1.9
      rig.position.x = layout.x + scrollProgress.value * -0.55

      cards.forEach((card, index) => {
        card.position.y += Math.sin(elapsed * 0.55 + index) * 0.0018
        card.rotation.z = Math.sin(elapsed * 0.38 + index) * 0.04
      })

      blocks.rotation.y = elapsed * 0.18
      stars.rotation.z = elapsed * 0.08
      rings.rotation.z = elapsed * 0.04
      rings.rotation.x = 0.16 + Math.sin(elapsed * 0.2) * 0.04

      renderer.render(scene, camera)

      // A single frame is still drawn for reduced-motion users; only the loop stops.
      if (!reducedMotion) frame = window.requestAnimationFrame(renderFrame)
    }

    renderFrame()

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      mount.removeChild(renderer.domElement)
      scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.geometry.dispose()
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach((material) => material.dispose())
        }
      })
      renderer.dispose()
    }
  }, [])

  return (
    <div className="scene-shell" aria-hidden="true">
      <div ref={mountRef} className="scene-shell__mount" />
      {fallback ? <div className="scene-shell__fallback" /> : null}
    </div>
  )
}
