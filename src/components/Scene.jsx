'use client'
import { Canvas } from "@react-three/fiber";
import { Model } from "./model";
import { Suspense } from "react";
import { useProgress,Html, ScrollControls } from "@react-three/drei";
function Loader(){
 const {progress,active} = useProgress()
 return <Html center>{progress.toFixed(1)} %Loading</Html>
}
export default function Scene() {

  return (
<>
<div className="h-full">
<Canvas gl={{antialias:true}} dpr={[1,1.5]} className="relative h-svh">
   <directionalLight position={[-5,-5,5]} intensity={4}/>
   <Suspense  fallback={<Loader/>}>
   <ScrollControls damping={0.2} pages={2}>
   <Model/>
   </ScrollControls>
   </Suspense>

</Canvas>
</div>
</>

     );
}
