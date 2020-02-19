import React from "react"
import { connect } from "react-redux"
import { getAllVacations } from "../../redux/actions"
import UserCard from "../UserCard/UserCard"
import AdminCard from "../AdminCard/AdminCard"
import Header from "../Header/Header"
import { initialState } from "../../redux/interface"
import { state, props } from "./interface"



class Vacations extends React.Component<props, state>{

    componentDidMount() {
        const { vacations } = this.props.actions
        vacations()
    }

    handleVacations = () => {
        let { vacations } = this.props
        return vacations = Array.isArray(vacations) ? vacations : []
    }

    handleRole = () => {
        const { role } = this.props
        return role === "admin" ? AdminCard : UserCard
    }

    render() {
        const CardRole = this.handleRole()
        const vacations = this.handleVacations()
        return (
            <div>
                <Header header="Vacations" />
                <div className="row">
                    {vacations.map((itr) => {
                        return (
                            <CardRole key={itr.id} vacation={itr} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: initialState) => {
    const { vacations } = state
    const { role } = state.login
    return {
        vacations, role
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            vacations: () => dispatch(getAllVacations())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Vacations)









