import React from "react"
import {headerProps} from "./interface"


const Header = (props: headerProps) => {
    return (
        <div><h1>{props.header}</h1></div>
    )
}

export default Header


