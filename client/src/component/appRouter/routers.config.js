import React from "react"
import Home from "../Home/Home"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/SignUp"
import Vacations from "../Vacations/Vacations"
import { verficationWrapper } from './auth'

export const routes = [
    { exact: true, isVisible: false, title: "Sign up", path: "/signup", component: SignUp },
    { exact: true, isVisible: true, title: "Home", path: "/", component: Home },
    {
        exact: true, isVisible: true, title: "Vacations", path: "/vacations", component: (props) => {
            const VerificationHOCValidator = verficationWrapper(Vacations)
            return <VerificationHOCValidator {...props} />
        }
    }

]



