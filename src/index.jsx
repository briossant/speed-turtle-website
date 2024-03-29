import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows
        camera={ {
            fov: 90,
            near: 0.1,
            far: 200,
        } }
    >
        <Experience />
    </Canvas>
)