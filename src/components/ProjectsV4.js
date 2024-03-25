import { useState, } from "react";

import "../styles/anim.css"


import leftArrow from "../images/arrow-left.png"
import rightArrow from "../images/arrow-right.png"

import ToDoListApp1 from "../images/ToDoListApp/ToDoListApp1.png"
import ToDoListApp2 from "../images/ToDoListApp/ToDoListApp2.png"
import ToDoListApp3 from "../images/ToDoListApp/ToDoListApp3.png"
import ToDoListApp4 from "../images/ToDoListApp/ToDoListApp4.png"

import MSForm1 from "../images/MultiStepForm/MSForm1.png"
import MSForm2 from "../images/MultiStepForm/MSForm2.png"
import MSForm3 from "../images/MultiStepForm/MSForm3.png"
import MSForm4 from "../images/MultiStepForm/MSForm4.png"

import TTDash1 from "../images/TTDashboard/TTDash1.png"
import TTDash2 from "../images/TTDashboard/TTDash2.png"

import ExpChart1 from "../images/ExpenseChart/ExpChart1.png"

import AssisCrea1 from "../images/AssisstantCreation/AssissCrea1.png"
import AssisCrea2 from "../images/AssisstantCreation/AssissCrea2.png"
import AssisCrea3 from "../images/AssisstantCreation/AssissCrea3.png"

