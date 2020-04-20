import React from 'react'
import { View, Image, Text } from 'react-native'


const detalheEmpresa = require('./imgs/detalhe_empresa.png')


export default CenaEmpresa = () => {
    return(
        <View style={{ backgroundColor: '#FFF' }}>
            
            <View style={{ height: 50, backgroundColor: '#EC7148' }}>

            </View>
            
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image source={ detalheEmpresa }/>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#EC7148', marginLeft: 10, marginTop: 25 }}>Empresa</Text>
            </View> 

            <View style={{ margin: 20, paddingBottom: 500 }}>
                <Text style={{ fontSize: 20 }}>aaaaaaaa bbbbbbbbbb cccccccccc ddddddd eeeeeee</Text>
            </View>           
        </View>
    )
}
