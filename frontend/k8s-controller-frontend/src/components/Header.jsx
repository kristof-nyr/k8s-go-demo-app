import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import PathConstants from "../routes/pathConstants";

const Header = () => {
  return (
    <header className="component-header">
      <h1>
        <Link
          to={PathConstants.HOME}
          className="component-header-nav-a no-border"
        >
          Kubernetes Dashboard
        </Link>
      </h1>
      <nav>
        <ul className="component-header-ul">
          <li className="component-header-nav-li" key={PathConstants.PODS}>
            <Link
              className="component-header-nav-a"
              to={PathConstants.PODS}
              title="Pods"
            >Pods</Link>
          </li>
          <li className="component-header-nav-li" key={PathConstants.SERVICES}>
            <Link
              className="component-header-nav-a"
              to={PathConstants.SERVICES}
              title="Services"
            >Services</Link>
          </li>
          <li
            className="component-header-nav-li"
            key={PathConstants.DEPLOYMENTS}
          >
            <Link
              className="component-header-nav-a"
              to={PathConstants.DEPLOYMENTS}
              title="Deployments"
            >Deployments</Link>
          </li>
          <li
            className="component-header-nav-li"
            key={PathConstants.NAMESPACES}
          >
            <Link
              className="component-header-nav-a"
              to={PathConstants.NAMESPACES}
              title="Namespaces"
            >Namespaces</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
