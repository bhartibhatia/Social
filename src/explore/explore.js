import React , {useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import { State, TextInput } from 'react-native-gesture-handler'
import { useDispatch,useSelector } from 'react-redux'
import {sendData} from './action'


export const Explore=( props)=>{
    const [name, setName] = useState('')
    const dispatch=useDispatch();
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
        <TouchableOpacity style={styles.touchableOpacity} activeOpacity={0.7}
        onPress={()=>{
            dispatch(sendData(name))
        props.navigation.navigate('item',{myData:"hello"});
        }}  >
<Text>Tu Chup Rah</Text>
</TouchableOpacity>
{storeState.email&&<Text>{storeState.email}</Text>}
{storeState.password&&<Text>{storeState.password}</Text>}
{homestoreState.name&&<Text>{homestoreState.name}</Text>}
<TextInput style={styles.textInputData} onChangeText={(text)=>{
console.log('text',text);
setName(text.trim())

}} value={name}
/>
    </View>
)
}

const styles=StyleSheet.create(
    {
        mainConatiner:{
            flex:1,
            backgroundColor:'yellow',
justifyContent:'center',
alignItems:'flex-start'
        },
        touchableOpacity:{
            backgroundColor:'lightblue',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
        },
        textInputData:{
            height:60,
            width:'100%',
            borderBottomColor:"#000000",
            borderBottomWidth:1,
            backgroundColor:'blue'
        }
    }
)