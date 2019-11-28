import React from "react";
import {
    View,
    Image,
    Text
} from "react-native";
import Pembelian from "./foto.png"

export default function Content() {
    return (
        <View
            style={{
                paddingVertical: 12,
                // alignItems: "center",
                flexDirection: "column"
            }}>
            <Text style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingLeft: 12,
                color: "#424242",
                paddingVertical: 12
            }}>
                New Update!
            </Text>
            <Text style={{
                fontSize: 12,
                paddingLeft: 12,
                color: "#424242",
                paddingVertical: 6
            }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ex deserunt voluptates, tenetur fugit cumque nobis incidunt minus veniam alias aut. Aut ratione nihil ullam obcaecati ea voluptatum consectetur minima?Repellendus reprehenderit dolorem!
            </Text>
            <Image
                source={Pembelian} style={{
                    width: "100%",
                    height: 100
                }}
            ></Image>

            <Text style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingLeft: 12,
                color: "#424242",
                paddingVertical: 12
            }}>
                New Update!
            </Text>
            <Text style={{
                fontSize: 12,
                paddingLeft: 12,
                color: "#424242",
                paddingVertical: 6
            }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ex deserunt voluptates, tenetur fugit cumque nobis incidunt minus veniam alias aut. Aut ratione nihil ullam obcaecati ea voluptatum consectetur minima?Repellendus reprehenderit dolorem!
            </Text>
            <Image
                source={Pembelian} style={{
                    width: "100%",
                    height: 100
                }}
            ></Image>

            <Text style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingLeft: 12,
                color: "#424242",
                paddingVertical: 12
            }}>
                New Update!
            </Text>
            <Text style={{
                fontSize: 12,
                paddingLeft: 12,
                color: "#424242",
                paddingVertical: 6
            }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ex deserunt voluptates, tenetur fugit cumque nobis incidunt minus veniam alias aut. Aut ratione nihil ullam obcaecati ea voluptatum consectetur minima?Repellendus reprehenderit dolorem!
            </Text>
            <Image
                source={Pembelian} style={{
                    width: "100%",
                    height: 100
                }}
            ></Image>


        </View>

    )
}