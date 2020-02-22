import React from "react"
import SignUp from "../SignUp/SignUp"
import Vacations from "../Vacations/Vacations"
import AddVacation from "../AddVacation/AddVacation"
import Charts from "../charts/Chart"
import { verficationWrapper } from './auth'

export const routes = [

    { showFor: "none", exact: true, isVisible: false, title: "Sign up", path: "/signup", component: SignUp },
    {
        showFor: "all", exact: true, isVisible: true, title: "Vacations", path: "/", component: (props) => {
            const adminRequierd = false
            const VerificationHOCValidator = verficationWrapper(Vacations)
            return <VerificationHOCValidator {...props} adminRequierd={adminRequierd} />
        }
    },
    {
        showFor: "admin", exact: true, isVisible: true, title: "Add Vacation", path: "/addvacation", component: (props) => {
            const adminRequierd = true
            const VerificationHOCValidator = verficationWrapper(AddVacation)
            return <VerificationHOCValidator {...props} adminRequierd={adminRequierd} />

        }

    },
    {
        showFor: "admin", exact: true, isVisible: true, title: "Charts", path: "/charts", component: (props) => {
            const adminRequierd = true
            const VerificationHOCValidator = verficationWrapper(Charts)
            return <VerificationHOCValidator {...props} adminRequierd={adminRequierd} />
        }
    }

]



