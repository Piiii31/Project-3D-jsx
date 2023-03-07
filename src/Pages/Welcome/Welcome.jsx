import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene'
import "./Welcome.css"

export default function App() {
  return (
    <div className='welcome'>
    <Suspense >
      <Canvas shadows flat linear>
        
        <Scene/>
        
        <OrbitControls />
      </Canvas>
    </Suspense>
    </div>
  )
  
}


