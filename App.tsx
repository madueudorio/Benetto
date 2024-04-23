
import React from 'react';
import Benetto from './src/Benetto';
import LoginScreen from './src/LoginScreen';
import CadastroProduto from './src/screens/CadastroProduto';
import Carrinho from './src/Carrinho';
import CadastroCliente from './src/CadastroCliente';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
<NavigationContainer>
  <Stack.Navigator>

    <Stack.Screen name='Benetto' component={Benetto}
    options={{headerShown: false}}/>

    <Stack.Screen name='CadastroProduto' component={CadastroProduto}
    options={{headerShown: false}}/>

 
  </Stack.Navigator>
</NavigationContainer>

  );
}
//<LoginScreen/>
//<Carrinho/>
//<CadastroCliente/>
//<CadastroProduto/>
<Benetto/>
export default App;