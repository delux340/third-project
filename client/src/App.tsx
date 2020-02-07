import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom'
import Navbar from "./component/navBar/navBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from "react-redux"
import { verifyToken } from "./redux/actions"
import { AppRoutes } from './component/appRouter/appRouter';
import { routes } from './component/appRouter/routers.config';
import SignIn from "./component/SignIn/SignIn"


class App extends React.Component<any, any>{

  componentDidMount() {
    this.props.actions.verifyToken()

  }
  render() {
    return (

      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/signin" component={SignIn} />
            <AppRoutes routes={routes} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: {
      verifyToken: () => {
        dispatch(verifyToken())
      }

    }
  }
}

const mapStateToProps = (state: any) => {
  const { validatedStatus, login } = state
  return {
    validatedStatus, login
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
