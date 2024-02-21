import { Alert, Button, Image, StyleSheet, Text, View } from "react-native"

export const UserCard=({id,email,first_name,last_name,avatar})=>{

    const handleUserDetail=(id)=>{
        Alert.alert(`User Id is ${id} `)
    }
    return(
        <View style={styles.usercard}>
            <View>

            <Image source={{uri: avatar}} style={styles.image}/>
            </View>
            <View>

            <Text>{first_name} {last_name}</Text>
            <Text>{email}</Text>
            <Button title="View User" onPress={()=>handleUserDetail(id)}/>
            </View>
        </View>
    )

}
const styles=StyleSheet.create({
    usercard:{
       
        alignItems:"center",
        justifyContent:"center",
        width:50
    },
    image:{
        width:50,
        height:50
    }
})
