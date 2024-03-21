import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Menu {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    imagens: any;
}


const dados: Menu[] = [
    {
        id: "", nome: "Porção de Arroz Carreteiro", preco: "Valor: R$65,00", ingredientes: "Ingredientes: Carnes de churrasco picadas em cubos, Arroz, Cebola ,Dentes de alho, Tomate, Ramos de salsinha e Cebolinha"
        , imagens: require('./assets/images/arrozcarreteiro.png')
    },

    {
        id: "2", nome: "Charuto de Carne Seca", preco: "Valor: R$87,00", ingredientes: "Ingredientes: Repolho, Pimentão vermelho, Pimenta do reino, Carne seca desfiada, Molho de tomate e Cebola",
        imagens: require('./assets/images/charutocarneseca.png')
    },

    {
        id: "3", nome: "Espaguete à Bolonhesa", preco: "Valor: R$68,00", ingredientes: "Ingredientes: Macarrão espaguete, Queijo Mussarela, Presunto e Molho de Tomate ou Molho Branco",
        imagens: require('./assets/images/espaguetebolonhesa.png')
    },

    {
        id: "4", nome: "Espaguete com Camarão", preco: "Valor: R$97,00", ingredientes: "Ingredientes: Macarrão Espaguete com Camarão juntamente ao molho tártaro",
        imagens: require('./assets/images/espaguetecamarao.png')
    },

    {
        id: "5", nome: "Lagosta Assada", preco: "Valor: R$130,00", ingredientes: "Ingredientes: Lagosta temperada com Vinagre, Azeite, Pimenta, Alho,Cebola E Tomate",
        imagens: require('./assets/images/lagosta.png')
    },

    {
        id: "6", nome: "Lula Assada", preco: "Valor: R$120,00", ingredientes: "Ingredientes: Lula temperada com Vinagre, Azeite, Pimenta, Alho,Cebola E Tomate",
        imagens: require('./assets/images/lula.png')
    },

    {
        id: "7", nome: "Macarrão ao Molho Branco Juntamente á Frutos do Mar", preco: "Valor: R$91,00", ingredientes: "Ingredientes: Macarrão ao Molho branco com Cebola, Salsinha, Farinha de trigo, Creme de leite e Salsinha",
        imagens: require('./assets/images/macarraomolhobranco.png')
    },

    {
        id: "8", nome: "Risoto de Frutos Do Mar ao Molho de Maracujá", preco: "Valor: R$154,00", ingredientes: "Ingredientes: Risoto feito com frutosdo mar de sua escolha, Carne de sua escolhs, Molho de Maracujá",
        imagens: require('./assets/images/risotoaomolhomaracuja.png')
    },

    {
        id: "9", nome: "Risoto com Purê De Batata Doce Roxa", preco: "Valor: R$149,00", ingredientes: "Ingredientes: Batata doce roxa e Risoto com Frutos do mar",
        imagens: require('./assets/images/puredoceroxa.png')
    },

    {
        id: "10", nome: "Yakisoba", preco: "Valor: R$96,00", ingredientes: "Ingredientes: Macarrão Espaguete, Cenoura, Brócolis, Couve Flor e Carne",
        imagens: require('./assets/images/yakisoba.png')
    },

    {
        id: "11", nome: "Sorvete Acompanhado de Brownie", preco: "Valor: R$54,00", ingredientes: "Ingredientes: Sorvete da sau Escolha com Brownie de Chocolate com gotas de Chocolate",
        imagens: require('./assets/images/sorvetebrownie.png')
    },

    {
        id: "12", nome: "Torta de Amoras", preco: "Valor: R$71,00", ingredientes: "Ingredientes: Creme Branco, Massa de torta, Calda de Amoras, Amora",
        imagens: require('./assets/images/tortaamora.png')
    },

    {
        id: "13", nome: "Torta de Frutas Vermelhas", preco: "Valor: R$71,00", ingredientes: "Ingredientes: Creme Branco, Massa de torta, Calda de Frutas Vermelhas, Morango, Framboesa, Amora e Blueberry",
        imagens: require('./assets/images/tortafrutasvermelhas.png')
    },

    {
        id: "14", nome: "Wafle de Nuttela", preco: "Valor: R$54,00", ingredientes: "Ingredientes: Massa de Wafles com Nutella e Granulados",
        imagens: require('./assets/images/waflfle.png')
    },

    {
        id: "15", nome: "Petit Gateau", preco: "Valor: R$65,00", ingredientes: "Ingredientes: Bolo de chocolate com Recheio e Sorvete de sua Preferência",
        imagens: require('./assets/images/petitgatto.png')
    },

    {
        id: "16", nome: "Gin De Morango", preco: "Valor: R$36,00", ingredientes: "Ingredientes: Gin, Morangos, Açúcar, Hortelã e Calda de Sua Escolha",
        imagens: require('./assets/images/ginfrutas.png')
    },

    {
        id: "16", nome: "Gin De Frutas Vermelhas", preco: "Valor: R$36,00", ingredientes: "Ingredientes: Gin, Frutas Vermelhas, Açúcar, Hortelã e Calda de Sua Escolha",
        imagens: require('./assets/images/ginfrutasvermelhas.png')
    },

    {
        id: "17", nome: "Vodka com Água com Gás", preco: "Valor: R$75,00", ingredientes: "Vodka, Água com Gás, Açúcar e Gelo",
        imagens: require('./assets/images/vodka.png')
    },

    {
        id: "18", nome: "Xevete de Morango", preco: "Valor: R$65,00", ingredientes: "Energético, Vodka, Açúcar e Gelo",
        imagens: require('./assets/images/xevete.png')
    },

    {
        id: "19", nome: "Cerveja 1L", preco: "Valor: R$25,00", ingredientes: "Tipos: Heineken, Skol, Brahma, Amstel, Corona, Itaipava, Cristal e Baudweiser",
        imagens: require('./assets/images/cerveja.png')
    },

    {
        id: "20", nome: "Coquetel de Framboesa", preco: "Valor: R$37,00", ingredientes: "Ingredientes: Suco de Framboesa, Vodka, Açúcar, Gelo e Alecrim",
        imagens: require('./assets/images/coqueteldemorango.png')
    },

    {
        id: "21", nome: "Refrigerante 1L e 2L", preco: "Valor: R$10,00", ingredientes: "Tipos: Coca, Fanta, Guaraná, Sprite, Fanta Uva",
        imagens: require('./assets/images/refri.png')
    },


    {
        id: "22", nome: "Vinho", preco: "Valor: R$47,00", ingredientes: "Tipos: Vinho doce e Seco",
        imagens: require('./assets/images/vinho.png')
    },


    {
        id: "23", nome: "Suco de Maracujá", preco: "Valor: R$12,00", ingredientes: "Ingredientes: Suco Natural de Maracujá, Açúcar, e Gelo",
        imagens: require('./assets/images/sucomaracuja.png')
    },


    {
        id: "24", nome: "Champanhe", preco: "Valor: R$52,00", ingredientes: "Tipos: Espumante Doce e Seco",
        imagens: require('./assets/images/champanhe.png')
    },


    {
        id: "25", nome: "Suco de Abacaxi com Hortelã", preco: "Valor: R$12,00", ingredientes: "Ingredientes: Suco Natural de Abacaxi,Hortelã, Açúcar, e Gelo",
        imagens: require('./assets/images/abacaxiehortela.png')
    },


    {
        id: "26", nome: "Ice", preco: "Valor: R$7,00", ingredientes: "Tipos: Maracujá, Limão e Frutas Vermelhas",
        imagens: require('./assets/images/ice.png')
    },
    
    
    {
        id: "27", nome: "Suco de Morango", preco: "Valor: R$12,00", ingredientes: "Ingredientes: Suco Natural de Morango, Açúcar, e Gelo",
        imagens: require('./assets/images/sucomorango.png')
    },


    
    {
        id: "28", nome: "Suco De Laranja", preco: "Valor: R$12,00", ingredientes: "Ingredientes: Suco Natural de Laranja, Açúcar, e Gelo",
        imagens: require('./assets/images/sucodelaranja.png')
    },

    {
        id: "29", nome: "Caipirinha", preco: "Valor: R$20,00", ingredientes: "Ingredientes: Limão, Vodka, Açúcar e Gelo",
        imagens: require('./assets/images/caipirinha.png')
    },


    {
        id: "30", nome: "Suco De Limão", preco: "Valor: R$12,00", ingredientes: "Ingredientes: Suco Natural de Limão, Açúcar, e Gelo",
        imagens: require('./assets/images/sucodelimao.png')
    },


    {
        id: "31", nome: "H2O", preco: "Valor: R$15,00", ingredientes: "Tipo: 600ml e 1L",
        imagens: require('./assets/images/h2O.png')
    },


    


];



