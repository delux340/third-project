import React from "react";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { verifyToken } from "../../redux/actions"
import mainAxios from "../axios/axios";

// export const verficationWrapper = (WrappedComponent: any) => {

//     class VerificationHOCValidator extends React.Component<any, any> {
//         constructor(props: any) {
//             super(props);
//             this.state = {
//                 isLoading: false
//             }
//         }




//          componentDidMount() {
//             this.props.actions.verifyToken()
//             this.setState({ isLoading: true })

//         }

//         render() {
//             if (this.state.isLoading) return <div className="loader">Loading...</div>
//             if (!this.props.validatedStatus) return <Redirect to="/signIn" />
//             return <WrappedComponent {...this.props} />
//         }
//     }


//     const mapDispatchToProps = (dispatch: any) => {
//         return {
//             actions: {
//                 verifyToken: () => { dispatch(verifyToken()) }
//             }
//         }
//     }

//     const mapStateToProps = (state: any) => {
//         const { validatedStatus } = state
//         return {
//             validatedStatus
//         }
//     }

//     return connect(mapStateToProps, mapDispatchToProps)(VerificationHOCValidator);
// }


export const verficationWrapper = (WrappedComponent: any, adminRequierd: boolean) => {
    class VerificationHOCValidator extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            this.state = {
                verified: false,
                isLoading: false,
                role: ""
            }
        }


        verifyUser = () => {
            return mainAxios.get('verify');
        }

        componentWillMount() {
            // const { validatedStatus } = this.props
            this.setState({ isLoading: true })
            this.verifyUser()
                .then((result: any) => {
                    const { status, role } = result.data;
                    this.setState((previousState: any, currentProps: any) => {
                        return { ...previousState, verified: status, isLoading: false, role };
                    });
                })
        }

        render() {
            if (this.state.isLoading) return <div className="loader">Loading...</div>

            if (!this.state.verified) {
                localStorage.setItem("token", "")
                return <Redirect to="/signIn" />

            } else {
                const { role } = this.state
                const { adminRequierd } = this.props
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




