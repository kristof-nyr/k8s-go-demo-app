import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getKubernetesNamespacedResources } from "../helpers/kubernetes-helpers";
import { transformKubernetesPodDefinitions } from "../helpers/json-helpers";
import "../styles/pods.css";

const Pods = () => {
  const [pods, setPods] = useState([]);
  const namespace = "k8s-go-controller";
  useEffect(() => {
    getKubernetesNamespacedResources("pods", namespace).then((data) => {
      setPods(data.items);
    });
  }, []);

  const transformedPods = transformKubernetesPodDefinitions(pods);

  return (
    <div className="component-pods-dashboard-container">
      <h1 className="component-pods-dashboard-title">Pods</h1>
      <table className="component-pods-dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Namespace</th>
            <th>Labels</th>
            <th>Container Image</th>
          </tr>
        </thead>
        <tbody>
          {transformedPods.map((pod, index) => (
            <tr key={index}>
              <td >
                <Link className="component-pods-dashboard-pod-link" to={`${pod.name}`}>{pod.name}</Link>
              </td>
              <td>{pod.namespace}</td>
              <td>{pod.labels}</td>
              <td>{pod.containers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pods;
