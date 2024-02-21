import React, { useEffect, useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login } from "./Login";
import { CameraComponent } from "../Components/CamerComponent";
import { UserDetails } from "../Components/UserDetails"; 

export const Dashboard = ({ navigation }) => {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
                const value = await AsyncStorage.getItem("user");
                if (value !== null) {
                    setUserData(JSON.parse(value));
                    console.log(JSON.parse(value));
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, []);

    const handleLogout = async () => {
        Alert.alert(
            "Are You Sure You Wanna Logout",
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

    const handleCameraPage = () => {
        navigation.navigate(CameraComponent);
    };

    const handleUserDetails = () => {
        navigation.navigate(UserDetails);
    };

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>UserName: {userData.name}</Text>
                <Button title="Logout" onPress={handleLogout} />
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Click To Take Selfie</Text>
                <Image style={styles.image} source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAACUCAMAAADcWPdGAAAAY1BMVEX///8AAABCQkKVlZVVVVXt7e0ODg7Jycnq6ur5+fnV1dX29vb8/PyioqJhYWEzMzO4uLjAwMAkJCSxsbFaWloWFhaFhYU6Ojrh4eF7e3urq6toaGgdHR0tLS1JSUltbW2NjY3B+xOYAAADy0lEQVR4nO2bbXOjIBCAD9GoqDFqfW9M/v+vvGTuTjB1EdJzWDv7fGxph2dU2F2WX78IgiAIgiAIgiAIgiAIgiAIgiAIgsBMsEnieop2pKI5sW3aIXI9U3NiXhsoPfFC13M15mao9OCzcD1ZQwZzp8cr2LmerhFdbiPFmtT1hE3IrJwYC1xP2IC0t5QSrmdsQHS2lMpcz9gAYfdJMXZ2PWMDLpZOrHQ9YwO4rRTOlSIQoaTwraUy5c9DFIFTkHn1ScXaiTH1z+u8ce5VlG9IbJG5jd9tN1pDepdW1T5OTmMn0e4lxZwF7/F9NyfGXEl1eywS/3CVPYY7OrHekdROS98ffEdS5gFRfW29afLa/POnSOVjU4nusfMkkbjw3vsBUtMgFgFrLCqjugxiqfyyEoIn4uPAUmUGBQbbISNWKV9TfQi2KhlIpXpt8pdsbAg4pZqtSFsfDaOUMogItFYYpYxKRLr6NEKp6TUlj551jC5e/jDRrBb4pMplOhRkN7+9XnN/5MvjgAAOm/BJNeqwhF/lb+rbYv2APyt0Uq368oWv6fFFfQnBGjU6Ka4MWinYcuVhgTkZOill0sVaHZDL6CkYDyKlLOfAacFFjoACC2xSMuQDn4OMoASQXyGTKuWMC8BJiTdiwBuZ1Dh/Uil4WJDL/QqosyGTkklUBDmpx4fV+pECMqlqa8CTfjYX61EFMikZImmy9o95fw6uqwNwSX3K2qomZ5/mjyo9glRpJOXN6/4xpOQ2pSldHkzqJJ+U5qTHn1+/5AhSSgzUwFLjvEMDZyfIpOSSDgYUasZVrPcGIpO6z/lSDDopbX5ARItMapKxH/j++TJRBOoUyKSYjOvE+iKgfncBsENjkxrmESkwRJlxAaz72KROckiyWoMou+1/gk1KPYROVt6uXDk4AHtT0Ump5dmvye/iMAQ8JkAnVau1zCRb7q53tX4GVzPRSSnxwpNISW5HsTiHg+vO+KTY/eUIUfD+fL414UsxXdPFiVBKLYLBdLqId+/ZA+ikSoPGbGjfRSvFvM3rDilUFMQrxdqNlqlE3yWCU4pdtd8VVJlFLsUYB1t842yrJR+tFPOBhyX8zaZovFKP9aL40vQSi9Ggzxuz1OPT4mGX/DVLk0gMZm1kuKUetD3PhqoaBt4b3y9AL/UOrqSs798cQarbU8rVVbHIoBfxbZzdYrG6+2rH6MpJH2Z/D4e3f7tpH6Xa6e3zzv5emwGt47vnEYeKsO9zd37zN42KfvL+H7fqtSuQIAiCIAiCIAiCIAiCIAiCIAiCIAjim/wGbm4yY+p7QXQAAAAASUVORK5CYII=" }} />
                <Button title="Click here To Take Selfie" onPress={handleCameraPage} />
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>User Details</Text>
                <Image style={styles.image} source={{uri: "data:image/png;base64,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"}}/>
                <Button title="Click Here to see all user details" onPress={handleUserDetails} />
            </View>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Upload Documents</Text>
                <Image style={styles.image} source={{uri: "data:image/jpeg;base64,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"}}/>
                <Button title="Click Here to upload documents"  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
     
        alignItems: 'center',
        
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10
    },
    card: {
        width: "90%",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        alignItems: 'center'
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    image: {
        width: 50,
        height: 50
    }
});

export default Dashboard;
