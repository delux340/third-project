import React from "react";
import { Redirect } from "react-router-dom"
import mainAxios from "../axios/axios";
import { state, props } from "./interface"
import "./auth.css"



//React.ComponentType

export const verficationWrapper = (WrappedComponent:any , adminRequierd: boolean) => {
    class VerificationHOCValidator extends React.Component<props, state> {
        constructor(props: props) {
            super(props);
            this.state = {
                verified: false,
                isLoading: true,
                role: ""
            }
        }

        verifyUser = async () => {
            const { data } = await mainAxios.get('verify');
            return data
        }

        async componentWillMount() {
            try {
                const { status, role } = await this.verifyUser()
                this.setState((previousState: any, currentProps: any) => {
                    return { ...previousState, verified: status, isLoading: false, role };
                });
            }
            catch (err) {
                return this.setState({ verified: false, isLoading: false, role: "" })
            }
        }

        render() {
            const { isLoading, verified, role } = this.state
            const { adminRequierd } = this.props
            if (isLoading) return <div className="loader spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            if (!verified) {
                localStorage.setItem("token", "")
                return <Redirect to="/signIn" />
            } else {
                if (adminRequierd && role === "admin" || !adminRequierd) {
                    return <WrappedComponent {...this.props} role={role} />
                } else {
                    return <Redirect to="/" />
                }

            }
        }
    }

    return VerificationHOCValidator;
}




