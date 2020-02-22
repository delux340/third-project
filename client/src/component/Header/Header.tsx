import React from "react"
import { headerProps } from "./interface"
import "./Header.css"

const Header = (props: headerProps) => {
    return (
        <div >
            <h1 className="header">{props.header}</h1>
        </div>
    )
}

export default Header


