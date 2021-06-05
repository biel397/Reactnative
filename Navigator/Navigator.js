import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//telas
import Contatos from '../Modules/Contatos/Contatos';
import Cadastro from '../Modules/Cadastro/Cadastro';
import Detalhes from '../Modules/Detalhes/Detalhes';

const Stack = createStackNavigator();


const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'Cadastro'}>
            <Stack.Screen name={'Contatos'} component={Contatos} />
            <Stack.Screen name={'Cadastro'} component={Cadastro} />
            <Stack.Screen name={'Detalhes'} component={Detalhes} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;