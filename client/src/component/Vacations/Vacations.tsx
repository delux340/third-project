import React from "react"
import { connect } from "react-redux"
import { getAllVacations } from "../../redux/actions"
import Card from "../Card/Card"
import Header from "../Header/Header"

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
        return (
            <div>
                <Header header="Vacations" />
                {vacations.map((itr: any) => {
                    return (<Card vacation={itr} />)
                })}
            </div>
        )
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












