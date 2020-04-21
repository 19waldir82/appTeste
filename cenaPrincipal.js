import React from 'react'
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native'
import styles from './styles'


const logo = require('./imgs/logo.png')
const menuCliente = require('./imgs/menu_cliente.png')
const menuContato = require('./imgs/menu_contato.png')
const menuEmpresa = require('./imgs/menu_empresa.png')
const menuServico = require('./imgs/menu_servico.png')


export default CenaPrincipal = ({ navigation }) => {

    return(
        <ScrollView style={{ backgroundColor: '#FFF' }}>

            <View style={{ height: 50, backgroundColor: '#000' }}>

            </View>
            
            <View style={{ alignItems: 'center', paddingTop: 100 }}>
                    <Image source={ logo } />
            </View>
            
            <View style={{ alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', paddingBottom: 10, paddingTop: 50 }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('CLIENTES')}>
                        <Image style={{ marginRight: 10 }} source={ menuCliente } />
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
                style={{ backgroundColor: '#8A2BE2', alignItems: 'center', justifyContent: 'center', marginTop: 80, padding: 30 }}
                onPress={ () => navigation.navigate('App 8') } >
            	<Text style={ styles.txtBotao }>Next</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}



