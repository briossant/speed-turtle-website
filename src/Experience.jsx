import {Clone, Instance, Scroll, ScrollControls, useAnimations, useFBX} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import ScrHtml from "./ScrHtml";
import {useEffect} from "react";




export default function Experience()
{

    const model = useFBX('./TURTTLE-THE-ONE.fbx')
    const animations = useAnimations(model.animations, model)

    console.log(animations)

    useEffect(() =>
    {
        const action = animations.actions['Thecopy|Hello']
        action.play()
    }, [])

    return <>

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04} />
        <ambientLight intensity={ 0.5 } />
        <ScrollControls damping={0.1} pages={4}>
            <ScrHtml />
            <Scroll>
                <primitive object={model} scale={0.008} position-y={0.1} />
            </Scroll>
        </ScrollControls>


    </>
}