'use client'
import { Canvas } from "@react-three/fiber";
import { Model } from "./model";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useProgress,Html, ScrollControls } from "@react-three/drei";
function Loader(){
 const {progress,active} = useProgress()
 return <Html center>{progress.toFixed(1)} %Loading</Html>
}
export default function Scene() {

  return (
<>
<div className="h-[900px] w-full">
<Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-screen">

  <directionalLight position={[-5, -5, 5]} intensity={10} />
  <Suspense fallback={<Loader />}>
    <ScrollControls damping={0.2} pages={6}>
      <Model />
    </ScrollControls>
  </Suspense>

</Canvas>
</div>
</>

     );
}
