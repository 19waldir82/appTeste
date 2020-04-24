import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import styles from './styles'


const logo = require('./imgs/logo.png')
const menuCliente = require('./imgs/menu_cliente.png')
const menuContato = require('./imgs/menu_contato.png')
const menuEmpresa = require('./imgs/menu_empresa.png')
const menuServico = require('./imgs/menu_servico.png')


export default CenaPrincipal = ({ navigation }) => {

    return(
        <View style={{ backgroundColor: '#FFF', flex: 1 }}>

            <View style={{ flex: 1, backgroundColor: '#000' }}>

            </View>
            
            <View style={{ alignItems: 'center', flex: 4, justifyContent: 'center' }}>
                    <Image source={ logo } />
            </View>
            
            <View style={{ alignItems: 'center', flex: 6, justifyContent: 'center' }}>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('CLIENTES')}>
                        <Image style={{ marginRight: 10, marginBottom: 10 }} source={ menuCliente } />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('CONTATOS')}>
                        <Image source={ menuContato } />
                    </TouchableOpacity>
                </View>
            
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('EMPRESA')}>
                        <Image style={{ marginRight: 10 }} source={ menuEmpresa } />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SERVIÇOS')}>
                        <Image source={ menuServico } />
                    </TouchableOpacity>
                </View>

                
            </View>

            <TouchableOpacity
                style={{ backgroundColor: '#8A2BE2', alignItems: 'center', justifyContent: 'center', flex: 2 }}
                onPress={ () => navigation.navigate('App 8') } >
            	<Text style={ styles.txtBotao }>Next</Text>
            </TouchableOpacity>
        </View>
    )
}



