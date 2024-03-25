import "../styles/flipcard.css"
import "../styles/anim.css"


import { useState } from "react"

import MailImage from "../images/RS/mail-logo.png"
import GithubImage from "../images/RS/github-logo.png"
import LinkedinImage from "../images/RS/linkedin-logo.png"
 

function Contact() {

    const [scaleTextAnime, setScaleTextAnim] = useState(false)

    const Contacts = [
        {name: "Mail", image: MailImage, link: "", text: "Contactez moi à l'adresse suivante : lorris.pons@gmail.com (cliquez pour copier)"},
        {name: "Linkedln", image: LinkedinImage, link: "", text: "Cliquez pour visiter mon profil LinkedIn"},
        {name: "Github", image: GithubImage, link: "https://github.com/Exely0/", text: "Cliquez pour visiter mon profil Github"},  
    ]

    const handleScaleTextAnim = () => {
        setScaleTextAnim(true)
        setTimeout(() => {
            setScaleTextAnim(false);
        }, 500);
    }

    const handleCopyToClipboard = (content) => {
        navigator.clipboard.writeText(content)
            .then(() => {
                console.log("Contenu copié dans le presse-papiers : ", content);
            })
            .catch((error) => {
                console.error("Erreur lors de la copie dans le presse-papiers : ", error);
            });
    };

    return (
      <div className=" w-full rounded-xl p-8 flex flex-col gap-8">
          <div className="flex justify-center items-center">
              <h1 className=" hidden md:block font-semibold text-4xl text-white">
                  Contact
              </h1>
          </div>
          <div className=" flex flex-col md:flex-row gap-6 h-full items-center justify-center md:perspective-800">
            {Contacts.map(({name, image, link, text}, index) => (
                <div key = {index} className={`h-60 w-60 relative mb-6 rounded-lg flipcard-container`} >
                    <div className={` rounded-lg duration-500 absolute top-0 left-0 w-full h-full bg-white flipcard`} title=" front">
                        <img alt="name" src={image} className=" w-full h-full object-cover"/>
                    </div>
                    <div className={` px-8 flex items-center justify-center rounded-lg duration-500 absolute top-0 left-0 w-full h-full bg-white flipcard fp-back rotate-y-180`} title=" back">
                        <a href={link} target="_blank" rel="noreferrer" className={`${name==="Mail" ? "hidden" : ""} w-full h-full flex items-center justify-center`}>
                            <div className=" text-lg">{text}</div>
                        </a>
                        <div onClick={() => {handleCopyToClipboard("lorris.pons@gmail.com"); handleScaleTextAnim()}} className={`${name!=="Mail" ? "hidden" : ""} ${scaleTextAnime ? "scale-text" : ""} w-full h-full flex items-center justify-center hover:cursor-pointer transition-transform`}><p className=" text-lg">{text}</p></div>
                    </div>
                </div>
                
            ))}
          </div>
        
      </div>
    );
  }
  
  export default Contact;