import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"


export const AppRoutes = (props) => {
    const { routes } = props
    const result = routes.map(route =>
        <Route key={route.title}{...route} />
    )
    return <>{result}</>
}


export const AppLinks = (props) => {
    const { routes, role } = props
    return routes.filter(route => route.isVisible).filter((itr) => itr.showFor === role || itr.showFor === "all").map(route => <Link style={{ color: "black" }}
        to={route.path}>
        <Button key={Route.title} color="inherit">{route.title}
        </Button>
    </Link>
    )
}