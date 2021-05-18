import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'

export const Day=({index})=>{
    console.log(index)
    const[value,setValue]=useState(false)
    return(
        <TouchableOpacity style={{...styles.AppoinmentsSecondView, backgroundColor:value?'lightblue':'white'}} onPress={()=>{
            setValue(!value)
          }}>
            <Text style={{...styles.textContainer,color:"black",fontSize:15,fontWeight:'bold' } }>Mon</Text>
            <Text style={{...styles.textContainer,color:"black",fontSize:15,color:'grey',marginTop:10 } }>18</Text>
          </TouchableOpacity> 
    )
}
const styles=StyleSheet.create(
    {
        AppoinmentsSecondView:{
            marginHorizontal:15,
            marginTop:10,
            paddingVertical:15,
            borderRadius:15,
            alignItems:'center'
          },
          textContainer: {
            fontSize: 15,
            color: 'white',
          },  
    }
)
