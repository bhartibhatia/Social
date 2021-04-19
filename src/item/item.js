import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useSelector} from 'react-redux'

export const Item =(props)=>{
    const selector=useSelector((state)=>{
return state.exploreReducer
    })
    console.log('selector',selector)
    console.log('prop',props)
    console.log('top',props.route.params.myData)
    return (
        <View style={styles.mainContainer}>
            <Text>ItemList</Text>
            {selector.newProduct&&<Text>{selector.newProduct}</Text>}
            {props&&<Text>{props.route.params.myData}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'orange'
    }
})


