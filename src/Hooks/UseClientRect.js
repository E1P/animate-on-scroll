import { useState, useCallback } from "react";

export const useClientRect = () => {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node) {
      const newRect = node.getBoundingClientRect()
      setRect({
        top: newRect.top + window.scrollY,
        y: newRect.top + window.scrollY
      });
    }
  }, []);
  return [rect, ref];
};
