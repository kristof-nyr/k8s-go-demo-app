import React from "react";
import "../styles/header.css";
import { getKubernetesResources } from "../helpers/kubernetes-helpers";

const HeaderLink = ({ text, url }) => {
  return (
    <li className="component-header-nav-li" key={text}>
      <a
        onClick={() => getKubernetesResources(url)}
        className="component-header-nav-a"
        href={url}
      >
        {text}
      </a>
    </li>
  );
};

export default HeaderLink;
