import React, { ChangeEvent } from "react"
import '../Vacations/style.css';
import { connect } from "react-redux"
import { CardTypes, props, state } from "./interface"
import { removeVacation } from "../../redux/actions"
import DeleteModal from "../modals/DeleteModal"
import Editmodal from "../modals/EditModal"

class AdminCard extends React.Component<any, state> {


    render() {
        const { vacation } = this.props
        const { id } = vacation
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" >
                <div className="card cardStyle">
                    <img src={vacation.image} className="card-img-top imageStyle"></img>
                    <div className="card-body">
                        <p className="card-title"><b>Description:</b> {vacation.description}</p>
                        <p className="card-text"><b>Destination:</b> {vacation.destination}</p>
                        <p className="card-text"><b>From:</b> {vacation.from}</p>
                        <p className="card-text"><b>Until:</b>{vacation.until}</p>
                        <p className="card-text"><b>Price:</b> {vacation.price}</p>
                        <p className="card-text"><b>Followers:</b> {vacation.followers_count}</p>
                        <Editmodal  vacation={vacation} />
                        <DeleteModal id={id} />
                    </div>
                </div></div>
        )
    }

}



// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         actions: {
//             removeVacation: (vacationId: any) => { dispatch(removeVacation(vacationId)) }
//         }
//     }

// }








export default connect(null, null)(AdminCard)




