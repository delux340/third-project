import React from "react"
import { connect } from "react-redux"
import { props, state } from "./interface"
import { followVacation } from "../../redux/actions"
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import '../Vacations/style.css';

class UserCard extends React.Component<props, state> {

    handeFollow = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        const { id } = this.props.vacation
        this.props.actions.follow(id, checked)
    }

    render() {
        const { vacation } = this.props
        console.log(vacation.is_following)
        const followed = vacation.is_following ? true : false
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" >
                <div className="card cardStyle">
                    <img src={vacation.image} className="card-img-top imageStyle" alt=""></img>
                    <div className="card-body">
                        <p className="card-title"><b>Description:</b> {vacation.description}</p>
                        <p className="card-text"><b>Destination:</b> {vacation.destination}</p>
                        <p className="card-text"><b>From:</b> {vacation.from}</p>
                        <p className="card-text"><b>Until:</b>{vacation.until}</p>
                        <p className="card-text"><b>Price:</b> {vacation.price}</p>
                        <p className="card-text"><b>Followers:</b> {vacation.followers_count}</p>
                        <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                            checked={followed} onChange={this.handeFollow} />} label="" />
                    </div>
                </div>
            </div>

        )
    }

}



const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            follow: (vacation_id: number, isFollowed: boolean) => dispatch(followVacation(vacation_id, isFollowed))
        }
    }
}

export default connect(null, mapDispatchToProps)(UserCard)




