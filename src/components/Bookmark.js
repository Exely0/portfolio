// Bookmark.js
import React from "react";

function Bookmark({ sectionId, onClick, isActive, title, activeSection }) {

    const stickyOffset = ((sectionId - 1) * 32) + "px"
    const stickyOffsetBot = ((3 - (sectionId)) * 32) + "px"

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
        className={` z-[5] text-white sticky transition-[background-position] duration-500 shrink-0 flex justify-center items-center hover:cursor-pointer w-full md:w-8 md:h-screen md:[writing-mode:vertical-lr] h-8 bg-gradient-lapislazuli-claret-hori md:bg-gradient-lapislazuli-claret-vert bg-custom-hori md:bg-custom-vert text-slate-200  ${!isActive ? "hover:bg-[-100%_0%] md:hover:bg-[0%_-100%]" : " bg-[-100%_0%] md:bg-[0%_-100%]"} md:!top-0`} style={position}>
        {title}
        </div>
    );
}

export default Bookmark;
