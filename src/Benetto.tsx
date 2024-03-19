import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Menu {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    imagens: any;
}


const dados: Menu[] = [
    {
        id: "1", nome: "Porção de Arroz Carreteiro", preco: "R$65,00", ingredientes: "Carnes de churrasco picadas em cubos, Arroz, Cebola ,Dentes de alho, Tomate, Ramos de salsinha e Cebolinha"
        , imagens: require('./assets/images/arrozcarreteiro.png')
    },

    {
        id: "2", nome: "Charuto de Carne Seca", preco: "R$87,00", ingredientes: "Repolho, Pimentão vermelho, Pimenta do reino, Carne seca desfiada, Molho de tomate e Cebola",
        imagens: require('./assets/images/charutocarneseca.png')
    },

    {
        id: "3", nome: "Espaguete à Bolonhesa", preco: "R$68,00", ingredientes: "Macarrão espaguete, Queijo Mussarela, Presunto e Molho de Tomate ou Molho Branco",
        imagens: require('./assets/images/espaguetebolonhesa.png')
    },

    {
        id: "4", nome: "Espaguete com Camarão", preco: "R$97,00", ingredientes: "Macarrão Espaguete com Camarão juntamente ao molho tártaro",
        imagens: require('./assets/images/espaguetecamarao.png')
    },

    {
        id: "5", nome: "Lagosta Assada", preco: "R$130,00", ingredientes: "Lagosta temperada com Vinagre, Azeite, Pimenta, Alho,Cebola E Tomate",
        imagens: require('./assets/images/lagosta.png')
    },

    {
        id: "6", nome: "Lula Assada", preco: "R$120,00", ingredientes: "Lula temperada com Vinagre, Azeite, Pimenta, Alho,Cebola E Tomate",
        imagens: require('./assets/images/lula.png')
    },

    {
        id: "7", nome: "Macarrão ao Molho Branco", preco: "R$91,00", ingredientes: "Macarrão ao Molho branco com Cebola, Salsinha, Farinha de trigo, Creme de leite e Salsinha",
        imagens: require('./assets/images/macarraomolhobranco.png')
    },

    {
        id: "8", nome: "Risoto de Frutos Do Mar Juntamente à um Molho de Maracujá", preco: "R$154,00", ingredientes: "Risotofeito com frutosdo mar de sua escolha, Carne de sua escolhs, Molho de Maracujá",
        imagens: require('./assets/images/risotoaomolhomaracuja.png')
    },

    {
        id: "9", nome: "Risoto com Purê De Batata Doce Roxa", preco: "R$149,00", ingredientes: "Batata doce roxa e Risoto com Frutos do mar",
        imagens: require('./assets/images/puredoceroxa.png')
    },

    {
        id: "10", nome: "Yakisoba", preco: "R$96,00", ingredientes: "Macarrão Espaguete, Cenoura, Brócolis, Couve Flor e Carne",
        imagens: require('./assets/images/yakisoba.png')
    },

    {
        id: "11", nome: "Sorvete Acompanhado de Brownie", preco: "R$54,00", ingredientes: "Sorvete da sau Escolha com Brownie de Chocolate com gotas de Chocolate",
        imagens: require('./assets/images/sorvetebrownie.png')
    },

    {
        id: "12", nome: "Torta de Amoras", preco: "R$71,00", ingredientes: "Creme Branco, Massa de torta, Calda de Amoras, Amora",
        imagens: require('./assets/images/tortaamora.png')
    },

    {
        id: "13", nome: "Torta de Frutas Vermelhas", preco: "R$71,00", ingredientes: "Creme Branco, Massa de torta, Calda de Frutas Vermelhas, Morango, Framboesa, Amora e Blueberry",
        imagens: require('./assets/images/tortafrutasvermelhas.png')
    },

    {
        id: "14", nome: "Wafle de Nuttela", preco: "R$54,00", ingredientes: "Massa de Wafles com Nutella e Granulados",
        imagens: require('./assets/images/waflfle.png')
    },

    {
        id: "15", nome: "Petit Gateau", preco: "R$65,00", ingredientes: "Bolo de chocolate com Recheio e Sorvete de sua Preferência",
        imagens: require('./assets/images/petitgatto.png')
    },


];


const renderItem = ({ item }: { item: Menu }) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
        <Text>{item.imagens}</Text>

    </TouchableOpacity>
);


function Benetto(): React.JSX.Element {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="darkorange" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}><Image style={styles.logo} source={require('./assets/images/benetto.png')}/> </Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/menuuu.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/pedido.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/perfil.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    item: {
        backgroundColor: 'deeppink',
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 20,
        fontSize: 30
    },
    header: {
        backgroundColor: 'darkorange',
        alignItems: 'center',
        paddingVertical: 30,



    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginTop:10


    },
    footer: {
        borderTopWidth: 0.9,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20
    },
    footerIcon: {
        width: 45,
        height: 45
    },
    logo:{
        width:100,
        height:100,
 
    }
})

export default Benetto