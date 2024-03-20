
import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../components/Home"))
const Pods = React.lazy(() => import("../components/Pods"))
const Deployments = React.lazy(() => import("../components/Deployments"))
const Services = React.lazy(() => import("../components/Services"))
const Namespaces = React.lazy(() => import("../components/Namespaces"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.PODS, element: <Pods /> },
    { path: PathConstants.DEPLOYMENTS, element: <Deployments /> },
    { path: PathConstants.SERVICES, element: <Services /> },
    { path: PathConstants.NAMESPACES, element: <Namespaces /> },
]

export default routes