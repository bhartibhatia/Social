import { combineReducers } from 'redux';

import { authReducer } from '../auth/reducer'
// import { exploreReducer } from '../modules/explore'
// import { accountReducer } from "../modules/account"
// import { taskReducer } from "../modules/task"
// import { homeReducer } from '../modules/home';

// import actionName from '../utils/actionName';


const rootReducer = combineReducers({
  authReducer,
//   exploreReducer,
//   accountReducer,
//   taskReducer,
//   homeReducer
})

const appReducer = (state, action) => {

return rootReducer(state, action);
};
export default appReducer;