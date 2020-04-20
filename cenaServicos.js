import React from 'react'
import { View, Image, Text } from 'react-native'


const detalheServicos = require('./imgs/detalhe_servico.png')


export default CenaServicos = () => {
    return(
        <View style={{ backgroundColor: '#FFF' }}>
            
            <View style={{ height: 50, backgroundColor: '#19D1C8' }}>

            </View>
            
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image source={ detalheServicos }/>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#19D1C8', marginLeft: 10, marginTop: 25 }}>Nossos Serviços</Text>
            </View> 

            <View style={{ margin: 20, paddingBottom: 500 }}>
                <Text style={{ fontSize: 20 }}>* Consultoria</Text>
                <Text style={{ fontSize: 20 }}>* Processos</Text>
                <Text style={{ fontSize: 20 }}>* Acompanhamento De Projetos</Text>
            </View>           
        </View>
    )
}
