import React from "react"
import { connect } from "react-redux"
import { registerUser } from "../../redux/actions"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import { initialState } from "../../redux/interface"
import { state, props } from "./interface"
import '../SignIn/style.css'


class SignIn extends React.Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        this.setState({ [name]: value } as any)
    }


    handleClick = () => {
        this.props.actions.register(this.state)

    }
    handleRedirect = () => {
        const { registerRedirect } = this.props
        const token = localStorage.getItem("token")
        if (registerRedirect) this.props.history.push("/signin")
        if (token) this.props.history.push("/")


    }
    render() {
        const { message } = this.props
        this.handleRedirect()
        return (
            <div className="signStyle">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div >
                        <Typography component="h1" variant="h5">
                            Sign up
                    </Typography>
                        <br />
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        placeholder="First Name"
                                        autoFocus
                                        onChange={this.handleChange}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        placeholder="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        onChange={this.handleChange}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        placeholder="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        placeholder="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                </Grid>
                            </Grid>
                            <span style={{ color: "red" }}> {message}</span>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.handleClick}
                            >
                                Sign Up
                         </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/signin">
                                        Already have an account? Sign in
                             </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5}>
                    </Box>
                </Container>
            </div>
        )
    }

}

const mapStateToProps = (state: initialState) => {

    const { registerRedirect, message } = state.register
    return {
        registerRedirect, message
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            register: (user: object) => dispatch(registerUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


