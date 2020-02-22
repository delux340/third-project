import React from "react"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";
import { removeVacation } from "../../../redux/actions"
import { state, props } from "./interface"


class DeleteModal extends React.Component<props, state> {
    constructor(props: props) {
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
    deleteVacation = () => {
        const { removeVacation } = this.props.actions
        const { id } = this.props
        removeVacation(id)
    };

    render() {
        const { open } = this.state
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    delete
                    </Button>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">are you sure you want to delete </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            by clicking yes you are willing to delete
                     </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.deleteVacation} color="primary">
                            Delete
                       </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Cancle
                      </Button>
                    </DialogActions>
                </Dialog>
            </div >
        )
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            removeVacation: (vacationId: number) => { dispatch(removeVacation(vacationId)) }
        }
    }

}


export default connect(null, mapDispatchToProps)(DeleteModal)

