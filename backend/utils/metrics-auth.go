package k8s

import (
	"os"

	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/metrics/pkg/client/clientset/versioned"
)

func MetricsAuth() versioned.Clientset {

	// creates kubeconfig object
	kubeconfig := os.Getenv("KUBECONFIG")
	config, err := clientcmd.BuildConfigFromFlags("", kubeconfig)

	if err != nil {
		panic(err.Error())
	}
	// creates the clientset
	clientset, err := versioned.NewForConfig(config)
	if err != nil {
		panic(err.Error())
	}

	return *clientset

}
