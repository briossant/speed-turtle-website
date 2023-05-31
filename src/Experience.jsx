import {
    Scroll,
    ScrollControls,
    useScroll
} from '@react-three/drei'
import ScrHtml from "./ScrHtml";
import {useFrame} from "@react-three/fiber";
import {Model} from "./Model";

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
        <Model/>
    </>
}