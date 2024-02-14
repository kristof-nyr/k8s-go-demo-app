package k8s

import (
	"github.com/gin-gonic/gin"
	k8s "github.com/kristof-nyr/k8s-go-demo/controllers"
)

// API Nodes Routers
func NodesList(router *gin.RouterGroup) {
	router.GET("", k8s.NodeList)
}

func NodesInfo(router *gin.RouterGroup) {
	router.GET("/:name", k8s.NodeInfo)
}
