import React from 'react'
import {Text, TextInput,View,StyleSheet} from 'react-native'
import {Auth} from './src/auth'
import Router from './src/router'
import {Provider} from 'react-redux'
import {store,persistor} from './src/store'
import { PersistGate } from 'redux-persist/integration/react';

export default App=()=>{
  return (
    <View style={styles.mainContainer}>
      <Provider store={store}>
        <PersistGate persistor={persistor}><Router/></PersistGate>
      
      </Provider>
      {/* <Auth/> */}
    </View>
  )
}

const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'lightblue',
    margin:10
  },
  textContainer:{
    
  }

})