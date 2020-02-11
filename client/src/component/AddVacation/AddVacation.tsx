import React from "react"
import Header from "../Header/Header"
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


import '../SignIn/style.css'
import { connect } from "react-redux";
import { addVacation } from "../../redux/actions"
import AddVacationModal from "../modals/AddVacationModal"



class AddVacation extends React.Component<any, any>{
    constructor(props: any) {
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
    handleChange = (e: any) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
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
    render() {
        const { description, destination, image, from, until, price } = this.state

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
                                placeholder="Placeholder"
                                multiline
                                name="destination"
                                onChange={this.handleChange}
                                value={destination}

                            />
                            <TextField
                                id="standard-textarea"
                                label="image"
                                placeholder="Placeholder"
                                multiline
                                name="image"
                                onChange={this.handleChange}
                                value={image}

                            />
                            <br></br><br></br><br></br>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="from"
                                    multiline
                                    rowsMax="4"
                                    name="from"
                                    type="date"
                                    onChange={this.handleChange}
                                    value={from}

                                />
                                <TextField
                                    id="standard-textarea"
                                    label="until"
                                    placeholder="Placeholder"
                                    multiline
                                    name="until"
                                    type="date"
                                    onChange={this.handleChange}
                                    value={until}
                                />
                            </MuiPickersUtilsProvider>

                            <TextField
                                id="standard-textarea"
                                label="price"
                                placeholder="Placeholder"
                                multiline
                                name="price"
                                onChange={this.handleChange}
                                value={price}
                            />
                            <br></br><br></br><br></br>
                            <AddVacationModal vacation={this.state} cleanState={this.cleanState} />
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            addVacation: (vacationObj: any) => { dispatch(addVacation(vacationObj)) }
        }
    }
}



export default connect(null, mapDispatchToProps)(AddVacation)








