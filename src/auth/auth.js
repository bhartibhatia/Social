import React,{useState} from 'react'
import {Text,TextInput,View,StyleSheet,TouchableOpacity,ActivityIndicator, Alert} from 'react-native'
import auth from '@react-native-firebase/auth'

export const Auth=(props)=>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)
    const signUpUser=()=>
    {
        if(email&&password)
        {
            setLoading(true)
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log('User account created & signed in!');
            //   alert('Account created successfully')
              setLoading(false)
            })
            .catch(error => {
    
                setLoading(false)
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }
          
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
          
              console.error(error);
            });
        }
        else{
            alert(`Please provide ${email ? 'password' : 'email'}`)
        }
    }
    
    return(
<View style={styles.mainContainer}>
    <View style={styles.firstContainer}>
    <Text style={styles.text}>Email:</Text>
    <TextInput 
    style={styles.textInput} placeholder={'Input your ID'} 
    onChangeText={(text)=>{
console.log('email',text)
setEmail(text.trim())
    }} value={email}
    />
    </View>
    <View style={styles.firstContainer}>
    <Text style={styles.text}>Password:</Text>
    <TextInput 
    style={styles.textInput} placeholder={'password'}
    onChangeText={(passwordText)=>{
        console.log('password',passwordText)
        setPassword(passwordText.trim())
    }}  value={password}
    />
   
    </View>
    <TouchableOpacity style={styles.touchableOpacity} activeOpacity={0.7} 
    onPress={()=>{
        signUpUser()
    }}
    >
        <Text>Sign Up</Text>
    </TouchableOpacity>
    {loading && <ActivityIndicator color={'blue'} size={'large'}/>}
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
