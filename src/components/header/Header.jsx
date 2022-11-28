import React from "react";
import "./header.css";

import { Container } from "reactstrap";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Recipes",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <span>
                <i class="ri-restaurant-2-line"></i>
              </span>
              Chef Food
            </h2>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu__right">
            <div className="custom__search">
              <input type="text" placeholder="search item..." />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </div>
          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;