function ProjectsV4() {

    const ToDoListAppImages = [ToDoListApp1, ToDoListApp2, ToDoListApp3, ToDoListApp4]
    const MSFormsImages = [MSForm1, MSForm2, MSForm3, MSForm4]
    const TTDashImages = [TTDash1, TTDash2]
    const ExpChartImages = [ExpChart1]
    const AssisCreaImages = [AssisCrea2, AssisCrea1, AssisCrea3]

    const projects = [
        { shortString: "Application qui permet de créer une liste de tâches",
          longString: "La maquette provient du challenge suivant du site Frontendmentor.io : https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW L'application permet d'ajouter des tâches à faire, de les supprimer, et de les afficher sélectivement. Le layout est responsive, et un mode nuit est également disponible. Les technologies utilisées sont Tailwind et React",
          githubLink: "https://github.com/Exely0/ToDoListApplication", 
          image: ToDoListAppImages[0], 
          imageCollection: ToDoListAppImages },

        { shortString : "Formulaire en plusieurs étapes", 
          longString: "La maquette provient du challenge suivant : https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ C'est un formulaire à remplir en plusieurs étapes, le coût s'ajuste dynamiquement au fur et à mesure que l'utilisateur sélectionne les options. L'application est responsive. Les technologies utilisées sont Tailwind et React", 
          githubLink: "https://github.com/Exely0/multi-step-form", 
          image: MSFormsImages[0], 
          imageCollection : MSFormsImages },
    
        { shortString : "Tableau de bord de données", 
          longString: "La maquette provient de : https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw C'est un layout présentant les données d'un utilisateur, on peut les afficher selon différentes intervalles de temps. Les données sont récupérés dans un fichier JSON. L'application est responsive et les technologies utilisées sont Tailwind et React", 
          githubLink: "https://github.com/Exely0/time-tracking-dashboard", 
          image: TTDashImages[0], 
          imageCollection : TTDashImages },

        { shortString : "Graphique de dépenses",
          longString : "La maquette est de : https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt Le graphique affiche les données d'un fichier JSON représentant les dépenses effectuées par une entité. Les technologies utilisées sont JS CSS et HTML. ",
          githubLink : "https://github.com/Exely0/ExpensesChartComponent",
          image: ExpChartImages[0],
          imageCollection: ExpChartImages },
        { shortString : "Aide à la création de carte",
          longString : "L'application permet de trouver des erreurs dans les cartes d'un jeu vidéo. Cela se fait par reconnaissance de patternes préalablement enregistrés. L'application a été créée avec Electron.",
          image : AssisCreaImages[0],
          imageCollection : AssisCreaImages },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);
    const [showDetailedContent, setShowDetailedContent] = useState([false, false, false]);
    const [onClickArrowRightAnim, setOnClickArrowRightAnim] = useState(false)
    const [onClickArrowLeftAnim, setOnClickArrowLeftAnim] = useState(false)
    const [scaleDivAnim, setScaleDivAnim] = useState(Array(projects.length).fill(false));


    const showDetails = (index) => {
        const updatedShowDetailedContent = [...showDetailedContent]
        updatedShowDetailedContent[index] = true
        setShowDetailedContent(updatedShowDetailedContent)
        setShowOverlay(true)
        setCurrentImageIndex(0)
    }

    const closeDetails = () => {
        setShowDetailedContent([false, false, false])
        setShowOverlay(false)
        setCurrentImageIndex(0)
    }

    const updateImageIndexValue = (sens, length) => {
        if (sens === 'up') {
            setCurrentImageIndex((currentImageIndex+1) % length)
        }
        else {
            setCurrentImageIndex(currentImageIndex-1)
            if (currentImageIndex === 0) {
                setCurrentImageIndex(length - 1)
            }
        }
    }

    const forcedUpdateImageIndexValue = (value) => {
        setCurrentImageIndex(value)
    }

    const OnClickStyleEffect = (element) => {
        if (element === "arrow-right") {
          setOnClickArrowRightAnim(true)
          setTimeout(() => {
            setOnClickArrowRightAnim(false)
          }, 200);
        }
        else if (element === "arrow-left") {
            setOnClickArrowLeftAnim(true)
            setTimeout(() => {
                setOnClickArrowLeftAnim(false)
            }, 200);
        }
    }
    
    const handleProjectsDivClickAnim = (index) => {
        const updatedScaleDivAnim = [...scaleDivAnim];
        updatedScaleDivAnim[index] = true;
        setScaleDivAnim(updatedScaleDivAnim)
        setTimeout(() => {
            updatedScaleDivAnim[index] = false
            setScaleDivAnim(updatedScaleDivAnim)
        }, 500);
    }


    return (
        <div className="w-full flex flex-col gap-8 px-10 py-8">

            <div className=" hidden md:flex justify-center items-center bg-blue -mx-8 h-28 ">
                <h1 className="hidden md:block text-white font-semibold text-4xl">Mes projets</h1>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {projects.map(({shortString, longString, githubLink, image, imageCollection}, index) => ( 

                <div key={index}>

                    <div onClick={ () => closeDetails()} className={` fixed top-0 left-0 w-full h-full bg-overlay z-10 ${!showOverlay ? "hidden" : ""}`}>
                    </div>

                    <div onClick={ () => {showDetails(index); handleProjectsDivClickAnim(index)}} className={`${scaleDivAnim[index] ? "scale-down" : ""} hover:cursor-pointer bg-white rounded-lg p-5  flex flex-col justify-between h-[400px] hover:scale-105 transition-all`}>
                        <div className=" rounded-lg w-full h-3/5">
                            <img src={image} alt="" className=" rounded-lg h-full w-full object-cover "/>
                        </div>
                        <div className=" font-semibold">
                            {shortString}
                        </div>
                        <div className=" text-lg ">
                            Cliquez pour plus d'informations
                        </div>
                    </div>

                    <div className={` fixed max-h-[80vh] overflow-auto md:-translate-x-1/2 -translate-y-1/2 top-1/2 left-0 md:top-1/2 md:left-1/2 bg-white z-20 w-full md:w-[800px] md:rounded-lg ${!showDetailedContent[index] ? "hidden" : ""}`}>
                        <div className=" flex h-[400px] mb-3">
                            <div onClick={ () => {updateImageIndexValue('down', imageCollection.length); OnClickStyleEffect("arrow-left")}} className={`${onClickArrowLeftAnim ? "bg-color-onclick-anim-arrow-desk" : ""} hidden md:block grow transition-all bg-white h-full hover:bg-[#CECECE] hover:cursor-pointer`}>
                                <img alt="arrow left" className=" w-full h-full scale-50" src={leftArrow}/>
                            </div>
                            <div className="h-full overflow-hidden md:w-[650px] w-full">
                                <div className={` h-full flex -z-10 transition-transform duration-200`} style={{ transform: `translateX(-${100*currentImageIndex}%)` }}>
                                    {imageCollection.map((image, index) => (
                                    <div key={index} className=" w-full md:w-[650px] shrink-0">
                                        <img alt="screenshot" className=" w-full h-full object-cover" src={image} />
                                    </div>
                                    ))} 
                                </div>
                            </div>
                            <div onClick={ () => {updateImageIndexValue('up', imageCollection.length); OnClickStyleEffect("arrow-right")}} className={`${onClickArrowRightAnim ? "bg-color-onclick-anim-arrow-desk" : ""} hidden grow md:block transition-all bg-white h-full hover:bg-[#CECECE] hover:cursor-pointer`}>
                                <img alt="arrow right" className=" w-full h-full scale-50" src={rightArrow}/>
                            </div>
                        </div>

                        <div className=" md:hidden flex h-11 w-full mb-4">
                            <div onClick={ () => {updateImageIndexValue('down', imageCollection.length); OnClickStyleEffect("arrow-left")}} className={` ${onClickArrowLeftAnim ? "bg-color-onclick-anim-arrow" : ""} py-2 text-center text-xl font-bold transition-all grow bg-white h-full hover:bg-overlay hover:cursor-pointer`}>
                                {"<"}
                            </div>
                            <div onClick={ () => {updateImageIndexValue('up', imageCollection.length); OnClickStyleEffect("arrow-right")}} className={` ${onClickArrowRightAnim ? "bg-color-onclick-anim-arrow" : ""} py-2 text-center text-xl font-bold transition-all grow bg-white h-full hover:bg-overlay hover:cursor-pointer`}>
                                {">"}
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-center mb-4 gap-4">
                            {Array.from({ length: imageCollection.length }).map((_, index) => (
                                <div key={index} onClick={() => forcedUpdateImageIndexValue(index)} className={`transition-all h-3 w-3 rounded-full flex items-center justify-center bg-blue hover:bg-red hover:cursor-pointer ${currentImageIndex === index ? "bg-red" : ""}`}>
                                </div>
                            ))}
                        </div>
                        
                        <div className=" pb-6 px-4">
                            <div>
                            {longString}
                            </div>
                            <div>
                            Lien Github: <a target="_blank" rel="noreferrer noopener" href={githubLink} className=" hover:cursor-pointer hover:text-[rgba(125,29,63,1)] font-semibold">Cliquez ici</a>
                            </div>
                        </div>
                    </div>

                </div>

            ))}

        </div>                
        </div>

    );
}

export default ProjectsV4;