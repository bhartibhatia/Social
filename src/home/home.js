import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

export const Home=( )=>{
return(
    <View style={styles.mainConatiner}>
<Text>Chup Rah</Text>
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
        }
    }
)