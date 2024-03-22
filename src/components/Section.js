// Section.js
import { useState } from "react";
import { useEffect } from "react";

import "../styles/anim.css"

function Section({ isActive, content }) {

  const [isContentVisible, setIsContentVisible] = useState(isActive);
  const [animFadeIn, setAnimFadeIn] = useState(false);
  const [animFadeOut, setAnimFadeOut] = useState(false);
  const [animFlexGrow, setAnimFlexGrow] = useState(false);


  useEffect(() => {

    if (!isActive) {
      setAnimFadeOut(true);
      setTimeout(() => {
        setIsContentVisible(false);
        setAnimFadeIn(false);
        setAnimFadeOut(false);
        setAnimFlexGrow(false);
      }, 300)
    }
    else if (isActive) {
      setTimeout(() => {
        setAnimFlexGrow(true);
      }, 300);
      setTimeout(() => {
        setIsContentVisible(true);
        setAnimFadeIn(true);
      }, 600);
  }
  }, [isActive]);

  return (
    <div className={` bg-blue transition-all flex flex-col ease-in-out duration-300 ${animFlexGrow ? "grow" : "grow-0"} `}>
      <div className={` fadeInUp px-8 flex h-full ${isContentVisible ? "" : "hidden "} ${animFadeIn  ? "fadeInUp" : ""} ${animFadeOut  ? "fadeOutDown" : ""}`}>
        {content}
      </div>
    </div>
  );
}

export default Section;
