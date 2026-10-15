"use client";
// Video en bucle sin sonido. React no imprime `muted` en el HTML del servidor, así que el autoplay
// se arranca aquí después de montar, y no se reproduce si la persona pidió reducir el movimiento.
import { useEffect, useRef } from "react";

export default function AutoVideo({ autoPlay, muted, children, ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  }, []);
  return (
    <video ref={ref} muted playsInline {...props}>
      {children}
    </video>
  );
}
