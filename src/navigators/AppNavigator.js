import React from "react"; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from "../screens/ForgotPassword";
import {createStackNavigator} from "react-navigation-stack";

export const AppNavigator = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    LogIn: { screen: LogIn},
    ForgotPassword: {screen: ForgotPassword},

});

const AppWithNavigationState = ({ dispatch, nav, listener }) => (
<AppNavigator navigation={addNavigationHelpers({dispatch:dispatch, state:nav, addListener:listener})} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
}


const mapStateToProps = state =>({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
