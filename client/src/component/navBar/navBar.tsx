import React from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { logout } from "../../redux/actions"
import { routes } from "../appRouter/routers.config"
import { AppLinks } from "../appRouter/appRouter"
import { initialState } from "../../redux/interface"

class Navbar extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }

    render() {
        const token = localStorage.getItem("token")
        const { role } = this.props
        let Authroutes = token ?
            <>
                <button onClick={() => this.props.actions.logout()} className="btn" style={{ backgroundColor: "#3f51b5" }} > <Link style={{ color: "black" }} to="/signin">Sign out</Link></button>
            </> :
            <Link style={{ color: "black" }} to="/signin">
                <button className="btn" style={{ backgroundColor: "#3f51b5" }}> Sign in</button></Link>
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
                        {Authroutes}
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state: initialState) => {

    const { role, message } = state.login
    return {
        role, message
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