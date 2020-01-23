import React from "react"

interface headerProps {
    header: string
}

const Header = (props: headerProps) => {
    return (
        <div><h1>{props.header}</h1></div>
    )
}

export default Header


