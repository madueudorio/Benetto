import axios from "axios";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

function CadastroCliente(): JSX.Element {

    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState<any>("");

    const cadastrarClientes = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('endereco', endereco);
            formData.append('telefone', telefone);
            formData.append('email', email);
            formData.append('cpf', cpf);
            formData.append('password', password);
            formData.append('imagem', {
                uri: image,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            console.log(formData)
            const response = await axios.post('http://10.137.11.212:8000/api/cliente', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuario');
            } else if (response.error) {
                console.log('erro ao abrir a camera');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImage(imageUri);
                console.log(imageUri);
            }

        });

    }

    

    const SelecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('cancelado pelo usuario');
            } else if (response.error) {
                console.log('erro ao abrir a galeria');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImage(imageUri);
            }
        });
    }

    function cadastro(){
        const dados = {
            nome: nome,
            endereco: endereco,
            telefone: telefone,
            email: email,
            cpf: cpf,
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
                <Text style={styles.title}>Cadastro Cliente</Text >
                <Text style={[styles.corTexto, styles.escrita]}></Text>



                <TextInput style={styles.input} placeholder="Nome"
                    placeholderTextColor="black"
                    onChangeText={(textNome) => setNome(textNome)}
                    />

                    
                <TextInput style={styles.input} placeholder="Endereco"
                    placeholderTextColor="black"
                    onChangeText={(textEndereco) => setEndereco(textEndereco)}
                   
                    />

                    
                <TextInput style={styles.input} placeholder="Telefone"
                    placeholderTextColor="black"
                    onChangeText={(textTelefone) => setTelefone(textTelefone)}
                   
                    />

                    
                <TextInput style={styles.input} placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={(textEmail) => setEmail(textEmail)}
                   
                    />

                    
                <TextInput style={styles.input} placeholder="CPF"
                    placeholderTextColor="black"
                    onChangeText={(textCpf) => setCpf(textCpf)}
                    
                    />


                <TextInput style={styles.input} placeholder="Password"
                    placeholderTextColor="black"
                    onChangeText={(textPassword) => setPassword(textPassword)}
                    secureTextEntry
                    />



                <TouchableOpacity style={styles.button}
                onPress={cadastrarClientes}>
                    <Text style={styles.buttonText}> Cadastrar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={abrirCamera}>
                    <Text style={styles.buttonText}>Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={SelecionarImagem}>
                    <Text style={styles.buttonText}> Adicionar Imagem </Text>
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
        marginTop: 30

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
        height: 35,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#720a94'


    },
    button: {
        backgroundColor: "#720a94",
        height: 40,
        borderRadius: 20,
        marginBottom: 15


    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
        lineHeight: 40,


    },

buttonImage: {
    backgroundColor: "#720a94",
    height: 50,
    borderRadius: 20,

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
        width: 320,
        borderTopLeftRadius: 30,
        padding: 30,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 5,
    },
    

});

export default CadastroCliente;