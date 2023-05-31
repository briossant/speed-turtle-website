import {
    Clone,
    Scroll,
    ScrollControls, useAnimations, useFBX,
    useScroll
} from '@react-three/drei'
import ScrHtml from "./ScrHtml";
import {useFrame} from "@react-three/fiber";
import {Model} from "./Model";
import {useEffect} from "react";

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

    const model = useFBX('./Thelittleturttle.fbx')
    const animations = useAnimations(model.animations, model)


    useEffect(() =>
    {
        console.log(animations)

        const action = animations.actions['metarig|COURRIR']
        action.play()
    }, [])

    return <>
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04} />
        <ambientLight intensity={ 0.5 } />
        <ScrollControls damping={0.1} pages={6}>
            <ScrHtml />
            <Scroll>
                <City/>
            </Scroll>
        </ScrollControls>
        <Model/>
        <Clone castShadow object={model} scale={0.003} position={[2.6,0.5,1.8]} rotation-y={Math.PI*1.2} />
    </>
}