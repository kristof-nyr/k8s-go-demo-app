import React, { useEffect, useState } from "react";
import {
  getKubernetesNodeMetrics,
  getKubernetesPodMetrics,
} from "../helpers/kubernetes-helpers";
import {
  transformKubernetesNodeMetrics,
  transformKubernetesPodMetrics,
} from "../helpers/json-helpers";
import "../styles/metrics.css";

const MetricsDashboard = () => {
  const [metricsData, setMetricsData] = useState({});
  const [metricsDataPods, setMetricsDataPods] = useState({});
  const namespace = "k8s-go-controller";
  
  useEffect(() => {
    getKubernetesNodeMetrics().then((data) => {
      setMetricsData(data);
    });
    getKubernetesPodMetrics(namespace).then((data) => {
      setMetricsDataPods(data);
    });
  }, []);

  const transformedMetrics = transformKubernetesNodeMetrics(metricsData);
  const transformedPodMetrics = transformKubernetesPodMetrics(metricsDataPods);

  return (
    <div className="component-metrics-dashboard-container">
      <h1 className="component-metrics-dashboard-title">
        Kubernetes Node Metrics
      </h1>
      <table className="component-metrics-dashboard-metrics-table">
        <thead>
          <tr>
            <th className="table-header">Node Name</th>
            <th className="table-header">Operating System</th>
            <th className="table-header">OS Architecture</th>
            <th className="table-header">CPU Usage</th>
            <th className="table-header">RAM Usage</th>
          </tr>
        </thead>
        <tbody>
          {transformedMetrics.map((metric, index) => {
            return (
              <tr key={index}>
                <td>{metric.nodeName}</td>
                <td>{metric.operatingSystem}</td>
                <td>{metric.osArchitecture}</td>
                <td>{metric.cpuUsage}</td>
                <td>{metric.memoryUsage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1 className="component-metrics-dashboard-title">
        Kubernetes Pod Metrics in Namespace: {namespace}
      </h1>
      <table className="component-metrics-dashboard-metrics-table">
        <thead>
          <tr>
            <th className="table-header">Pod Name</th>
            <th className="table-header">Container</th>
            <th className="table-header">CPU Usage</th>
            <th className="table-header">RAM Usage</th>
          </tr>
        </thead>
        <tbody>
          {transformedPodMetrics.map((metric, index) => {
            return (
              <tr key={index}>
                <td>{metric.podName}</td>
                <td>{metric.containers}</td>
                <td>{metric.cpuUsage}</td>
                <td>{metric.memoryUsage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MetricsDashboard;
