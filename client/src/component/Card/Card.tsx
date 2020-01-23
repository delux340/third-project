import React from "react"
import '../Vacations/style.css';
import { connect } from "react-redux"
import { CardTypes, props, state } from "./interface"
import { followVacation } from "../../redux/actions"
import { Checkbox } from "@material-ui/core";

class Card extends React.Component<any, state> {
    constructor(props: any) {
        super(props)
    }

    handeFollow = (e: any) => {
        const { checked } = e.target
        const {id} = this.props.vacation
           this.props.actions.follow(checked,id)
    }



    render() {
        const { vacation } = this.props
        return (
            <div className="row" >
                <div className="divStyle box col-6" >
                    <div className="card cardStyle">
                        <img src={vacation.image} className="card-img-top imageStyle"></img>
                        <div className="card-body">
                            <p className="card-title"><b>Description:</b> {vacation.description}</p>
                            <p className="card-text"><b>Destination:</b> {vacation.destination}</p>
                            <p className="card-text"><b>From:</b> {vacation.from}</p>
                            <p className="card-text"><b>Until:</b>{vacation.until}</p>
                            <p className="card-text"><b>Price:</b> {vacation.price}</p>
                            <p className="card-text"><b>Followers:</b> {vacation.followers}</p>
                            
                            <Checkbox onChange={this.handeFollow} className="btn btn-primary">Follow</Checkbox>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}



const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            follow: () => dispatch(followVacation())
        }
    }

}








export default connect(null, mapDispatchToProps)(Card)




