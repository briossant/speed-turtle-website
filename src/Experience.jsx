import {
    Clone, Gltf,
    Instance,
    OrbitControls,
    Scroll,
    ScrollControls,
    useAnimations,
    useFBX,
    useGLTF,
    useScroll
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import ScrHtml from "./ScrHtml";
import {useEffect, useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";


function City(){
    const scroll = useScroll()

    useFrame((state, delta) => {
        const offset =  1 - scroll.offset;
        state.camera.position.set(1,1.3,0)
        state.camera.rotation.set(0, Math.cos((offset * Math.PI) ) * 3, 0)
    })

    return <></>
}

export default function Experience()
{


    return <>

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04} />
        <ambientLight intensity={ 0.5 } />
        <ScrollControls damping={0.1} pages={7}>
            <ScrHtml />
            <Scroll>
                <City/>
            </Scroll>
        </ScrollControls>
        <Gltf src={"/Intro2.glb"}/>
    </>
}