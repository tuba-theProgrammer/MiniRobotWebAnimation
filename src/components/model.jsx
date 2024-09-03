import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
useGLTF.preload('./assets/robot_playground.glb')
export const Model =()=>{
   const groupRef= useRef(null)
   const {nodes, materials,animations,scene} = useGLTF('./assets/robot_playground.glb')
   const {actions,clips}= useAnimations(animations,scene)
   const scroll= useScroll()

   useEffect(()=>{

     actions["Experiment"].play().paused= true

   },[])

   useFrame(()=>(
    actions["Experiment"].time = (actions["Experiment"].getClip().duration * scroll.offset )
   ))


    return(
        <>
        <group ref= {groupRef}  >
            <primitive object={scene}/>
        </group>
        </>
    )
}