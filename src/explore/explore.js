import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import { State } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

export const Explore=( )=>{
    const storeState=useSelector((state)=>{
return(
    state.authReducer

)
 })
 console.log('authstate',storeState)

 const homestoreState=useSelector((state)=>{
    return(
        state.homeReducer
    
    )
     })
     console.log('homestate',homestoreState)

return(
    <View style={styles.mainConatiner}>
<Text>Tu Chup Rah</Text>
{storeState.email&&<Text>{storeState.email}</Text>}
{storeState.password&&<Text>{storeState.password}</Text>}
{homestoreState.name&&<Text>{homestoreState.name}</Text>}
    </View>
)
}

const styles=StyleSheet.create(
    {
        mainConatiner:{
            flex:1,
            backgroundColor:'pink',
justifyContent:'center',
alignItems:'flex-start'
        }
    }
)