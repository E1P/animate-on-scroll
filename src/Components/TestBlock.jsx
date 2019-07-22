import React, { useState, useEffect } from "react";
import { useClientRect } from "../Hooks/UseClientRect";
import "./TestBlock.css";

export default function TestBlock({ scrollY }) {
  const [rect, ref] = useClientRect();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // console.log("Running useEffect...", startAnimation);
    if (rect) {
      if (rect.y < scrollY + window.innerHeight) {
        setStartAnimation(true);
      } else if (startAnimation /*  && rect.y > scrollY + window.innerHeight */) {
        setStartAnimation(false);
      }
      // console.log("Visible: ", startAnimation, rect.y, scrollY + window.innerHeight);
    }
  }, [rect, scrollY, startAnimation]);

  return (
    <div className={`test-block${startAnimation ? " start-animation" : ""}`} ref={ref}>
      Amazing and well-hydrated content stream delivery portal here.
    </div>
  );
}
