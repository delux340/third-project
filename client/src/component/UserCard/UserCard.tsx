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
        const { is_following, image, description, destination, from, until, price, followers_count } = this.props.vacation
        const followed = is_following ? true : false
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" >
                <div className="card cardStyle">
                    <img src={image} className="card-img-top imageStyle" alt=""></img>
                    <div className="card-body">
                        <p className="card-title"><b>Description:</b> {description}</p>
                        <p className="card-text capital"><b>Destination:</b> {destination}</p>
                        <p className="card-text"><b>From:</b> {from}</p>
                        <p className="card-text"><b>Until:</b>{until}</p>
                        <p className="card-text"><b>Price:</b> {price}</p>
                        <p className="card-text"><b>Followers:</b> {followers_count}</p>
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




