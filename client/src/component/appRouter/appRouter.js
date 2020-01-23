import React from "react";
import { Route } from "react-router-dom";
import {Link} from "react-router-dom"
import {Button} from "@material-ui/core"


export const AppRoutes = (props) => {
    const { routes } = props
    const result = routes.map(route =>
        <Route {...route} />
    )
    return <>{result}</>
}


export const AppLinks = (props) => {
    const { routes } = props
    return routes.filter(route => route.isVisible).map(route => <Button style={{width:"90px"}}color="inherit">
        <Link style={{ color: "black" }} to={route.path}>{route.title}</Link>
    </Button>)
}