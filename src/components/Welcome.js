import { useState, useEffect } from "react";

function Welcome() {

    const [anim, setAnim] = useState(false)
    const [hide, setHide] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setAnim(true)
        }, 1500);
        setTimeout(() => {
            setHide(true)
        }, 2500);
    }, []);

    
    return (
      <div className={` ${anim ? "fadeOut" : ""} ${hide ? "hidden" : ""} overflow-hidden z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center  bg-gradient-lapislazuli-claret-diag text-slate-200`}>

        <div className=" flex flex-col gap-6 ">
        <div className={` text-6xl font-semibold overflow-hidden`}>
            <p className="fromUpside">Welcome</p>
        </div>
        <div className={` flex text-4xl overflow-hidden`}>
            <p className="fromDownside">Lorris, Portfolio</p>
        </div>

        </div>

      </div>
    );


  }
  
  export default Welcome;