function Skills() {

    return (
      <div className=" w-full p-8 flex flex-col gap-8">
          <div className="flex justify-center items-center">
              <h1 className=" font-semibold text-4xl">
                  Skills
              </h1>
          </div>
          <div className=""></div>
          <div className=" border-b-4 border-l-4 border-t-2 border-r-2 border-black grid p-8">
              <h2 className=" text-2xl mb-4 font-semibold">
                Currently learning :
              </h2>
              <ul>
                <li className=" uppercase">html</li>
                <li className=" uppercase">css</li>
                <li className=" ">Tailwind</li>
                <li className=" ">Javascript</li>
                <li className=" ">React</li>
                <li className=" ">Typescript</li>
                <li className=" ">NextJS</li>
              </ul>
          </div>
        
      </div>
    );
  }
  
  export default Skills;