package k8s

import (
	"github.com/gin-gonic/gin"
	api "github.com/kristof-nyr/k8s-go-demo/api"
)

func MRouter(router *gin.Engine) {

	metrics_api := router.Group("/api/metrics.k8s.io/v1beta1")
	{
		api.MetricsNodes(metrics_api)
		api.MetricsPods(metrics_api)
	}
}
