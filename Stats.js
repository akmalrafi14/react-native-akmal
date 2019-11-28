import React from "react";
import { View, Image, Text } from "react-native";

export default function Stats(props) {
    const userdata = props.userdata.userdata
    return (
        <View style={{
            flexDirection: "row",
            backgroundColor: "#e67e22"
        }}>
            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                padding: 8,
                color: "white"
            }}>

                <Text style={{
                    fontWeight: "bold",
                    color: "white"
                }}>{userdata.followers}</Text>
                <Text style={{

                    color: "white"
                }}>Followers</Text>

            </View>

            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                padding: 8,
                color: "white"
            }}>

                <Text style={{
                    fontWeight: "bold",
                    color: "white"
                }}>14 K</Text>
                <Text style={{

                    color: "white"
                }}>Followers</Text>

            </View>

            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                padding: 8,
                color: "white"
            }}>

                <Text style={{
                    fontWeight: "bold",
                    color: "white"
                }}>{userdata.following}</Text>
                <Text style={{

                    color: "white"
                }}>Following</Text>

            </View>

        </View >
    );
}