import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet ,TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dashboard } from "./Dashboard";

export const Login = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const userData = {
            name,
            email,
            password
        }
        try {
            AsyncStorage.setItem(
                'user',
                JSON.stringify(userData)
            );
        } catch (error) {
            console.log(error);
        }
        setEmail("");
        setPassword("");
        setName("");
        console.log(userData);
        navigation.navigate(Dashboard);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <TextInput
                placeholder="Enter Email"
                value={email}
                onChangeText={e => setEmail(e)}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Password"
                value={password}
                onChangeText={e => setPassword(e)}
                style={styles.input}
                secureTextEntry={true}
            />
            <TextInput
                placeholder="Enter Name"
                value={name}
                onChangeText={text => setName(text)}
                style={styles.input}
            />
 <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>        
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        padding: 10,
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 6,
        width: 200,
        borderRadius: 4
    },
    button: {
      marginTop: 20,
      width: 150,
      height:40,
      borderRadius: 4,
      backgroundColor: "#2196F3",
      color: "white",
      textAlign:"center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: 'center', 
    margin:"auto",
    fontSize:20,
    padding:8
}
});
