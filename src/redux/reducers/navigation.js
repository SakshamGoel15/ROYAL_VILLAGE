// import { StatusBar } from 'react-native';
import createReducer from '../helpers/createReducer';
import { NavigationActions } from 'react-navigation';
import  { AppNavigator } from '../../navigators/AppNavigator';
// import * as types from '../actions/types';
// import AppRouteConfigs from '../../navigators/AppRouteConfigs';

const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut'); /* <--this will decide what screen will load the first time app is open*/
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

// const loggedInStatus = createReducer({}, {
//   [types.SET_LOGGED_IN_STATE](state, action) {
//     return action;
//   },
// });

export const nav = (state = initialNavState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};


//   if (action.routeName === 'TurnOnNotifications' || action.routeName === 'LoggedIn') {
//     StatusBar.setBarStyle('dark-content', true);
//   }

//   return nextState || state;
// };

// export {
//   loggedInStatus,
//   nav,
// };
