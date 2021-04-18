import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
import {updateHome} from './action'

export const Home=( props)=>{
const dispatch=useDispatch()
return(
    <View style={styles.mainConatiner}>
         <TouchableOpacity style={styles.touchableOpacity} activeOpacity={0.7} 
    onPress={()=>{
        dispatch(updateHome('MeraGhar'))
        props.navigation.navigate('explore')
            
    }}>
<Text>Chup Rah</Text>
</TouchableOpacity>
    </View>
)
}

const styles=StyleSheet.create(
    {
        mainConatiner:{
            flex:1,
            backgroundColor:'blue',
justifyContent:'center',
alignItems:'flex-start'
        },
        touchableOpacity:{
            backgroundColor:'lightblue',
            paddingHorizontal:10,
            paddingVertical:10,
            borderRadius:10,
     }
    }
)