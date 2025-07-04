import {
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGithub
} from 'react-icons/fa';

import { SiMongodb, SiExpress, SiRedux, SiFirebase } from 'react-icons/si';

const techIcons = {
    //Front
    'React': <FaReact className='tech-icon react' />,
    'HTML5': <FaHtml5 className='tech-icon html' />,
    'CSS3': <FaCss3Alt className='tech-icon css'/>,
    'JavaScript': <FaJs className='tech-icon javascript'/>,
    'Redux': <SiRedux className='tech-icon redux' />,

    //Back
    'Node.js': <FaNodeJs className='tech-icon node'/>,
    'Express': <SiExpress className='tech-icon express'/>,
    'MongoDB': <SiMongodb className='tech-icon mongodb'/>,
    'Firebase': <SiFirebase className='tech-icon firebase'/>,
    'Laravel': <FaLaravel className='tech-icon laravel'/>,

    //Default
    'default': <FaGithub className='tech-icon default'/>
};

function TechIcon ({ tech }) {
    const icon = techIcons[tech] || techIcons.default;
    return <span title = {tech} className='tech-icon-container'>{icon}</span>
}

export default TechIcon;