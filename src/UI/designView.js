import React from 'react'
import {View,Text,StyleSheet,Image, Button,ScrollView, FlatList} from 'react-native'

export default DesignView=()=>{
    const FirstCard=()=>{
return(
    <View style={styles.firstCardContainer}>
       
        <Image source={require('../assets/Photo.jpg')} style={{width:"100%",height:"100%"}} resizeMode={"stretch"}/>
        <Text style={{color:"yellow",fontSize:20,position:'absolute',top:10,left:10}}>X</Text>
    </View>
)
    }
    const SecondCard=()=>{
        return(
            <View style={styles.secondcardContainer}>
    <Text style={{fontSize:10}}>15 July 2019</Text>
    <Text style={{fontSize:30}}>Revolution</Text>
    <Text style={{fontSize:20}}>Theories</Text>
</View>
        )

    }
    const ThirdCard=()=>{
        return(
            <View style={styles.thirdCardCOntainer}>
            <View style={styles.thirdCardFirst}>
                <Text style={{marginLeft:30}}>Chapters</Text>
            </View>
            <View style={styles.thirdCardSecond}>

                <Text>Status</Text>
                <Text>Points</Text>
            </View>
        </View>
        )
        

    }
    const FourthCard=()=>{
        return(
    <View style={styles.fourtCardContainer}>
        <FlatList data={[1,2,3,4,5,6,6,7,4,4,4,]} renderItem={({item})=>{
return(
    <View style={styles.thirdCardCOntainer}>
    <View style={{...styles.thirdCardFirst,flexDirection:'row',justifyContent:"space-around"}}>
        <Text>1</Text>
        <Text>Chapters</Text>
    </View>
    <View style={styles.thirdCardSecond}>

        <Text>Status</Text>
        <Text>Points</Text>
    </View>
</View>
)

        }} keyExtractor={(item,index)=>index.toString()
        } contentContainerStyle={{maxHeight:300}}/>
    </View>)
    }
    return(
        
<View style={styles.content}>
    <FirstCard/>
    <SecondCard/>
    <ThirdCard/>
    <FourthCard/>
</View>
    )
}
 
const styles=StyleSheet.create({
    content:{
flex:1,
backgroundColor:"#FFB6C1"
    },
    firstCardContainer:{
        backgroundColor:'black',
        height:"40%",
        borderBottomLeftRadius:60,
        overflow:"hidden"
    },
    secondcardContainer:{
        flexDirection:"column",
        marginVertical:30,
        marginLeft:30
    },
    thirdCardCOntainer:{
        flexDirection:"row",
        marginVertical:10
    },
    thirdCardFirst:{
        flex:2,
        justifyContent:'flex-end'
    },
    thirdCardSecond:{
        flex:2,
        flexDirection:"row",
        justifyContent:'space-around'
    }
})