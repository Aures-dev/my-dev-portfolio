// components/CustomCursor.tsx
"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    const follower = followerRef.current!;

    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    const speed = 0.1;

    const animate = () => {
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      follower.style.left = `${posX}px`;
      follower.style.top = `${posY}px`;

      requestAnimationFrame(animate);
    };

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const hoverables = document.querySelectorAll("a, button, .clickable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        follower.classList.add("active");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      });
    });

    document.addEventListener("mousemove", move);
    animate();

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor hidden md:block fixed z-[9999] w-3 h-3 bg-sky-500 rounded-full pointer-events-none mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="cursor-follower hidden md:block fixed z-[9998] w-8 h-8 bg-sky-500 opacity-30 rounded-full pointer-events-none transition-transform duration-150"
      />
    </>
  );
}
