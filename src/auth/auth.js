import React,{useState} from 'react'
import {Text,TextInput,View,StyleSheet,TouchableOpacity} from 'react-native'

export const Auth=(props)=>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
    const signUpUser=()=>
    {

    }
    return(
<View style={styles.mainContainer}>
    <View style={styles.firstContainer}>
    <Text style={styles.text}>Email:</Text>
    <TextInput 
    style={styles.textInput} placeholder={'Input your ID'} 
    onChangeText={(text)=>{
console.log('email',text)
    }}
    />
    </View>
    <View style={styles.firstContainer}>
    <Text style={styles.text}>Password:</Text>
    <TextInput 
    style={styles.textInput} placeholder={'password'}
    onChangeText={(password)=>{
        console.log('password',password)
    }}
    />
   
    </View>
    <TouchableOpacity style={styles.touchableOpacity} activeOpacity={0.7} 
    onPress={()=>{
        signUpUser()
    }}
    >
        <Text>Sign Up</Text>
    </TouchableOpacity>
    </View>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#00ff00',
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        // width:"100%",
        height:60,
        borderBottomColor:"#000000",
        borderBottomWidth:1,
        flex:1
    },
    firstContainer:{
        flexDirection:'row',
        paddingHorizontal:10,
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:10
    },
    text:{
        width:80,
    
    },
    touchableOpacity:{
        backgroundColor:'lightblue',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,



    }
})
