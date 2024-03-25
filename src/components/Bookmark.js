// Bookmark.js
import React from "react";

function Bookmark({ sectionId, onClick, isActive, title, activeSection }) {

    const stickyOffset = ((sectionId - 1) * 40) + "px"
    const stickyOffsetBot = ((3 - (sectionId)) * 40) + "px"

    const position = sectionId <= activeSection ? {top: stickyOffset} : {bottom: stickyOffsetBot}

    const handleClick = () => {
        if (!isActive) {
            onClick();
        }
    };

    return (
        <div
        onClick={handleClick}
        // c'est long un peu
        className={` z-[5] text-white text-lg tracking-wide sticky transition-[background-position] duration-500 shrink-0 flex justify-center items-center hover:cursor-pointer w-full h-10 md:w-10 md:h-screen md:[writing-mode:vertical-lr] bg-gradient-lapislazuli-claret-hori md:bg-gradient-lapislazuli-claret-vert bg-custom-hori md:bg-custom-vert text-slate-200  ${!isActive ? "hover:bg-[-100%_0%] md:hover:bg-[0%_-100%]" : " bg-[-100%_0%] md:bg-[0%_-100%]"} md:!top-0`} style={position}>
        {title}
        </div>
    );
}

export default Bookmark;
