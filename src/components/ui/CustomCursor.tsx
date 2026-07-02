"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for lag-free trailing effect on outer ring
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (hidden) setHidden(false);

      // Check what element the mouse is hovering over
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest("a, button, .cursor-pointer, [role='button']");
        if (interactiveEl) {
          setHovered(true);
          // If the element has a custom cursor data attribute, show it
          const customText = (interactiveEl as HTMLElement).getAttribute("data-cursor-text");
          if (customText) {
            setCursorText(customText);
          } else {
            setCursorText("");
          }
        } else {
          setHovered(false);
          setCursorText("");
        }
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    // Touch device detection: don't show custom cursor on touch screens
    const checkTouch = () => {
      if (window.matchMedia("(pointer: coarse)").matches) {
        setHidden(true);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    checkTouch();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY, hidden]);

  if (!mounted || hidden) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: clicked ? 0.7 : hovered ? 1.5 : 1,
          backgroundColor: hovered ? "var(--color-accent-2)" : "var(--color-accent)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hidden md:flex"
        style={{
          x: ringX,
          y: ringY,
          width: hovered ? 46 : 24,
          height: hovered ? 46 : 24,
          borderColor: hovered ? "var(--color-accent-2)" : "var(--color-accent)",
        }}
        animate={{
          scale: clicked ? 0.9 : 1,
          backgroundColor: hovered ? "rgba(0, 212, 170, 0.08)" : "rgba(74, 158, 255, 0)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[8px] font-bold font-[family-name:var(--font-jetbrains)] text-accent-2 uppercase tracking-widest whitespace-nowrap"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
