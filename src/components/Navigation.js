import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>accueil</li>
        </NavLink>

        <li className="nav-site">Sites
          <ul className="nav-sites">
            <NavLink to="/projet-1" activeClassName="nav-active" className="hover">
              <li>Site n° 1</li>
            </NavLink>
            <NavLink to="/projet-2" activeClassName="nav-active" className="hover">
              <li>Site n° 2</li>
            </NavLink>
            <NavLink to="/projet-3" activeClassName="nav-active" className="hover">
              <li>Site n° 3</li>
            </NavLink>
            
          </ul>
        </li>

        <li className="nav-blog">Blogs
          <ul className="nav-blogs">
            <NavLink to="/blog-1" activeClassName="nav-active2" className="hover">
              <li>Instagram Doryanne</li>
            </NavLink>
            <NavLink to="/blog-2" activeClassName="nav-active2" className="hover">
              <li>Instagram La Guidance</li>
            </NavLink>
            <NavLink to="/blog-3" activeClassName="nav-active2" className="hover">
              <li>Blog</li>
            </NavLink>
            
          </ul>
        </li>

        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;