import ArrowDown from "../images/arrow-down.png"
import CV from "../images/CV/cv-lorris.pdf"
import Bio from "../images/Dessin/Bio.jpg"

import "../styles/anim.css"


import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import SmoothScroll from 'smooth-scroll';

function About() {

  const [seeMore, setSeeMore] = useState(false)
  const [download, setDownload] = useState(false)

  const stringsSec2 = [
    "Je suis étudiant en licence d'informatique depuis 3 ans à l'Université de Limoges.",
    "Il y a de ça 1 an je me suis pris de passion pour le développement web, plus particulièrement le front end.",
    "Alors j'ai commencé à intégrer des maquettes que je trouvais sur Internet.",
    "J'aspire plus tard à en faire mon métier, et ainsi devenir développeur web !",
  ]

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

  const getSection2Offset = (index) => {
    if (scrollOffset < window.innerHeight / 2) {
      return 300;
    }
    else if (scrollOffset > (window.innerHeight / 2) + 300) {
      return 0;
    }
    else {
      return ((index+1)/4 * (300 - (scrollOffset - window.innerHeight/2)))
    }    
  }

  const getSection2Opacity = () => {
    if (scrollOffset < window.innerHeight / 2) {
      return 0;
    }
    else if (scrollOffset > (window.innerHeight / 2) + 500) {
      return 1;
    }
    else {
      return (scrollOffset - window.innerHeight/2) / 500
    }
  };

  const OnClickStyleEffect = (element) => {
    if (element === "see-more") {
      setSeeMore(true)
      setTimeout(() => {
        setSeeMore(false)
      }, 500);
    }
    else if (element === "download") {
      setDownload(true)
      setTimeout(() => {
        setDownload(false)
      }, 500);
    }
  }


  return (
    <div className=" w-full">

        {/*section 1*/}
        <div className="h-screen flex flex-col items-center justify-center -mt-8 sm:mt-0" >
            <div className=" bg-red w-auto px-6 sm:px-10 py-4 text-4xl sm:text-5xl text-white md:text-6xl text-center font-semibold" style={{ transform: `translateY(${-5/5*scrollOffset}px)` }}>
              Je m'appelle <span className="  text-red" style={{WebkitTextStroke: "2px white"}}>Lorris</span>
            </div>
            <div className=" bg-white text-red px-6 sm:px-10 py-4 text-2xl sm:text-3xl md:text-4xl  text-center font-semibold" style={{ transform: `translateY(${-4/5*scrollOffset}px)` }}>
              et j'aime 
            </div>
            <div className= " bg-red w-auto px-6 sm:px-10 py-4 text-white text-3xl sm:text-4xl md:text-5xl  text-center font-semibold" style={{ transform: `translateY(${-3/5*scrollOffset}px)` }}>
              créer des sites web
            </div>
            <div style={{ transform: `translateY(${-2/5*scrollOffset}px)` }} onClick={() => {scrollToSection2(); OnClickStyleEffect("see-more");}} className={` ${seeMore ? "bg-color-onclick-anim" : ""} mt-36 w-[300px] hover:cursor-pointer hover:!bg-red transition-colors flex gap-8 items-center justify-center border py-2 px-4`}>
              <div className=" min-w-fit">
                <img alt="arrow" className=" w-full h-auto" src={ArrowDown} />
              </div>
              <div className=" text-white font-semibold text-lg md:text-xl" >
                Scroll pour plus d'informations
              </div>
            </div>
        </div>
        {/*section 2*/}
        <div ref={section2Ref} className=" bg-white px-8 py-8 md:py-0 min-h-screen md:grid grid-cols-[2fr_3fr]">
          <div className=" col-[2] tracking-wide mt-28 mb-16 sm:mb-0">
            {stringsSec2.map((str, index) => (
              <div key={index} className=" mb-6 text-xl sm:text-2xl" style={{ transform: `translateY(${getSection2Offset(index)}px)`, opacity: getSection2Opacity() }}>
                {str}
              </div>
            ))}
            <div className=" flex items-center justify-center mt-24">
              <a href={CV} download="cv_lorris" onClick={() => OnClickStyleEffect("download")} style={{ transform: `translateY(${getSection2Offset(4)}px)`, opacity: getSection2Opacity() }} className={`${download ? "bg-color-onclick-anim" : ""} mx-auto text-white hover:cursor-pointer flex items-center justify-center max-w-fit px-10 py-5 font-semibold text-lg bg-blue hover:!bg-red transition-colors`}>
                Télécharger mon CV
              </a>
            </div>
            
          </div>
          <div className=" col-[1] row-[1] h-full w-full flex items-end pb-20">
            <div className=" ">
              <img alt="illustration" src={Bio}/>
            </div>
          </div>
        </div>

        
    </div>
  );
}

export default About;