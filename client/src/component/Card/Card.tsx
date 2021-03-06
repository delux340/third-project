import React, { ChangeEvent } from "react"
import '../Vacations/style.css';
import { connect } from "react-redux"
import { CardTypes, props, state } from "./interface"
import { followVacation } from "../../redux/actions"
import { Checkbox } from "@material-ui/core";

class Card extends React.Component<any, state> {

    handeFollow = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        const { id } = this.props.vacation
        this.props.actions.follow(checked, id)
    }

    render() {
        const { vacation } = this.props
        const followed = vacation.is_following ? true : false
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
                        <Checkbox checked={followed} onChange={this.handeFollow} className="btn btn-primary">Follow</Checkbox>
                    </div>
                </div>
            </div>

        )
    }

}



const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            follow: (vacation_id: string, isFollowed: boolean) => dispatch(followVacation(isFollowed, vacation_id))
        }
    }

}








export default connect(null, mapDispatchToProps)(Card)




