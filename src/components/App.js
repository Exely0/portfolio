// App.js
import Section from "./Section";
import About from "./About";
import Skills from "./Skills";
import ProjectsV4 from "./ProjectsV4";
import Contact from "./Contact";
import Bookmark from "./Bookmark";
import Welcome from "./Welcome";

import { useState } from "react";
import { Fragment } from "react";

const sections = [
  { id: 1, title: "About", content: <About /> },
  { id: 2, title: "Projects", content: <ProjectsV4 /> },
  { id: 3, title: "Contact", content: <Contact /> },
];

function App() {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    console.log(activeSection);
  };

  return (
    <div className="flex flex-col overflow-clip md:flex-row w-full min-h-screen bg-slate-200 tracking-wider text-gray-900 !font-roboto">
      
      <Welcome />
      
      {sections.map((section, index) => (
        <Fragment key={index}>
          <Bookmark
            sectionId={index+1}
            onClick={() => handleSectionClick(section.id)}
            isActive={activeSection === section.id}
            title={section.title}
            activeSection={activeSection}
          />
          <Section isActive={activeSection === section.id} content={section.content} />
        </Fragment>
      ))}
    </div>
  );
}

export default App;
