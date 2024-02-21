import React from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

export const UserCard = ({ id, email, first_name, last_name, avatar }) => {

    const handleUserDetail = (id) => {
        Alert.alert(`User Id is ${id}`);
    }

    return (
        <View style={styles.usercard}>
            <View style={styles.avatarContainer}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.name}>{first_name} {last_name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="View User" onPress={() => handleUserDetail(id)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    usercard: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    avatarContainer: {
        marginRight: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userInfo: {
        flex: 1
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    email: {
        fontSize: 16,
        color: "#666"
    },
    buttonContainer: {
        justifyContent: "center"
    }
});
