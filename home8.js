import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import styles from './styles'


export default Principal = ({ navigation }) => {    
    return(
        <View style={{ flex: 1, backgroundColor: '#CCC' }}>
            <View style={{ height: 50, backgroundColor: '#000' }}>

            </View>
            <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ marginBottom: 100 }} source={ require('./imgs/logo2.png') }/>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RESULTADO')}>
                    <Image source={ require('./imgs/botao_jogar.png') }/>
                </TouchableOpacity>
                
            </View>
            
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SOBRE O JOGO')} >
                    <Image source={ require('./imgs/sobre_jogo.png') }/>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={ () => navigation.navigate('OUTROS JOGOS') }>
                    <Image source={ require('./imgs/outros_jogos.png') }/>
                </TouchableOpacity>
                
            </View>
            
            <TouchableOpacity
                style={{ backgroundColor: '#8A2BE2', alignItems: 'center', justifyContent: 'center', marginTop: 80, padding: 30 }}
                onPress={ () => navigation.navigate('App 1') }>
                <Text style={ styles.txtBotao }>Next</Text>
            </TouchableOpacity>

        </View>
    )
}