import axios from "axios";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

function CadastroProduto(): JSX.Element {

    const [nome, setNome] = useState<string>("");
    const [ingredientes, setIngredientes] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [imagem, setImagem] = useState<any>("");

    const cadastrarClientes = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('ingredientes', ingredientes);
            formData.append('preco', preco);
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            console.log(formData)
            const response = await axios.post('http://10.137.11.212:8000/api/produto', formData, {
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
                setImagem(imageUri);
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
                setImagem(imageUri);
            }
        });
    }

    function CadastroProduto(){
        const dados = {
            nome: nome,
            ingredientes: ingredientes,
            preco: preco, 
            imagem: imagem, 
        }

        

        console.log(dados);
    }

    return (

        
<View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Cadastro Produto</Text >
                <Text style={[styles.corTexto, styles.escrita]}></Text>



                <TextInput style={styles.input} placeholder="Nome"
                    placeholderTextColor="black"
                    onChangeText={(textNome) => setNome(textNome)}
                    />

                    
                <TextInput style={styles.input} placeholder="Ingredientes"
                    placeholderTextColor="black"
                    onChangeText={(textIngredientes) => setIngredientes(textIngredientes)}
                   
                    />

                    
                <TextInput style={styles.input} placeholder="Preço"
                    placeholderTextColor="black"
                    onChangeText={(textPreco) => setPreco(textPreco)}
                   
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


                </View>
            </View>
   
       

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  "#720a94",

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

    containeroutro:{
        backgroundColor:  "#D2B48C",

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
    corTexto: {
        color: "white"

    },  
    login: {
    

    },
    card: {
        backgroundColor: "#D2B48C",
        width: 360,
        borderTopLeftRadius: 30,
        padding: 30,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 5,
        marginRight:'auto',
        marginLeft:'auto',
        marginTop: 20
    },
    

});

export default CadastroProduto;