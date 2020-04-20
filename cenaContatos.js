import React from 'react'
import { View, StatusBar, Image, Text } from 'react-native'


const detalheContato = require('./imgs/detalhe_contato.png')


export default CenaContatos = () => {
    return(
        <View style={{ backgroundColor: '#FFF' }}>
            <StatusBar backgroundColor= '#61BD8C' />
            <View style={{ height: 50, backgroundColor: '#61BD8C' }}>

            </View>
            
            <View style={{ flexDirection: 'row', marginTop: 0 }}>
                <Image source={ detalheContato }/>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#61BD8C', marginLeft: 10, marginTop: 40 }}>Contatos</Text>
            </View> 

            <View style={{ margin: 20, paddingBottom: 500 }}>
                <Text style={{ fontSize: 20 }}>Tel: 3333-4444</Text>
                <Text style={{ fontSize: 20 }}>cel: 98888-0000</Text>
                <Text style={{ fontSize: 20 }}>Email: qwert@qwert.com</Text>
            </View>           
        </View>
    )
}
