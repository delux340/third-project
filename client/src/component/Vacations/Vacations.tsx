import React from "react"
import { connect } from "react-redux"
import { getAllVacations } from "../../redux/actions"
import UserCard from "../UserCard/UserCard"
import AdminCard from "../AdminCard/AdminCard"
import Header from "../Header/Header"
import { CardTypes } from "../UserCard/interface"
import { initialState } from "../../redux/interface"

// interface state { }
// interface props { actions: { vacations: Function }, vacations: Array<object>, role: string }
//change


class Vacations extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }

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
                    {vacations.map((itr: CardTypes) => {
                        return (
                            <CardRole key={itr.id} vacation={itr} />)
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












