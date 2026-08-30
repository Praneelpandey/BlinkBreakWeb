import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Environment, ContactShadows, useVideoTexture } from '@react-three/drei'
import * as THREE from 'three'
import Particles from './Particles'

/* ─── Screen Video with Drei ─── */
function VideoScreenMaterial({ screenW, screenH }) {
  const texture = useVideoTexture('/action-loop.mp4', {
    muted: true,
    loop: true,
    start: true,
    playsInline: true,
    crossOrigin: 'anonymous',
  })

  return (
    <mesh position={[0, 0, 0.092]}>
      <planeGeometry args={[screenW, screenH]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  )
}

function FallbackScreenMaterial({ screenW, screenH }) {
  return (
    <mesh position={[0, 0, 0.092]}>
      <planeGeometry args={[screenW, screenH]} />
      <meshStandardMaterial color="#050810" roughness={0.1} />
    </mesh>
  )
}

/* ─── Apple-Grade iPhone 15 Pro Titanium Model ─── */
function IPhoneModel() {
  const groupRef = useRef()

  // High-precision smooth cursor parallax physics
  useFrame((state) => {
    if (!groupRef.current) return
    const { pointer } = state
    const t = state.clock.elapsedTime

    // Target rotations based on mouse pointer
    const targetRotX = 0.12 + (-pointer.y * 0.2)
    const targetRotY = -0.35 + (pointer.x * 0.3)
    const targetRotZ = 0.04 + (-pointer.x * 0.08)

    // Smooth lerp for buttery organic 60fps tracking
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06)
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.06)

    // Subtle natural breathing float
    groupRef.current.position.y = Math.sin(t * 1.0) * 0.04
  })

  // iPhone 15 Pro proportions
  const bodyW = 1.6
  const bodyH = 3.3
  const bodyD = 0.18
  const bezelInset = 0.055
  const screenW = bodyW - bezelInset * 2
  const screenH = bodyH - bezelInset * 2

  return (
    <group ref={groupRef} rotation={[0.12, -0.35, 0.04]} position={[0, 0.1, 0]}>
      {/* Outer Titanium Chassis (Aerospace-grade Space Black / Natural Titanium) */}
      <RoundedBox
        args={[bodyW, bodyH, bodyD]}
        radius={0.17}
        smoothness={10}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#222328"
          metalness={0.96}
          roughness={0.22}
          clearcoat={0.35}
          clearcoatRoughness={0.12}
          envMapIntensity={1.5}
        />
      </RoundedBox>

      {/* Screen Ceramic Shield Bezel (Ultra-slim OLED margin) */}
      <RoundedBox
        args={[screenW + 0.015, screenH + 0.015, 0.008]}
        radius={0.14}
        smoothness={6}
        position={[0, 0, bodyD / 2 - 0.004]}
      >
        <meshStandardMaterial color="#060608" metalness={0.6} roughness={0.25} />
      </RoundedBox>

      {/* OLED Screen Content — Active High-Def Gameplay Video */}
      <Suspense fallback={<FallbackScreenMaterial screenW={screenW} screenH={screenH} />}>
        <VideoScreenMaterial screenW={screenW} screenH={screenH} />
      </Suspense>

      {/* Subtle Specular Screen Glass Reflection */}
      <mesh position={[0, 0, bodyD / 2 + 0.003]}>
        <planeGeometry args={[screenW, screenH]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.06}
          color="#ffffff"
          metalness={0.1}
          roughness={0.02}
          clearcoat={1}
          clearcoatRoughness={0.01}
        />
      </mesh>

      {/* Dynamic Island Pill */}
      <mesh position={[0, screenH / 2 - 0.22, bodyD / 2 + 0.005]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.065, 0.24, 8, 16]} />
        <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* TrueDepth Camera Sapphire Glint */}
      <mesh position={[0.08, screenH / 2 - 0.22, bodyD / 2 + 0.006]}>
        <circleGeometry args={[0.018, 16]} />
        <meshBasicMaterial color="#1a2542" toneMapped={false} />
      </mesh>

      {/* Rear Camera Island Plate */}
      <RoundedBox
        args={[0.58, 0.58, 0.055]}
        radius={0.11}
        smoothness={6}
        position={[-0.36, bodyH / 2 - 0.42, -bodyD / 2 - 0.025]}
      >
        <meshPhysicalMaterial
          color="#1e1f24"
          metalness={0.96}
          roughness={0.18}
          clearcoat={0.7}
        />
      </RoundedBox>

      {/* Triple Sapphire Camera Array */}
      <mesh position={[-0.46, bodyH / 2 - 0.32, -bodyD / 2 - 0.055]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.085, 0.085, 0.02, 32]} />
        <meshPhysicalMaterial color="#0c0d12" metalness={0.95} roughness={0.05} clearcoat={1} />
      </mesh>
      <mesh position={[-0.26, bodyH / 2 - 0.32, -bodyD / 2 - 0.055]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.085, 0.085, 0.02, 32]} />
        <meshPhysicalMaterial color="#0c0d12" metalness={0.95} roughness={0.05} clearcoat={1} />
      </mesh>
      <mesh position={[-0.36, bodyH / 2 - 0.52, -bodyD / 2 - 0.055]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.085, 0.085, 0.02, 32]} />
        <meshPhysicalMaterial color="#0c0d12" metalness={0.95} roughness={0.05} clearcoat={1} />
      </mesh>

      {/* Action Button */}
      <mesh position={[-bodyW / 2 - 0.012, 0.9, 0]}>
        <boxGeometry args={[0.018, 0.1, 0.05]} />
        <meshStandardMaterial color="#2d2e33" metalness={0.95} roughness={0.25} />
      </mesh>

      {/* Volume Up */}
      <mesh position={[-bodyW / 2 - 0.012, 0.5, 0]}>
        <boxGeometry args={[0.018, 0.2, 0.05]} />
        <meshStandardMaterial color="#2d2e33" metalness={0.95} roughness={0.25} />
      </mesh>

      {/* Volume Down */}
      <mesh position={[-bodyW / 2 - 0.012, 0.15, 0]}>
        <boxGeometry args={[0.018, 0.2, 0.05]} />
        <meshStandardMaterial color="#2d2e33" metalness={0.95} roughness={0.25} />
      </mesh>

      {/* Power / Siri Button */}
      <mesh position={[bodyW / 2 + 0.012, 0.3, 0]}>
        <boxGeometry args={[0.018, 0.35, 0.05]} />
        <meshStandardMaterial color="#2d2e33" metalness={0.95} roughness={0.25} />
      </mesh>

      {/* Subtle Screen Ambient Fill Light */}
      <pointLight
        position={[0, 0, bodyD / 2 + 0.35]}
        color="#2997FF"
        intensity={0.35}
        distance={3.5}
        decay={2}
      />
    </group>
  )
}

/* ─── Apple Studio 3D Scene ─── */
export default function IPhoneScene() {
  return (
    <>
      {/* Studio Lighting Hierarchy */}
      <ambientLight intensity={0.35} />
      
      {/* Key Light */}
      <spotLight
        position={[3, 6, 5]}
        angle={0.4}
        penumbra={0.8}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />
      
      {/* Rim / Accent Light */}
      <spotLight
        position={[-4, 4, 3]}
        angle={0.5}
        penumbra={1}
        intensity={0.6}
        color="#a5f3fc"
      />
      
      {/* Bottom fill */}
      <pointLight position={[0, -3, 3]} color="#2997FF" intensity={0.25} distance={10} />

      {/* Studio Environment Map */}
      <Environment preset="city" environmentIntensity={0.5} />

      {/* Floating Device */}
      <Float
        speed={1.2}
        rotationIntensity={0.1}
        floatIntensity={0.3}
        floatingRange={[-0.08, 0.08]}
      >
        <IPhoneModel />
      </Float>

      {/* Subtle atmospheric particles */}
      <Particles count={40} />

      {/* Soft Contact Shadow beneath device */}
      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.45}
        scale={7}
        blur={2.2}
        far={4.5}
        color="#00E5FF"
      />
    </>
  )
}
