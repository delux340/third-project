import React from 'react';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom'
import Navbar from "./component/navBar/navBar"
import { connect } from "react-redux"
import { verifyToken } from "./redux/actions"
import { AppRoutes } from './component/appRouter/appRouter';
import { routes } from './component/appRouter/routers.config';
import SignIn from "./component/SignIn/SignIn"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { initialState } from "./redux/interface"


interface state { }
interface props { actions: { verifyToken: Function } }
class App extends React.Component<props, state>{

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

const mapStateToProps = (state: initialState) => {
  const { login } = state
  return {
    login
  }
}


const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
      verifyToken: () => {
        dispatch(verifyToken())
      }

    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
