import React, { useEffect, useState } from "react";
import { getKubernetesNamespacedResources } from "../helpers/kubernetes-helpers";
import { transformKubernetesServiceDefinitions } from "../helpers/json-helpers";
import "../styles/services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const namespace = "k8s-go-controller";
  useEffect(() => {
    getKubernetesNamespacedResources("svc", namespace).then((data) => {
      setServices(data.items);
    });
  }, []);

  const transformedPods = transformKubernetesServiceDefinitions(services);

  return (
    <div className="component-services-dashboard-container">
      <h1 className="component-services-dashboard-title">Services</h1>
      <table className="component-services-dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Namespace</th>
            <th>Labels</th>
            <th>Service Type</th>
            <th>Cluster IP</th>
          </tr>
        </thead>
        <tbody>
          {transformedPods.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.namespace}</td>
              <td>{service.labels}</td>
              <td>{service.serviceType}</td>
              <td>{service.clusterIp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
