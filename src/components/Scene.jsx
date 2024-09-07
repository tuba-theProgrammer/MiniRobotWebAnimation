'use client'
import { Canvas } from "@react-three/fiber";
import { Model } from "./model";
import { Suspense } from "react";
import { OrbitControls, useProgress, Html, ScrollControls } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % Loading</Html>;
}

export default function Scene() {
  return (
    <>
      <div className="relative h-[900px] w-full">
        {/* Cute Heading */}
        <h1 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white drop-shadow-lg">
          Meet Your Little Robo Buddy! 🤖
        </h1>

        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-screen">
          <directionalLight position={[-5, -5, 5]} intensity={10} />
          <Suspense fallback={<Loader />}>
            <ScrollControls damping={0.2} pages={6}>
              <Model />
            </ScrollControls>
          </Suspense>
        </Canvas>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <span className="text-lg">Scroll to view the animation</span>
          <svg
            className="w-6 h-6 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
