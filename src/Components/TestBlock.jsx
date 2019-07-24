import React, { useState } from "react";
import { useClientRect } from "../Hooks/UseClientRect";
import "./TestBlock.css";

export default function TestBlock({ scrollY }) {
  const [rect, ref] = useClientRect();
  const [startAnimation, setStartAnimation] = useState(false);

  if (rect) {
    if (!startAnimation && rect.bottom - scrollY < window.innerHeight) {
      setStartAnimation(true);
    } else if (startAnimation && rect.top - scrollY >= window.innerHeight) {
      setStartAnimation(false);
    }
  }

  return (
    <div className={`test-block${startAnimation ? " start-animation" : ""}`} ref={ref}>
      Amazing and well-hydrated content stream delivery portal here.
    </div>
  );
}
