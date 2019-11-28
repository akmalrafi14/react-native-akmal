import React from "react";
import { View, Image, Text } from "react-native";
// import

export default function Banner(props) {
    const userdata = props.userdata.userdata
    return (
        <View style={{
            backgroundColor: "#ecf0f1",
            paddingVertical: 24,
            alignItems: "center",
            flexDirection: "column"
        }}>

            <Image
                source={{
                    uri: "http://192.168.43.210:7100/foto/" + userdata.file_photo
                }}
                style={{
                    height: 120,
                    width: 120,
                    borderRadius: 60
                }}>
            </Image>
            <Text style={{
                color: "#424242",
                fontSize: 24,
                marginTop: 10
            }}>{userdata.namalengkap}</Text>
            <Text style={{
                color: "#424242",
                fontSize: 14,
                marginTop: 4
            }}>{userdata.tagline}</Text>
        </View>
    )
}