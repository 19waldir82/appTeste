import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import App1 from './app1'
import App2 from './app2'
import App3 from './app3'
import App4 from './app4'
import App5 from './app5'
import App6 from './app6'
import CenaPrincipal from './cenaPrincipal'
import CenaClientes from './cenaClientes'
import CenaContatos from './cenaContatos'
import CenaEmpresa from './cenaEmpresa'
import CenaServicos from './cenaServicos'


const Stack = createStackNavigator()


export default () => 
	<NavigationContainer>
		<Stack.Navigator
                screenOptions={{
                    headerTintColor: '#FFF',
                    headerTransparent: 'true' }
                }>

			<Stack.Screen name="App 1" component={ App1 } />
			<Stack.Screen name="App 2" component={ App2 } />
			<Stack.Screen name="App 3" component={ App3 } />
			<Stack.Screen name="App 4" component={ App4 } />
			<Stack.Screen name="App 5" component={ App5 } />
			<Stack.Screen name="App 6" component={ App6 } />
			<Stack.Screen name="HOME" component={ CenaPrincipal } />
            <Stack.Screen name="CLIENTES" component={ CenaClientes } />
            <Stack.Screen name="CONTATOS" component={ CenaContatos } />
            <Stack.Screen name="EMPRESA" component={ CenaEmpresa } />
            <Stack.Screen name="SERVIÇOS" component={ CenaServicos } />

		</Stack.Navigator>
	</NavigationContainer>
	
// Bom Dia!!!