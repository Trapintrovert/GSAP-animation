import React from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  return <div className='hamburger-menu'>
      <div className="menu-secondary-background-color">
        <div className="menu-layer">
          <div className="menu-city-background">
          </div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li>
                      <Link to='/opportunities'>Opportunities</Link>
                    </li>
                    <li>
                      <Link to='/solutions'>Solutions</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Contact Us</Link>
                    </li>
                  </ul>
                </nav>
                <div className="info">
                  <h3>Our Promises</h3>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="locations">
                  Locations:
                  <span>Dallas</span>
                  <span>Austin</span>
                  <span>New York</span>
                  <span>San Francisco</span>
                  <span>Beijing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  
};

export default Hamburger;