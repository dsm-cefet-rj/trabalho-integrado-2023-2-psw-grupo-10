import React from "react";
import { NavLink } from 'react-router-dom';

import bannerImage from "../img/banner.png";
//import bannerImage2 from "../img/banner.png";
//import bannerImage3 from "../img/banner.png";
//import bannerImage4 from "../img/banner.png";
import contentImage from "../img/content-1.png";
import contentImage2 from "../img/content-2.png";
import contentImage3 from "../img/content-3.png";
import imagem1 from "../img/imagem1.png";
import imagem2 from "../img/imagem2.png";
import imagem3 from "../img/imagem3.png";
import logo1 from "../img/logo1.png"; 
import logo2 from "../img/logo2.png"; 
import logo3 from "../img/logo3.png"; 
import logo4 from "../img/logo4.png"; 

class Home extends React.Component {

  



  render() {
    return (
      <div>
        <main className="col-100 menu-urls">
          <div className="header-2">
            <div className="menu">
              <ul>
                <li>
                <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
                </li>
                <li>
                <NavLink to="/about-us" activeClassName="active">
                About Us
              </NavLink>
                </li>
                <li>
                <NavLink to="/service" activeClassName="active">
                Service
              </NavLink>
                </li>
                {/*<li>
                <NavLink to="/pages" activeClassName="active">
                Pages
              </NavLink>
                </li>*/}
               {/* <li>
                <NavLink to="/blog" activeClassName="active">
                Blog
              </NavLink>
              </li>*/}
                <li>
                <NavLink to="/contact-us" activeClassName="active">
                Contact Us
              </NavLink>

                </li>
              </ul>
            </div>
            <div className="busca">
            <input
                placeholder="Search Something"
                type="text" />
              
             {/* <button onClick={this.handleSearch}>Search</button>*/}
            </div>
          </div>
        </main>

        {/* Additional content starts here */}
        <div class="col-100">
          <div className="slider-principal">
            <img src={bannerImage} alt="Banner" />
           { /*<img src={bannerImage2} alt="Banner" />*/ 
            /*<img src={bannerImage3} alt="Banner" />*/
            /*<img src={bannerImage4} alt="Banner" />*/}
          </div>
        </div>
        <div class="col-100">
          <div class="content texto-destaque">
            <h1>
              Lorem Ipsum is <strong>simply dummy</strong> of the printing.
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make atype specimen book. It has survived
              not only five centuries.
            </p>

            <div class="col-3 bloco-texto">
              <img src={contentImage} alt="Content 1" />
              <h3>
                <b>Lorem Ipsum</b> is simply
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem Ipsum has been
              </p>
            </div>
            <div class="col-3 bloco-texto" style={{ marginTop: "6em" }}>
              <img src={contentImage2} alt="Content 2" />
              <h3>
                <b>Lorem Ipsum</b> is simply
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem Ipsum has been
              </p>
            </div>
            <div class="col-3 bloco-texto">
              <img src={contentImage3} alt="Content 3" />
              <h3>
                <b>Lorem Ipsum</b> is simply
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem Ipsum has been
              </p>
            </div>
          </div>
        </div>
        <div class="col-100 bloco-imagens-texto">
          <div class="content" style={{ marginLeft: "24%", float: "left" }}>
            <div class="col-3 bloco-texto bloco-imagem">
              <img src={imagem1} alt="" />
              <p>
                <b>Lorem Ipsum is simply</b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem Ipsum has been the and scrambled it.
                atype specimen
              </p>
            </div>
            <div class="col-3 bloco-texto bloco-imagem">
              <img src={imagem2} alt="" />
              <p>
                <b>Lorem Ipsum is simply</b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem Ipsum has been the and scrambled it.
                atype specimen
              </p>
            </div>
            <div class="col-3 bloco-texto bloco-imagem">
              <img src={imagem3} alt="" />
              <p>
                <b>Lorem Ipsum is simply</b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem Ipsum has been the and scrambled it.
                atype specimen
              </p>
            </div>
          </div>
          <div class="content" style={{ marginLeft: "24%", float: "left" }}>
            <div class="col-3 bloco-texto bloco-imagem">
              <img src={imagem1} alt="" />
              <p>
                <b>Lorem Ipsum is simply</b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem Ipsum has been the and scrambled it.
                atype specimen
              </p>
            </div>
            <div class="col-3 bloco-texto bloco-imagem">
              <img src={imagem2} alt="" />
              <p>
                <b>Lorem Ipsum is simply</b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem Ipsum has been the and scrambled it.
                atype specimen
              </p>
            </div>
            <div class="col-3 bloco-texto bloco-imagem">
              <img src={imagem3} alt="" />
              <p>
                <b>Lorem Ipsum is simply</b>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem Ipsum has been the and scrambled it.
                atype specimen
              </p>
            </div>
          </div>
        </div>
        <div class="col-100 bloco-logos">
          <div class="content">
            <div class="col-4">
              <img
                alt="logo"
                title="logo"
                src={logo1}
                
              />
            </div>
            <div class="col-4">
              <img
                alt="logo"
                title="logo"
                src={logo2}
              
              />
            </div>
            <div class="col-4">
              <br />
              <img
                alt="logo"
                title="logo"
                src={logo3}
              
              />
            </div>
            <div class="col-4">
              <img alt="Puma" title="Puma" src={logo4}  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


