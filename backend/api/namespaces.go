package k8s

import (
	"github.com/gin-gonic/gin"
	k8s "github.com/kristof-nyr/k8s-go-demo/controllers"
)

func Namespaces(router *gin.RouterGroup) {
	router.GET("", k8s.NamespacesList)
}

func NamespacesInfo(router *gin.RouterGroup) {
	router.GET("/:namespaces", k8s.NamespacesInfo)
}

func Pods(router *gin.RouterGroup) {
	router.GET("/:namespaces/pods", k8s.PodsList)
	router.POST("/:namespaces/pods", k8s.PodsGetSelector)
}

func PodsInfo(router *gin.RouterGroup) {
	router.GET("/:namespaces/pods/:name", k8s.PodsInfo)
}

func PodsInfox(router *gin.RouterGroup) {
	router.GET("/:namespaces/pods/:name/info", k8s.PodsInfo)
}

func ServiceList(router *gin.RouterGroup) {
	router.GET("/:namespaces/svc", k8s.ServiceList)
}

func ServiceInfo(router *gin.RouterGroup) {
	router.GET("/:namespaces/svc/:name", k8s.ServiceInfo)
}

func DeploymentList(router *gin.RouterGroup) {
	router.GET("/:namespaces/deployments", k8s.DeploymentList)
}

func DeploymentInfo(router *gin.RouterGroup) {
	router.GET("/:namespaces/deployments/:name", k8s.DeploymentInfo)
}
