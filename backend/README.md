# Go REST API backend client for communicating with k8s

This is a POC backend server for deploying via Jenkins

## Endpoints

`GET /api/v1/nodes`

`GET /api/v1/namespaces`

`GET /api/v1/namespaces/:namespace/pods`

`GET /api/v1/namespaces/:namespace/pods/:name`

`GET /api/v1/namespaces/:namespace/pods/:name/info`

`GET /api/v1/namespaces/:namespace/svc`

`GET /api/v1/namespaces/:namespace/svc:name`

`GET /api/v1/namespaces/:namespace/deployments`

`GET /api/v1/namespaces/:namespace/deployments:name`

## Metrics

`GET api/metrics.k8s.io/v1beta1/nodes`

`GET api/metrics.k8s.io/v1beta1/namespaces/:namespace/pods`
