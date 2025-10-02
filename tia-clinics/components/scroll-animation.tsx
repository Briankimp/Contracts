"use client"

import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  stagger?: boolean;
  staggerDelay?: number;
  threshold?: number;
  once?: boolean;
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  stagger = false,
  staggerDelay = 0.1,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
    margin: "0px 0px -100px 0px" // Trigger animation slightly before element is fully visible
  });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: direction === "scale" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth animation
        ...(stagger && {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        }),
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration * 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      className={`will-change-transform ${className}`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {stagger ? (
        <motion.div variants={variants}>
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <motion.div key={index} variants={itemVariants}>
                {child}
              </motion.div>
            ))
          ) : (
            <motion.div variants={itemVariants}>{children}</motion.div>
          )}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}

// Specialized components for common use cases
export function FadeInUp({ children, className = "", delay = 0, ...props }: Omit<ScrollAnimationProps, 'direction'>) {
  return (
    <ScrollAnimation 
      direction="up" 
      className={className} 
      delay={delay} 
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
}

export function FadeInLeft({ children, className = "", delay = 0, ...props }: Omit<ScrollAnimationProps, 'direction'>) {
  return (
    <ScrollAnimation 
      direction="left" 
      className={className} 
      delay={delay} 
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
}

export function FadeInRight({ children, className = "", delay = 0, ...props }: Omit<ScrollAnimationProps, 'direction'>) {
  return (
    <ScrollAnimation 
      direction="right" 
      className={className} 
      delay={delay} 
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
}

export function ScaleIn({ children, className = "", delay = 0, ...props }: Omit<ScrollAnimationProps, 'direction'>) {
  return (
    <ScrollAnimation 
      direction="scale" 
      className={className} 
      delay={delay} 
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
}

export function StaggeredFadeIn({ children, className = "", staggerDelay = 0.1, ...props }: ScrollAnimationProps) {
  return (
    <ScrollAnimation 
      stagger 
      staggerDelay={staggerDelay} 
      className={className} 
      {...props}
    >
      {children}
    </ScrollAnimation>
  );
}
