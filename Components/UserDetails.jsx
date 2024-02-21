import { useEffect, useState } from "react"
import axios from "axios"
import { View } from "react-native"
import { UserCard } from "./UserCard"
export const UserDetails=()=>{
    const [userData,setUserData]=useState([])
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2")
        .then(res=>{
            setUserData(res.data.data)
        })
    },[])
    return(
        <View>
            {userData.length>0 && userData.map((item)=><UserCard key={item.id} {...item}/>)}
        </View>
    )
}