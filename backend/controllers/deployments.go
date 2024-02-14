package k8s

import (
	"context"

	"github.com/gin-gonic/gin"
	utils "github.com/kristof-nyr/k8s-go-demo/utils"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func DeploymentList(c *gin.Context) {

	namespace := c.Param("namespaces")

	clientset := utils.KubernetesAuth()

	data, err := clientset.AppsV1().Deployments(namespace).List(context.TODO(), metav1.ListOptions{})

	if err != nil {
		panic(err.Error())
	}

	c.JSON(200, data)
}

func DeploymentInfo(c *gin.Context) {

	namespace := c.Param("namespaces")
	name := c.Param("name")

	clientset := utils.KubernetesAuth()

	data, err := clientset.AppsV1().Deployments(namespace).Get(context.TODO(), name, metav1.GetOptions{})

	if err != nil {
		panic(err.Error())
	}

	c.JSON(200, data)
}
