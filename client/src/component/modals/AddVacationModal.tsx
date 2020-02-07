import React from "react"
import Header from "../Header/Header"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { TextField, DialogTitle } from "@material-ui/core";
import { connect } from "react-redux";
import { addVacation } from "../../redux/actions"
import { Link } from "react-router-dom";


class AddVacationModal extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            open: false
        }

    }

    handleClickOpen = () => {
        this.setState({ open: true });

    };

    handleClose = () => {
        this.setState({ open: false });

    };

    handleVacation = () => {
        const { addVacation } = this.props.actions
        const { vacation } = this.props
        addVacation(vacation)
        this.setState({ open: true });

    }

    handleAddVacation = () => {
        const { cleanState } = this.props
        this.setState({ open: false });
        cleanState()
    }

    render() {
        const { open } = this.state

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleVacation}>
                    add vacation
                     </Button>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title"> vacation upload successfully </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            you want to add another vacation?
                              </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleAddVacation} color="primary">
                            add
                      </Button>
                        <Link to="/vacations">
                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                back to vacation
                         </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </div >
        )
    }
}



const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            addVacation: (vacationObj: any) => { dispatch(addVacation(vacationObj)) }

        }
    }
}



export default connect(null, mapDispatchToProps)(AddVacationModal)
















