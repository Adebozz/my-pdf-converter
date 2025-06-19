'use client'

import ColorToggle from '../components/ColorToggle'
import PDFConverter from '../components/PDFConverter'
import { SparklesPreview } from '../components/Background'

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Sparkles background animation */}
      <Sparkles
        minSize={0.4}
        maxSize={1.2}
        particleDensity={120}
        className="absolute inset-0 z-0"
      />

      {/* Foreground content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <h2 className="text-3xl font-bold mb-6">Welcome to PDF Converter</h2>
        <ColorToggle />
        <PDFConverter />
      </main>
    </div>
  )
}
