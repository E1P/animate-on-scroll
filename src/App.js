import React, { useState, useEffect } from "react";
import throttle from "lodash.throttle";
import "./App.css";
import TestBlock from "./Components/TestBlock";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = e => {
    setScrollY(e.target.scrollingElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 300));
    setIsLoaded(true);
    return () => window.addEventListener("scroll", throttle(handleScroll, 300));
  }, []);

  return (
    isLoaded && (
      <div className="App">
        <TestBlock scrollY={scrollY} />
      </div>
    )
  );
}

export default App;
