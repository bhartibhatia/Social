import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export const DetailsTask=()=>{
    const Details=()=>{
        return(
            <View style={styles.detailsContainer}>
                <Text style={{color:"blue",fontWeight:"bold"}}>Chat With Friends</Text>
                <Text style={{color:"blue",marginTop:5}}>Coffee Time with the Friends</Text>
                <Text style={{color:"blue",fontWeight:"bold",marginTop:5}}>10:30 - 11:30</Text>
            </View>
        )
    }
    return(
        <View>
        <FlatList style={{height:400,backgroundColor:'yellow'}} contentContainerStyle={{height:400,alignItems:"flex-end"}} data={[1,2,3,4,5]} renderItem={(item)=>{
            return(
                <Details/>
            )
          }

        }/>
        </View>
    )
}
const styles=StyleSheet.create({
detailsContainer:{
marginVertical:20,
marginHorizontal:30,
    borderRadius: 20,
paddingVertical:20,
paddingHorizontal:20,
    backgroundColor: 'lightblue',
    width:300,
    
}
}
)