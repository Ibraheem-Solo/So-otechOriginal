import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const ARCS = [
  { from: [13.4, -16.6] as [number,number], to: [51.5,  -0.1]  as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [40.7,  -74.0] as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [6.5,   3.4]   as [number,number], color: [0.85, 0.9,  0.3] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [-1.3,  36.8]  as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [48.9,  2.3]   as [number,number], color: [0.85, 0.9,  0.3] as [number,number,number] },
  { from: [6.5,  3.4]   as [number,number], to: [51.5,  -0.1]  as [number,number], color: [0.85, 0.9,  0.3] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [1.3,  103.8]  as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
  { from: [13.4, -16.6] as [number,number], to: [24.7,  46.7]  as [number,number], color: [0.61, 0.71, 0.2] as [number,number,number] },
];

export default function GlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0.6);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0.6,
      theta: -0.3,
      dark: 1,
      diffuse: 2,
      mapSamples: 16000,
      mapBrightness: 10,
      baseColor: [0.55, 0.3, 0.75],
      markerColor: [0.61, 0.71, 0.2],
      glowColor: [0.6, 0.32, 0.8],
      markers: [
        { location: [13.4, -16.6] as [number,number], size: 0.1 },
        { location: [6.5,   3.4]  as [number,number], size: 0.06 },
        { location: [-1.3, 36.8]  as [number,number], size: 0.06 },
        { location: [5.6,  -0.2]  as [number,number], size: 0.04 },
        { location: [14.7,-17.5]  as [number,number], size: 0.04 },
      ],
      arcs: ARCS,
      onRender(state) {
        state.phi = phiRef.current;
        phiRef.current += 0.003;
      },
    });

    return () => { globe.destroy(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 540,
        height: 540,
        opacity: 0.7,
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
}
