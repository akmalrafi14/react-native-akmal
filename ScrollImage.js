import React from "react";
import {
    View,
    Image,
    Text,
    ScrollView
} from "react-native";
import Pembelian from "./foto.png";
import Logo from "./logo_rpl.png";
import Scroll from "./hh.png"

export default function Banner(props) {
    const userdata = props.userdata.userdata
    return (

        <View style={{
            alignItems: "center",
            flexDirection: "column"
        }}>
            <ScrollView horizontal={true}>
                <Image source={Scroll} style={{
                    padding: 4,
                    width: 120,
                    height: 120
                }} />
                <Image source={Scroll} style={{
                    padding: 4,
                    width: 120,
                    height: 120
                }} />
                <Image source={Scroll} style={{
                    padding: 4,
                    width: 120,
                    height: 120
                }} />
                <Image source={Scroll} style={{
                    padding: 4,
                    width: 120,
                    height: 120
                }} />

            </ScrollView>
        </View>
    )
}