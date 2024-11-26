'use client';

import { useEffect, useState, useRef } from 'react';

interface StatBoxProps {
  finalValue: number;
  label: string;
  number: number;
}

export function StatBox({ finalValue, label, number }: StatBoxProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Track if animation has started
  const duration = 2000; // Total animation duration in milliseconds
  const incrementRef = useRef<number | null>(null);
  const statRef = useRef<HTMLDivElement | null>(null); // Reference to the component

  // Function to increment the count smoothly
  useEffect(() => {
    if (!hasStarted) return; // Only run if animation has started

    const startTime = performance.now();

    function updateCounter(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensure progress does not exceed 1
      const value = Math.floor(progress * finalValue); // Calculate the value to display

      setCount(value);

      if (progress < 1) {
        incrementRef.current = requestAnimationFrame(updateCounter);
      }
    }

    incrementRef.current = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(incrementRef.current!); // Cleanup on unmount
  }, [hasStarted, finalValue]);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true); // Start animation when component is visible
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div ref={statRef} className={`stat-box stat-box${number} text-center rounded-md shadow-md`}>
      <h3 className="text-3xl font-bold">{count}+</h3>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
}
