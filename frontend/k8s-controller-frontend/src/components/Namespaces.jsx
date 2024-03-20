import React, { useEffect, useState } from "react";
import { getKubernetesResources } from "../helpers/kubernetes-helpers";
import { transformKubernetesNamespaceDefinitions } from "../helpers/json-helpers";
import "../styles/namespaces.css";

const Namespaces = () => {
  const [namespaces, setNamespaces] = useState([]);
  useEffect(() => {
    getKubernetesResources("namespaces").then((data) => {
      setNamespaces(data.items);
    });
  }, []);

  const transformedPods = transformKubernetesNamespaceDefinitions(namespaces);

  return (
    <div className="component-namespaces-dashboard-container">
      <h1 className="component-namespaces-dashboard-title">Namespaces</h1>
      <table className="component-namespaces-dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Labels</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transformedPods.map((namespace, index) => (
            <tr key={index}>
              <td>{namespace.name}</td>
              <td>{namespace.labels}</td>
              <td>{namespace.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Namespaces;
