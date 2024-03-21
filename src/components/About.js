import ArrowDown from "../images/arrow-down.png"

import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import SmoothScroll from 'smooth-scroll';

function About() {


  const section2Ref = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const scrollToSection2 = () => {
    if (section2Ref.current) {
      new SmoothScroll().animateScroll(section2Ref.current, null, { speed: 1200 });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className=" w-full">
        {/*section 1*/}
        <div className="relative h-screen pt-10 md:pt-40 flex flex-col items-center" >
            <div className=" bg-red w-auto px-10 py-4 text-5xl text-white md:text-6xl text-center font-semibold" style={{ transform: `translateY(${-5/5*scrollOffset}px)` }}>
              Je m'appelle <span className=" text-red" style={{WebkitTextStroke: "2px white"}}>Lorris</span>
            </div>
            <div className=" bg-white text-red px-10 py-4 text-3xl md:text-4xl  text-center font-semibold" style={{ transform: `translateY(${-4/5*scrollOffset}px)` }}>
              et j'aime 
            </div>
            <div className="bg-red w-auto px-10 py-4 text-white text-4xl md:text-5xl  text-center font-semibold" style={{ transform: `translateY(${-3/5*scrollOffset}px)` }}>
              créer des sites web
            </div>
            <div style={{ transform: `translateY(${-2/5*scrollOffset}px) translateX(50%)` }} onClick={scrollToSection2} className=" w-[300px] hover:cursor-pointer hover:bg-red transition-colors absolute bottom-40 md:bottom-32 right-1/2 flex gap-8 items-center justify-center border py-2 px-4">
              <div className=" min-w-fit">
                <img alt="arrow" className=" w-full h-auto" src={ArrowDown} />
              </div>
              <div className=" text-white font-semibold text-lg md:text-xl" >
                Scroll pour plus d'informations
              </div>
            </div>
        </div>

        {/*section 2*/}
        <div ref={section2Ref} className=" bg-white -mx-8 h-[1000px]">
          cc
        </div>

        
    </div>
  );
}

export default About;