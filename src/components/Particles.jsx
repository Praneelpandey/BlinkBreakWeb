import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles({ count = 60 }) {
  const meshRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Generate delicate atmospheric dust motes
  const particles = useMemo(() => {
    const data = []
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 1.4 + Math.random() * 2.2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = (Math.random() - 0.5) * 4

      data.push({
        position: [x, y, z],
        speed: 0.1 + Math.random() * 0.25,
        offset: Math.random() * Math.PI * 2,
        scale: 0.006 + Math.random() * 0.012,
        resetY: -2.2,
        maxY: 2.2,
      })
    }
    return data
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime

    particles.forEach((p, i) => {
      let y = p.position[1] + p.speed * 0.003
      if (y > p.maxY) y = p.resetY
      p.position[1] = y

      const swayX = Math.sin(time * 0.2 + p.offset) * 0.1
      const swayZ = Math.cos(time * 0.15 + p.offset) * 0.08

      dummy.position.set(
        p.position[0] + swayX,
        y,
        p.position[2] + swayZ
      )

      const pulseScale = p.scale * (0.8 + Math.sin(time * 1.5 + p.offset) * 0.3)
      dummy.scale.setScalar(pulseScale)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        color="#a5f3fc"
        emissive="#00E5FF"
        emissiveIntensity={1.2}
        transparent
        opacity={0.45}
        toneMapped={false}
      />
    </instancedMesh>
  )
}
