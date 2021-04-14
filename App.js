import React from 'react'
import {Text, TextInput,View,StyleSheet} from 'react-native'
import {Auth} from './src/auth'
import Router from './src/router'
import {Provider} from 'react-redux'
import {store} from './src/store'

export default App=()=>{
  return (
    <View style={styles.mainContainer}>
      <Provider store={store}>
      <Router/>
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