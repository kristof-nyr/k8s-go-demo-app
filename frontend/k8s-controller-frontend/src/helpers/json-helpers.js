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

export { transformKubernetesNodeMetrics };
