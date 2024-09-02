
import dynamic from "next/dynamic";

const Scene = dynamic(()=>import('@/components/Scene'),{ssr:false})

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-center">
      <Scene/>
         </main>
  );
}
