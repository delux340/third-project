import React from "react"
import { connect } from "react-redux"
import { loginUser, resetRedirect } from "../../redux/actions"
import { initialState } from "../../redux/interface";
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { state, props } from "./interface"
import './style.css';

class SignIn extends React.Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        this.setState({ [name]: value } as any)
    }

    handleClick = () => {
        const { email, password, } = this.state
        if (!email || !password) return
        this.props.actions.login(this.state)
    }

    handleRedirect = () => {
        const token = localStorage.getItem("token")
        if (token) this.props.history.push("/")
    }

    render() {
        const { message } = this.props
        this.handleRedirect()
        this.props.actions.redirectReset()
        return (
            <div className="signStyle">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div >
                        <Typography component="h1" variant="h5">
                          Sign in
                         </Typography>
                        <br />
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                </Grid>
                                <Grid item xs={12} sm={6}>
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
                                        type="email"
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
                            <span className="error"> {message}</span>
                            <br></br>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.handleClick}
                            >
                                Sign in
                         </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/signup">dont have an account? Sign up</Link>
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
    let { message } = state.login
    return {
        message
    }
}


const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            login: (user: object) => { dispatch(loginUser(user)) },
            redirectReset: () => { dispatch(resetRedirect()) }
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)































