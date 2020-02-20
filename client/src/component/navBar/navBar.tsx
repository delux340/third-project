import React from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { logout } from "../../redux/actions"
import { routes } from "../appRouter/routers.config"
import { AppLinks } from "../appRouter/appRouter"
import { initialState } from "../../redux/interface"
import { state, props } from "./interface"


class Navbar extends React.Component<props, state>{

    handleRoutes = () => {
        const token = localStorage.getItem("token")
        console.log("navbar")
        if (token) {
            return <Link style={{ color: "black" }} to="/signin"> <button onClick={() => this.props.actions.logout()}
                className="btn" style={{ backgroundColor: "#3f51b5" }} >
                Sign out</button></Link>
        } else {
            return <Link style={{ color: "black" }} to="/signin"><button className="btn" style={{ backgroundColor: "#3f51b5" }}> Sign in</button></Link>
        }
    }



    render() {
        const { role, first_name } = this.props
        let Authroutes = this.handleRoutes()

        return (
            <div style={{ backgroundColor: "#3f51b5" }}>
                <nav className="navbar navbar-expand-lg navbar-primary">
                    <span className="navbar-brand" >Vacations</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <AppLinks routes={routes} role={role} />
                        </ul>
                        <span style={{ textTransform: "capitalize" }}>{first_name}</span>
                        {Authroutes}
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state: initialState) => {
    let { role, first_name } = state.login
    first_name = first_name ? `hello ${first_name}` : ""
    return {
        role, first_name
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            logout: () => dispatch(logout())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar)