import { HiOutlineExternalLink } from "react-icons/hi";
import { GiClick } from "react-icons/gi"
import { useState } from "react";

function PortfolioCard({project, onPopup}) {
    const [expandDetails, setExpandDetails] = useState(false)

    function handleClick(){
        onPopup(project)
    }
    function handleExpandDetails(){
        setExpandDetails(!expandDetails)
    }
    const languageList = project.languages.map(language => {
        return <li key={language}>{language}</li>
    })
    const skillList = project.skills.map(skill => {
        return <li key={skill}>{skill}</li>
    })


    return (
        <div className="relative w-full sm:w-3/4 mx-auto bg-white flex flex-col md:flex-row" >

            <div className="w-full md:w-4/5 flex items-center justify-center border border-slate-800 p-4 relative" >
                <img onClick={handleClick} className="link" src={project.image} alt="preview of project"/>
                <GiClick className="absolute text-slate-800 right-2 bottom-2 md:hidden w-6 h-6" />
            </div>
            
            <div className={`w-full md:w-1/5 flex flex-col border border-slate-800 translate-all duration-300 transform
            ${expandDetails ? 'h-auto p-4' : 'max-h-0 md:max-h-screen overflow-hidden p-0 md:p-4'}
            `}>

                <div className="h-4/5 flex flex-col gap-y-2 justify-evenly">
                    <h3>Languages:</h3>
                    <ul className="text-left">
                        {languageList}
                    </ul>
                    <h3>Skills Acquired:</h3>
                    <ul className="text-left">
                        {skillList}
                    </ul>
                </div>

                <div className="flex items-center md:justify-center h-1/5 w-full mx-auto md:py-6 justify-end mt-2 md:mt-0 md:flex-col">
                    <a href={project.git} className='link w-full flex items-center hover:bg-tertiary hover:border hover:border-slate-800 group justify-center'>
                        <h4 className=" mx-2 group-hover:text-slate-800">GitHub</h4>
                        <HiOutlineExternalLink className=" group-hover:text-slate-800 w-5 h-5" />
                    </a>
                    <a href={project.demo} className="link w-full flex items-center hover:bg-tertiary hover:border hover:border-slate-800 group justify-center">
                        <h4 className=" mx-2 group-hover:text-slate-800 ">Demo</h4>
                        <HiOutlineExternalLink className=" group-hover:text-slate-800 w-5 h-5" />
                    </a>
                </div>

            </div>
            <h4 onClick={handleExpandDetails}
            className="absolute md:hidden bottom-0 px-2 bg-white border border-slate-800 right-1/2 translate-y-1/2 translate-x-1/2">Details</h4>
        </div>
    )
}

export default PortfolioCard;