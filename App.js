import React from 'react'
import {Text, TextInput,View,StyleSheet} from 'react-native'
import {Auth} from './src/auth'
import Router from './src/router'

export default App=()=>{
  return (
    <View style={styles.mainContainer}>
      <Router/>
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