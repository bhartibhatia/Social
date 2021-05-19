import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {OnlineDoctors} from './OnlineDoctors'
import {Doctors} from './Doctors'
import {DoctorsDetails} from './DoctorsDetails'


export const Mainview = ()=>{
    return(
        <View style={styles.mainContainer}>
         <View style={styles.firstContainer}>
                <Text></Text>
            <Text>Doctors</Text>
            <Text>B</Text>
            </View>
            <View style={{flex:1,backgroundColor:'white',borderTopLeftRadius: 50,
    borderTopRightRadius: 50,}}>
            <OnlineDoctors/>
            <Doctors/>
            <DoctorsDetails/>
 </View> 
        </View>
    )
}
 const styles=StyleSheet.create({
mainContainer:{
    flex:1,
    backgroundColor:'#504DE5'
    
},
firstContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    margin:10,

}
 })