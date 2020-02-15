import React from "react";
import { Redirect } from "react-router-dom"
import mainAxios from "../axios/axios";

//types
export const verficationWrapper = (WrappedComponent: any, adminRequierd: boolean) => {
    class VerificationHOCValidator extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            this.state = {
                verified: false,
                isLoading: true,
                role: ""
            }
        }


        verifyUser = async () => {
            const data = await mainAxios.get('verify');
            return data
        }

        async componentWillMount() {
            try {
                console.log("Try")
                const { status, role } = await this.verifyUser()
                this.setState((previousState: any, currentProps: any) => {
                    return { ...previousState, verified: status, isLoading: false, role };
                });

            }
            catch (err) {
                console.log("catch")
                return this.setState({ verified: false, isLoading: false, role: "" })
            }
        }

        render() {
            const { isLoading, verified, role } = this.state
            console.log(this.state)

            if (isLoading) return <div className="loader">Loading...</div>

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




