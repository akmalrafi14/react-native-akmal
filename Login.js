import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Label, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { createAppContainer, Header } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TextInput, ScrollView } from "react-native-gesture-handler";
import Axios from 'axios';

// export default 
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loading: false,
            error: ""
        };
    }

    login() {
        const { username, password } = this.state
        this.setState({
            isLoading: true
        });

        Axios.post("http://192.168.43.210:7100/login", {
            username,
            password
        }).then(response => {
            if (response.status == 200) {
                this.props.navigation.navigate("Profile", { userdata: response.data });
                console.log("berhasil");
                // console.log(response.data)
            }
        }).catch(error => {
            console.log(error);
            if (error.response && error.response.status == 503) {
                this.setState({
                    error: "Credentials does not match with our records. Please try again".
                        console.log("error")

                });
            } else {
                this.setState({
                    error: "Whoops! Look's like something wrong :("
                });
            }
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    test() {
        console.log("hai senpaaaiiiiii >///<");
    }

    render() {

        return (
            <View
                style={styles.container, {
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "#ecf0f1"
                }
                }>
                <View style={{ alignItems: "center" }}>
                    <Image style={{
                        width: 240,
                        height: 240,
                        alignItems: "center"
                    }} source={require('./assets/artboard-logoatas.png')}>

                    </Image>
                    <KeyboardAvoidingView style={{
                        width: '80%'
                    }} behavior="padding" enabled keyboardVerticalOffset="240">
                        <TextInput style={{
                            marginTop: '50%',
                            borderBottomColor: "#f39c12",
                            borderBottomWidth: 1
                        }} placeholder="Username" value={this.state.username} onChangeText={text => {
                            this.setState({ username: text });
                        }}>
                        </TextInput>

                        <TextInput style={{
                            marginTop: 24,
                            marginBottom: 24,
                            borderBottomColor: "#f39c12",
                            borderBottomWidth: 1
                        }} placeholder="Password" secureTextEntry={true} value={this.state.password} onChangeText={text => {
                            this.setState({ password: text });
                        }}>

                        </TextInput>
                    </KeyboardAvoidingView>
                </View >

                <View style={{
                    paddingLeft: 32,
                    paddingRight: 32
                }}>
                    <Button title="Login" style={{
                        height: 500,
                        width: 100,
                        borderRadius: 12
                    }} color="#f39c12" onPress={() => { this.login(); }}>

                    </Button>
                    <Button onPress={() => { this.test(); }} title="click me senpai >///<"></Button>
                </View>


                <View style={{ alignItems: "center" }}>
                    < TouchableOpacity >
                        <Text style={{
                            paddingTop: 12,
                            color: "#9e9e9e",
                            fontSize: 14,
                            fontWeight: "400"
                        }}>Doesn't have an account? Let's create one!</Text>
                    </TouchableOpacity >
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        display: 'flex',
        height: 50,
        width: 100,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
});