import { useEffect, useRef } from "react";

const useIntersectionObserver = (options: any) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observerInstance.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, options);

    const { current } = elementRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [elementRef, options]);

  return elementRef;
};

export default useIntersectionObserver