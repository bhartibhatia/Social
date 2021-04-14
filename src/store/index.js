import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import storage from 'redux-persist/lib/storage'
// import AsyncStorage from '@react-native-async-storage/async-storage';

//custom imports below
import reducers from '../reducer';

const enhancers = [
  applyMiddleware(
    createLogger({
      collapsed: true,
       predicate: () => __DEV__
    })
  )
];

const enhancer = compose(...enhancers);

const persistConfig = {
  key: 'root',
   storage: storage,
//   whitelist: ['authReducer']
};
//We use persistedReducer to Store globel state of app when our app is in killed state

const persistedReducer = persistReducer(persistConfig, reducers);
//@ts-ignore
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
