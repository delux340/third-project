import React from "react"
import Header from "../../Header/Header"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editVacation } from "../../../redux/actions"
import { state, props } from "./interface"

class EditModal extends React.Component<props, state> {
    constructor(props: any) {
        super(props)
        this.state = {
            open: false,
            vacation: {
                description: "",
                destination: "",
                image: "",
                from: "",
                until: "",
                price: ""
            }
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });

    };

    handleClose = () => {
        this.setState({ open: false });

    };

    handleChange = (e: any) => {
        const { value, name } = e.target
        const { vacation } = this.state
        this.setState({ vacation: { ...vacation, [name]: value } })
    }

    handleClick = () => {
        const { vacation } = this.state
        const { description, destination, image, from, until, price, } = vacation
        if (!description || !destination || !image || !from || !until || !price) {
            return
        }
        this.props.actions.editVacation(vacation)
        this.setState({ open: false });

    }

    componentDidMount() {
        const { vacation } = this.props
        this.setState({
            vacation: vacation
        })
    }

    render() {
        const { open } = this.state
        const { description, destination, image, from, until, price, } = this.state.vacation
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Edit</Button>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <div style={{ display: "flex", flexWrap: "wrap", margin: "25px" }}>
                                <Header header="Edit Vactaion" />
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
                                        <TextField
                                            id="standard-multiline-flexible"
                                            label="from"
                                            multiline
                                            rowsMax="4"
                                            name="from"
                                            onChange={this.handleChange}
                                            value={from}
                                        />
                                        <TextField
                                            id="standard-textarea"
                                            label="until"
                                            placeholder="Placeholder"
                                            multiline
                                            name="until"
                                            onChange={this.handleChange}
                                            value={until}
                                        />
                                        <TextField
                                            id="standard-textarea"
                                            label="price"
                                            placeholder="Placeholder"
                                            multiline
                                            name="price"
                                            onChange={this.handleChange}
                                            value={price}
                                        />
                                    </div>
                                </form>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClick} color="primary" autoFocus>
                            confirm
                                  </Button>
                        <Button onClick={this.handleClose} color="primary">
                            cancle
                                   </Button>

                    </DialogActions>
                </Dialog>
            </div >
        )
    }
}





const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            editVacation: (vacationObj: any) => { dispatch(editVacation(vacationObj)) }
        }
    }


}


export default connect(null, mapDispatchToProps)(EditModal)
















