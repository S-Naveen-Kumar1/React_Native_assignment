import { useEffect, useState } from "react"
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login } from "./Login";
import { CameraComponent} from "../Components/CamerComponent";
import { UserDetails } from "../Components/UserDetails"; 
export const Dashboard=({navigation})=>{
    const [userData,setUserData]=useState("")
    useEffect(()=>{
        const getUser=async()=>{
    try {
        const value =  await (AsyncStorage.getItem("user")) 
        if (value !== null) {
          setUserData(JSON.parse(value))
          console.log(JSON.parse(value));
        }
      } catch (error) {
        console.log(error)
      }

}
       getUser()
    },[])
    console.log(userData,"userdata")
    const handleLogout = async () => {
        Alert.alert(
          "Are You Sure You wanna Logout",
          "",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            {
              text: "OK",
              onPress: async () => {
                try {
                  await AsyncStorage.removeItem("user");
                  console.log("User removed");
                  navigation.navigate("Login");
                } catch (err) {
                  console.log(err);
                }
              }
            }
          ]
        );
      };
    const handleCameraPage=()=>{
       navigation.navigate(CameraComponent)
    }
    const handleUserDetails=()=>{
        navigation.navigate(UserDetails)
     }
    return (
        <View >
        <View  >
        <Text>UserName:{userData.name}</Text>
       
        <Button title="Logout" onPress={handleLogout}/>
       </View>
       <View>
        <View style={styles.card}>
            <Text>Click To Take Selfie</Text>
       <Button title="Click here To Take Selfie" onPress={handleCameraPage}/>
       <Image style={{width:50,height:50}} source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAACUCAMAAADcWPdGAAAAY1BMVEX///8AAABCQkKVlZVVVVXt7e0ODg7Jycnq6ur5+fnV1dX29vb8/PyioqJhYWEzMzO4uLjAwMAkJCSxsbFaWloWFhaFhYU6Ojrh4eF7e3urq6toaGgdHR0tLS1JSUltbW2NjY3B+xOYAAADy0lEQVR4nO2bbXOjIBCAD9GoqDFqfW9M/v+vvGTuTjB1EdJzWDv7fGxph2dU2F2WX78IgiAIgiAIgiAIgiAIgiAIgiAIgsBMsEnieop2pKI5sW3aIXI9U3NiXhsoPfFC13M15mao9OCzcD1ZQwZzp8cr2LmerhFdbiPFmtT1hE3IrJwYC1xP2IC0t5QSrmdsQHS2lMpcz9gAYfdJMXZ2PWMDLpZOrHQ9YwO4rRTOlSIQoaTwraUy5c9DFIFTkHn1ScXaiTH1z+u8ce5VlG9IbJG5jd9tN1pDepdW1T5OTmMn0e4lxZwF7/F9NyfGXEl1eywS/3CVPYY7OrHekdROS98ffEdS5gFRfW29afLa/POnSOVjU4nusfMkkbjw3vsBUtMgFgFrLCqjugxiqfyyEoIn4uPAUmUGBQbbISNWKV9TfQi2KhlIpXpt8pdsbAg4pZqtSFsfDaOUMogItFYYpYxKRLr6NEKp6TUlj551jC5e/jDRrBb4pMplOhRkN7+9XnN/5MvjgAAOm/BJNeqwhF/lb+rbYv2APyt0Uq368oWv6fFFfQnBGjU6Ka4MWinYcuVhgTkZOill0sVaHZDL6CkYDyKlLOfAacFFjoACC2xSMuQDn4OMoASQXyGTKuWMC8BJiTdiwBuZ1Dh/Uil4WJDL/QqosyGTkklUBDmpx4fV+pECMqlqa8CTfjYX61EFMikZImmy9o95fw6uqwNwSX3K2qomZ5/mjyo9glRpJOXN6/4xpOQ2pSldHkzqJJ+U5qTHn1+/5AhSSgzUwFLjvEMDZyfIpOSSDgYUasZVrPcGIpO6z/lSDDopbX5ARItMapKxH/j++TJRBOoUyKSYjOvE+iKgfncBsENjkxrmESkwRJlxAaz72KROckiyWoMou+1/gk1KPYROVt6uXDk4AHtT0Ump5dmvye/iMAQ8JkAnVau1zCRb7q53tX4GVzPRSSnxwpNISW5HsTiHg+vO+KTY/eUIUfD+fL414UsxXdPFiVBKLYLBdLqId+/ZA+ikSoPGbGjfRSvFvM3rDilUFMQrxdqNlqlE3yWCU4pdtd8VVJlFLsUYB1t842yrJR+tFPOBhyX8zaZovFKP9aL40vQSi9Ggzxuz1OPT4mGX/DVLk0gMZm1kuKUetD3PhqoaBt4b3y9AL/UOrqSs798cQarbU8rVVbHIoBfxbZzdYrG6+2rH6MpJH2Z/D4e3f7tpH6Xa6e3zzv5emwGt47vnEYeKsO9zd37zN42KfvL+H7fqtSuQIAiCIAiCIAiCIAiCIAiCIAiCIAjim/wGbm4yY+p7QXQAAAAASUVORK5CYII="}}/>

        </View>
        <View>
            <Text>
            <Text>User Details</Text>
       <Button title="Click Here to see all user details" onPress={handleUserDetails}/>
            <Image></Image>
            </Text>
            </View>
        <View></View>
       </View>
       </View>
    )
}
const styles=StyleSheet.create({
   card:{
    width:"90%",
   
    borderColor:"black",
    borderWidth:1,
    margin:'auto',
    marginLeft:10,
    textAlign:"center"
   }
   
})