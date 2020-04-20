import React from 'react'
import { View, StatusBar, Image, Text } from 'react-native'


const detalheCliente = require('./imgs/detalhe_cliente.png')
const cliente1 = require('./imgs/cliente1.png')
const cliente2 = require('./imgs/cliente2.png')


export default CenaClientes = () => {
    return(
        <View style={{ backgroundColor: '#FFF' }}>
            <StatusBar backgroundColor= '#B9C941' />
            <View style={{ height: 50, backgroundColor: '#B9C941' }}>

            </View>
            
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image source={ detalheCliente }/>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#B9C941', marginLeft: 10, marginTop: 25 }}>Nossos Clientes</Text>
            </View>

            <View style={{ marginTop: 10, padding: 20 }}>
                <Image source={ cliente1 }/>
                <Text style={{ marginLeft: 30, fontSize: 18 }}>aaa aaaaaa</Text>
            </View>
            
            <View style={{ marginTop: 10, padding: 20, paddingBottom: 500 }}>
                <Image source={ cliente2 }/>
                <Text style={{ marginLeft: 30, fontSize: 18 }}>bbbbbb bbbbbb</Text>
            </View>
            
        </View>
    )
}
