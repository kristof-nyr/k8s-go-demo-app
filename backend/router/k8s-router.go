package k8s

import (
	"github.com/gin-gonic/gin"
	api "github.com/kristof-nyr/k8s-go-demo/api"
)

func LRouter(router *gin.Engine) {

	namespaces_api := router.Group("/api/v1/namespaces")
	{
		api.Namespaces(namespaces_api)
		api.NamespacesInfo(namespaces_api)

		api.Pods(namespaces_api)
		api.PodsInfo(namespaces_api)
		api.PodsInfox(namespaces_api)

		api.DeploymentList(namespaces_api)
		api.DeploymentInfo(namespaces_api)

		api.ServiceList(namespaces_api)
		api.ServiceInfo(namespaces_api)
	}

	nodes_api := router.Group("/api/v1/nodes")
	{
		api.NodesList(nodes_api)
		api.NodesInfo(nodes_api)
	}

}