const renderItem = ({ item }: { item: Menu }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={[styles.corTexto, styles.titulo]}>{item.nome}</Text>
        <Text style={[styles.corTexto, styles.escrita]}>{item.preco}</Text>
        <Text style={styles.corTexto}>{item.ingredientes}</Text>
        <Image style={styles.imagem} source={item.imagens} />

    </TouchableOpacity>
);


function Benetto(): React.JSX.Element {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="#720a94" barStyle='light-content' />
            <View style={styles.header}>

                <Image style={styles.logo} source={require('./assets/images/benetto.logo..png')} />
            </View>


            <View style={styles.lupe}>
            <Image style={styles.botaopesquisa} source={require('./assets/images/lupe.png')} />
            <TextInput

                style={styles.input}
                placeholder='Pesquisar'
                placeholderTextColor={"black"}
            />
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
        backgroundColor: 'black'


    },
    item: {
        backgroundColor: '#720a94',
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 10,
        borderTopLeftRadius: 20,
        fontSize: 30
    },
    header: {
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 5,



    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10


    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        borderTopLeftRadius: 20
    },
    footerIcon: {
        width: 35,
        height: 35
    },
    logo: {
        width: 200,
        height: 200,

    },
    corTexto: {
        color: "white"

    },
    titulo: {
        fontSize: 20,
        marginBottom: 10
    },
    imagem: {
        width: 225,
        height: 225,
        left: 50,
        marginTop: 10,
        borderTopLeftRadius: 30,

    },
    escrita: {
        marginBottom: 10
    },
    input: {
        backgroundColor: "#d7d4d1",
        height: 45,
        width: 310,
        right: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "black",
        
    },
    lupe: {
        flexDirection:'row-reverse',
        alignSelf: 'flex-start'
    },
    botaopesquisa: {
        width: 35,
        height: 35,
        right: 30,
        
    }
})

export default Benetto