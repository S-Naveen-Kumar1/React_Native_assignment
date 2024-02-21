import { useEffect, useState } from "react";
import { Text, View,TextInput, Button, Alert, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dashboard } from "./Dashboard";
export const Login=({navigation})=>{

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [Password,setPassword]=useState('')
  const handleSubmit=()=>{
    const userData= {
        name,
        email,
        Password
    }
    try {
       AsyncStorage.setItem(
          'user',
          JSON.stringify(userData)
        );
      } catch (error) {
       console.log(error)
      }
    setEmail("")
     setPassword("") 
     setName("")
     console.log(userData)
     navigation.navigate(Dashboard)
    }
  
    return (<View style={styles.container}>
        <Text style={styles.text}>Welcome Back</Text>
        <TextInput  placeholder="Enter Email" value={email} onChangeText={e=>setEmail(e)} style={styles.inputTag}></TextInput>
        <TextInput placeholder="Enter Password" value={Password} onChangeText={e=>setPassword(e)} style={styles.inputTag}></TextInput>
        <TextInput placeholder="Enter Name" value={name} onChangeText={text=>setName(text)} style={styles.inputTag}></TextInput>
        <Button title="Submit" onPress={handleSubmit}/>
</View>)
    
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    borderColor:"red",
  alignItems:"center",
  marginTop:50
  },
  text:{
    fontSize:30,
    fontWeight:"bold"
  },
  inputTag:{
   padding:10,
    height: 40,
    borderWidth:1,
    borderColor:"black",
    flex:0,
    margin:6,
    width:200,
    borderRadius:4
  
  },
 
})