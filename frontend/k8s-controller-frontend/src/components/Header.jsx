import React from "react";
import "../styles/header.css"
import HeaderLink from "./HeaderLink";

const headerEntries = {
  pods: {
    name: "Pods",
    url: "/pods",
  },
  services: {
    name: "Services",
    url: "/services",
  },
  deployments: {
    name: "Deployments",
    url: "/deployments",
  },
  namespaces: {
    name: "Namespaces",
    url: "/namespaces",
  }
};

const Header = () => {
  return (
    <header className="component-header">
      <h1>
        <a href="/" className="component-header-nav-a">
            Kubernetes Dashboard
        </a>
      </h1>
      <nav>
        <ul className="component-header-ul">
          {Object.keys(headerEntries).map((key) => {
            return (
              <HeaderLink key={headerEntries[key].name} text={headerEntries[key].name} url={headerEntries[key].url} />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
