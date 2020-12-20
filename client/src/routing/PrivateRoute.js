import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <Spinner />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
