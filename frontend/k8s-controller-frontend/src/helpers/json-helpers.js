const transformKubernetesNodeMetrics = (data) => {
  let metricsObject = [];
  // Handle pre-hyrdated content rendering
  // The case when the raw html is first rendered, afterwards the page will get hydrated with by JS
  if (data.items) {
    data.items.forEach((metricItem) => {
      metricsObject.push({
        nodeName: metricItem.metadata.name,
        operatingSystem: metricItem.metadata.labels["kubernetes.io/os"],
        osArchitecture: metricItem.metadata.labels["kubernetes.io/arch"],
        cpuUsage: metricItem.usage.cpu,
        memoryUsage: metricItem.usage.memory,
      });
    });
  }
  return metricsObject;
};

const transformKubernetesPodMetrics = (data) => {
  let metricsObject = [];
  if (data.items) {
    data.items.forEach((metricItem) => {
      metricsObject.push({
        podName: metricItem.metadata.name,
        containers: metricItem.containers[0].name,
        cpuUsage: metricItem.containers[0].usage.cpu,
        memoryUsage: metricItem.containers[0].usage.memory,
      });
    });
  }
  return metricsObject;
};

const transformKubernetesPodDefinitions = (data) => {
  let podDefinitions = [];
  data.forEach((podDefinition) => {
    podDefinitions.push({
      name: podDefinition.metadata.name,
      namespace: podDefinition.metadata.namespace,
      labels: JSON.stringify(podDefinition.metadata.labels),
      containers: podDefinition.spec.containers[0].image,
    });
  });

  return podDefinitions;
};

const transformKubernetesServiceDefinitions = (data) => {
  let serviceDefinitions = [];
  data.forEach((serviceDefinition) => {
    serviceDefinitions.push({
      name: serviceDefinition.metadata.name,
      namespace: serviceDefinition.metadata.namespace,
      labels: JSON.stringify(serviceDefinition.metadata.labels),
      serviceType: serviceDefinition.spec.type,
      clusterIp: serviceDefinition.spec.clusterIP,
    });
  });
  return serviceDefinitions;
};

const transformKubernetesDeploymentDefinitions = (data) => {
  let deploymentDefinitions = [];
  data.forEach((deploymentDefinition) => {
    deploymentDefinitions.push({
      name: deploymentDefinition.metadata.name,
      namespace: deploymentDefinition.metadata.namespace,
      labels: JSON.stringify(deploymentDefinition.metadata.labels),
      replicas: deploymentDefinition.spec.replicas,
      availableReplicas: deploymentDefinition.status.availableReplicas,
    });
  });
  return deploymentDefinitions;
};

const transformKubernetesNamespaceDefinitions = (data) => {
  let namespaceDefinitions = [];
  data.forEach((namespaceDefinition) => {
    namespaceDefinitions.push({
      name: namespaceDefinition.metadata.name,
      labels: JSON.stringify(namespaceDefinition.metadata.labels),
      status: namespaceDefinition.status.phase,
    });
  });
  return namespaceDefinitions;
};

const transformKubernetesPodInfoDefinitions = (data) => {
  let podInfoDefinition = {};
  if (data.metadata) {
    podInfoDefinition = {
      name: data.metadata.name,
      uid: data.metadata.uid,
      ownerReferences: JSON.stringify(data.metadata.ownerReferences),
      namespace: data.metadata.namespace,
      labels: JSON.stringify(data.metadata.labels),
      containers: data.spec.containers[0].image,
      volumeMounts: JSON.stringify(data.spec.containers[0].volumeMounts),
      serviceAccount: data.spec.serviceAccountName,
      nodeName: data.spec.nodeName,
      hostIp: data.status.hostIP,
      podIp: data.status.podIP,
      status: data.status.phase,
    };
  }
  return podInfoDefinition;
};

export {
  transformKubernetesNodeMetrics,
  transformKubernetesPodMetrics,
  transformKubernetesPodDefinitions,
  transformKubernetesServiceDefinitions,
  transformKubernetesDeploymentDefinitions,
  transformKubernetesNamespaceDefinitions,
  transformKubernetesPodInfoDefinitions,
};
