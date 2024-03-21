import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        const dados = {
            email: email,
            password: password,
            
        }

        

        console.log(dados);
    }

    return (

        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain"
                source={require('./assets/images/perfil.png')}
                 />


            <View style={styles.card}>
                <Text style={styles.title}>Login</Text >
                <Text style={[styles.corTexto, styles.escrita]}></Text>


                <TextInput style={styles.input} placeholder="E-mail"
                    placeholderTextColor="black"
                    onChangeText={(textEmail) => setEmail(textEmail)}
                    />


                <TextInput style={styles.input} placeholder="Senha"
                    placeholderTextColor="black"
                    onChangeText={(textPassword) => setPassword(textPassword)}
                    secureTextEntry
                    />



                <TouchableOpacity style={styles.button}
                onPress={()=>{ login()}}>
                    <Text style={styles.buttonText}> Entrar </Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Não possui uma conta? Cadastra-se!</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#720a94'

    },

    logo: {
        width: 65,
        height: 65,
        marginBottom: 30,
        marginTop: -150

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#151413',
        marginBottom: 13,
        textAlign: 'center'

    },
    escrita: {
        marginBottom: 10
    },
    input: {
        backgroundColor: '#D7D4D1',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#720a94'


    },
    button: {
        backgroundColor: "#720a94",
        height: 40,
        borderRadius: 13,


    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 19,
        lineHeight: 40,


    },
    forgotPassword: {
        color: '#000000',
        textAlign: 'center',
        marginTop: 10,


    },
    corTexto: {
        color: "white"

    },
    login: {
    

    },
    card: {
        backgroundColor: "#D2B48C",
        width: 300,
        borderTopLeftRadius: 30,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }

});

export default LoginScreen;