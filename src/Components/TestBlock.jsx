import React, { useState, useEffect } from "react";
import { useClientRect } from "../Hooks/UseClientRect";
import "./TestBlock.css";

export default function TestBlock({ scrollY }) {
  const [rect, ref] = useClientRect();
  const [startAnimation, setStartAnimation] = useState(false);

  // if (rect) {
  //   if (rect.y > scrollY + window.innerHeight) setStartAnimation(true);
  //   console.log("Visible: ", startAnimation, rect.y, scrollY + window.innerHeight);
  // }

  useEffect(() => {
    if (rect) {
      if (rect.y < scrollY + window.innerHeight) {
        setStartAnimation(true);
        // console.log("Visible: ", startAnimation, rect.y, scrollY + window.innerHeight);
      }
      if (startAnimation && rect.y > scrollY + window.innerHeight) {
        setStartAnimation(false);
      }
    }
  }, [rect, scrollY, startAnimation]);

  return (
    <div className={`test-block${startAnimation ? " start-animation" : ""}`} ref={ref}>
      Amazing and well-hydrated content stream here.
    </div>
  );
}
