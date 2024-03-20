import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

/**
 * Getter function for non-namespaced resources such as Nodes or Namespaces
 *
 * @param {string} resource
 * @returns {Promise} JSON object of the requested resource
 */
const getKubernetesResources = async (resource) => {
  const response = await axios.get(`${BACKEND_URL}/api/v1/${resource}`);
  return response.data;
};

/**
 * Getter function for namespaced resources such as Pods or Deployments
 *
 * @param {string} resource
 * @param {string} namespace
 * @returns {Promise} JSON object of the requested resource
 */

const getKubernetesNamespacedResources = async (resource, namespace) => {
  const response = await axios.get(
    `${BACKEND_URL}/api/v1/namespaces/${namespace}/${resource}`,
  );
  return response.data;
};

/**
 * Getter function for a specific namespaced resource
 *
 * @param {string} resource
 * @param {string} namespace
 * @param {string} resourceName
 * @returns {Promise} JSON object of the requested resource
 */
const getKubernetesNamespacedResourcesInfo = async (
  resource,
  namespace,
  resourceName,
) => {
  const response = await axios.get(
    `${BACKEND_URL}/api/v1/namespaces/${namespace}/${resource}/${resourceName}`,
  );
  return response.data;
};

/**
 * Getter function for node metrics
 *
 * @returns {Promise} JSON object of the requested resource
 */
const getKubernetesNodeMetrics = async () => {
  const response = await axios.get(
    `${BACKEND_URL}/api/metrics.k8s.io/v1beta1/nodes`,
  );
  return response.data;
};

/**
 * Getter function for pod metrics
 *
 * @param {string} namespace
 * @returns {Promise} JSON object of the requested resource
 */
const getKubernetesPodMetrics = async (namespace) => {
  const response = await axios.get(
    `${BACKEND_URL}/api/metrics.k8s.io/v1beta1/namespaces/${namespace}/pods`,
  );
  return response.data;
};

export {
  getKubernetesResources,
  getKubernetesNamespacedResources,
  getKubernetesNamespacedResourcesInfo,
  getKubernetesNodeMetrics,
  getKubernetesPodMetrics,
};
