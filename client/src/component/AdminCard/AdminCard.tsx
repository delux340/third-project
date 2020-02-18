import React from "react"
import '../Vacations/style.css';
import { props, state } from "./interface"
import DeleteModal from "../modals/DeleteModal/DeleteModal"
import Editmodal from "../modals/EditModal/EditModal"

class AdminCard extends React.Component<props, state> {

    render() {
        const { vacation} = this.props
        console.log(this)
        const { id, image, description, destination, from, until, price, followers_count } = vacation
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" >
                <div className="card cardStyle">
                    <img src={image} className="card-img-top imageStyle"></img>
                    <div className="card-body">
                        <p className="card-title"><b>Description:</b> {description}</p>
                        <p className="card-text"><b>Destination:</b> {destination}</p>
                        <p className="card-text"><b>From:</b> {from}</p>
                        <p className="card-text"><b>Until:</b>{until}</p>
                        <p className="card-text"><b>Price:</b> {price}</p>
                        <p className="card-text"><b>Followers:</b> {followers_count}</p>
                        <Editmodal vacation={vacation} />
                        <DeleteModal id={id} />
                    </div>
                </div></div>
        )
    }

}











export default AdminCard




