import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
useGLTF.preload('./assets/robot_playground.glb')
export const Model =()=>{
   const groupRef= useRef(null)
   const {nodes, materials,animations,scene} = useGLTF('./assets/robot_playground.glb')
    return(
        <>
        <group ref= {groupRef}  >
            <primitive object={scene}/>
        </group>
        </>
    )
}