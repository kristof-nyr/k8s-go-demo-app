import React from 'react';
import "../styles/header.css"
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL

const getKubernetesResources = async (resource) => {
    const response = await axios.get(`${BACKEND_URL}/${resource}`);
    return response.data;
}

const HeaderLink = ({ text, url }) => {
    return (
        <li className="component-header-nav-li" key={text}>
            <a onClick={() => getKubernetesResources(url)} className="component-header-nav-a" href={url}>{text}</a>
         </li>
    );
};

export default HeaderLink;
