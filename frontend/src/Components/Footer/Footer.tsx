import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Styles from './Footer.module.scss';


const Footer: React.FC = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.social}>
                <a href="https://github.com/DuneNathalie" rel="noopener noreferrer" aria-label="github">
                    <FaGithub className={Styles.icon} />
                </a>
                <a href="https://port-folio-red-phi.vercel.app" rel="noopener noreferrer" aria-label="Portfolio">
                    Portfolio
                </a>
                <a href="https://www.linkedin.com/in/nathalie-dune-1b4a09245" rel="noopener noreferrer" aria-label="Facebook">
                    <FaLinkedin className={Styles.icon} />
                </a>
            </div>
        </div>
    );

}
export default Footer;