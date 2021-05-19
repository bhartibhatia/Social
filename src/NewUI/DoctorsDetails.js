
import React from 'react'
import {Text,View,StyleSheet,Image, FlatList, TouchableOpacity} from 'react-native'

export const DoctorsDetails=()=>{
    const Data=()=>{
        return(
           <View style={{margin:10,backgroundColor:'white',paddingHorizontal:30,
           paddingVertical:20,
           borderRadius:10,
           elevation:7,}}>
               <View style={styles.firstView}>
                   <Image source={(require("../assets/Photo.jpg"))} style={{height:60,width:60,borderRadius:10}}/>
                   <View style={{marginLeft:10}} >
                       <Text>Brandon Guidelines</Text>
                       <Text>Cardiology</Text>
                       <View style={{flexDirection:'row'}}>
                           <Image source={(require('../assets/Shape.png'))} style={{height:20,width:20}} resizeMode={'contain'}/>
                            <Text style={{}}>Eastlake Ohio,44095</Text>
                       </View>
                   </View>
               </View>
               <View style={styles.secondView}>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={(require('../assets/Phone.png'))} style={{height:14,width:14}} resizeMode={"contain"}/>
                   <Text>123456789</Text>
                   </View>
                   <TouchableOpacity style={{paddingHorizontal:20,paddingVertical:10,borderRadius:20,backgroundColor:'blue'}}>
                       <Text>Book</Text>
                   </TouchableOpacity>
               </View>
           </View> 
        )
    }
    return(
        <View style={styles.doctorsContainer}>
 <FlatList data={[1,2,3,4,5,6]} renderItem={()=>{
    return(
        <Data/>
    )
}}/> 
        </View>
    )
}

const styles=StyleSheet.create({
    doctorsContainer:{
       backgroundColor:'white',
     marginVertical:10
       
       
    },
    firstView:{
        flexDirection:'row',
      
    },
    secondView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    }
})
