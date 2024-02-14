package k8s

import (
	"context"

	"github.com/gin-gonic/gin"
	utils "github.com/kristof-nyr/k8s-go-demo/utils"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func NamespacesList(c *gin.Context) {

	clientset := utils.KubernetesAuth()
	data, err := clientset.CoreV1().Namespaces().List(context.TODO(), metav1.ListOptions{})
	if err != nil {
		panic(err.Error())
	}

	c.JSON(200, data)
}

func NamespacesInfo(c *gin.Context) {
	name := c.Param("namespaces")
	clientset := utils.KubernetesAuth()
	data, err := clientset.CoreV1().Namespaces().Get(context.TODO(), name, metav1.GetOptions{})
	if err != nil {
		panic(err.Error())
	}

	c.JSON(200, data)
}
