import React, { useEffect, useState } from "react";
import { getKubernetesNamespacedResources } from "../helpers/kubernetes-helpers";
import { transformKubernetesDeploymentDefinitions } from "../helpers/json-helpers";
import "../styles/deployments.css";

const Deployments = () => {
  const [deployments, setDeployments] = useState([]);
  const namespace = "k8s-go-controller";
  useEffect(() => {
    getKubernetesNamespacedResources("deployments", namespace).then((data) => {
      setDeployments(data.items);
    });
  }, []);

  const transformedPods = transformKubernetesDeploymentDefinitions(deployments);

  return (
    <div className="component-deployments-dashboard-container">
      <h1 className="component-deployments-dashboard-title">Deployments</h1>
      <table className="component-deployments-dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Namespace</th>
            <th>Labels</th>
            <th>Replicas</th>
            <th>Available Replicas</th>
          </tr>
        </thead>
        <tbody>
          {transformedPods.map((deployment, index) => (
            <tr key={index}>
              <td>{deployment.name}</td>
              <td>{deployment.namespace}</td>
              <td>{deployment.labels}</td>
              <td>{deployment.replicas}</td>
              <td>{deployment.availableReplicas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deployments;
