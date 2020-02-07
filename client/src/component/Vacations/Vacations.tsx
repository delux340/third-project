import React from "react"
import { connect } from "react-redux"
import { getAllVacations } from "../../redux/actions"
import Card from "../Card/Card"
import AdminCard from "../AdminCard/AdminCard"
import Header from "../Header/Header"
import { CardTypes } from "../Card/interface"

class Vacations extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            vacationsData: []
        }

    }
    componentDidMount() {
        const { vacations } = this.props.actions
        vacations()
    }

    render() {
        let { vacations } = this.props
        vacations = Array.isArray(vacations) ? vacations : []
        const { role } = this.props
        if (role === "admin") {
            return (
                <div >
                    <Header header="Vacations" />
                    <div className="row">
                        {vacations.map((itr: CardTypes) => {
                            return (
                                <AdminCard key={itr.id} vacation={itr} />)
                        })}
                    </div></div>
            )
        } else {
            return (
                <div>
                    <Header header="Vacations" />
                    <div className="row">
                        {vacations.map((itr: CardTypes) => {
                            return (<Card key={itr.id} vacation={itr} />)
                        })}
                    </div></div>
            )
        }

    }
}

const mapStateToProps = (state: any) => {
    const { vacations } = state
    return {
        vacations
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            vacations: () => dispatch(getAllVacations())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Vacations)












