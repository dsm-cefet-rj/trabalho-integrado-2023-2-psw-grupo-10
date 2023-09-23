import React from "react";
import logoImage from "../img/logo.png";
import rssImage from "../img/rss.png";
import facebookImage from "../img/face.png";
import twitterImage from "../img/tw.png";
import linkedinImage from "../img/linkedin.png";

class Header extends React.Component {
    render() {
        return (
            <header className="menu-principal">
                <main>
                    <div className="header-1">
                        <div className="logo">
                            <img src={logoImage} alt="Logo" />
                        </div>
                        <div className="redes-sociais">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src={rssImage} alt="RSS Icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={facebookImage} alt="Facebook Icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={twitterImage} alt="Twitter Icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={linkedinImage} alt="LinkedIn Icon" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </header>
        );
    }
}

export default Header;
