import React from "react"
import Header from "../Header/Header"
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from "moment";
import { connect } from "react-redux";
import { addVacation } from "../../redux/actions"
import AddVacationModal from "../modals/AddVacation/AddVacationModal"
import { props, state } from "./interface"
import '../SignIn/style.css'


class AddVacation extends React.Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            description: "",
            destination: "",
            image: "",
            from: "",
            until: "",
            price: ""
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        this.setState({ [name]: value } as any)
    }

    handleClick = () => {
        this.props.actions.addVacation(this.state)
    }
    cleanState = () => {
        this.setState({
            description: "",
            destination: "",
            image: "",
            from: "",
            until: "",
            price: ""
        })
    }

    handleDate = () => {
        const date = moment().format("YYYY-MM-DD")
        this.setState({ from: date, until: date })
    }

    render() {
        const { description, destination, image, from, until, price } = this.state
        if (!from || !until) this.handleDate()
        return (
            <div style={{ margin: "25px" }}>
                <div className="signStyle" style={{ height: "300px" }}>
                    <Header header="Add Vactaion" />
                    <form noValidate autoComplete="off">
                        <div>
                            <TextField
                                id="standard-multiline-flexible"
                                label="description"
                                multiline
                                rowsMax="4"
                                name="description"
                                onChange={this.handleChange}
                                value={description}
                            />
                            <TextField
                                id="standard-textarea"
                                label="destination"
                                multiline
                                name="destination"
                                onChange={this.handleChange}
                                value={destination}
                            />
                            <TextField
                                id="standard-textarea"
                                label="image"
                                multiline
                                name="image"
                                onChange={this.handleChange}
                                value={image}
                            />
                            <br></br>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <TextField
                                    id="standard-multiline-flexible"
                                    rowsMax="4"
                                    name="from"
                                    type="date"
                                    onChange={this.handleChange}
                                    value={from}
                                    label="from"
                                />
                                <TextField
                                    id="standard-textarea"
                                    name="until"
                                    type="date"
                                    onChange={this.handleChange}
                                    value={until}
                                    label="until"

                                />
                            </MuiPickersUtilsProvider>
                            <TextField
                                id="standard-textarea"
                                label="price"
                                multiline
                                name="price"
                                onChange={this.handleChange}
                                value={price}
                            />
                            <br></br>
                            <AddVacationModal vacation={this.state} cleanState={this.cleanState} />
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}


const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            addVacation: (vacationObj: object) => { dispatch(addVacation(vacationObj)) }
        }
    }
}



export default connect(null, mapDispatchToProps)(AddVacation)








