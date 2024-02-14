package k8s

import (
	"github.com/gin-gonic/gin"
	metrics "github.com/kristof-nyr/k8s-go-demo/controllers"
)

func MetricsPods(router *gin.RouterGroup) {
	router.GET("/namespaces/:namespaces/pods", metrics.MetricsPods)
}

func MetricsNodes(router *gin.RouterGroup) {
	router.GET("/nodes", metrics.MetricsNodes)
}
