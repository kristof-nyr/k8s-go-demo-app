import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getKubernetesNamespacedResourcesInfo } from "../helpers/kubernetes-helpers";
import { transformKubernetesPodInfoDefinitions } from "../helpers/json-helpers";
import "../styles/podInfo.css";

const PodInfo = () => {
  const { podName } = useParams();
  const [pod, setPod] = useState([]);
  const namespace = "k8s-go-controller";
  useEffect(() => {
    getKubernetesNamespacedResourcesInfo("pods", namespace, podName).then(
      (data) => {
        setPod(data);
      },
    );
  }, [podName]);
  const transformedPod = transformKubernetesPodInfoDefinitions(pod);
  return (
    <div className="component-podinfo-container">
      <h1 className="component-podinfo-title">Pod Info: <span>{podName}</span></h1>
      <div className="component-podinfo-flexbox">
        <div>
          <p>name:</p>
          <p>{transformedPod.name}</p>
        </div>
        <div>
          <p>namespace:</p>
        <p>{transformedPod.namespace}</p>
        </div>
        <div>
          <p>labels:</p>
        <p>{transformedPod.labels}</p>
          </div>
        <div>
          <p>containers:</p>
        <p>{transformedPod.containers}</p>
        </div>
        <div>
        <p>status: </p>
        <p>{transformedPod.status}</p>
        </div>
        <div>
          <p>node name:</p>
        <p>{transformedPod.nodeName}</p>
        </div>
        <div>
          <p>pod ip:</p>
        <p>{transformedPod.podIp}</p>
        </div>
        <div>
          <p>host ip:</p>
        <p>{transformedPod.hostIp}</p>
        </div>
        <div>
          <p>service account:</p>
        <p>{transformedPod.serviceAccount}</p>
        </div>
        <div>
          <p>volume mounts:</p>
        <p>{transformedPod.volumeMounts}</p>
      </div>
      </div>
    </div>
  );
};

export default PodInfo;
