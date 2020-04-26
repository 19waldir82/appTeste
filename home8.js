import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import styles from './styles'


export default Principal = ({ navigation }) => {    
    return(
        <View style={{ flex: 1, backgroundColor: '#CCC' }}>
            <View style={{ flex: 1, backgroundColor: '#000' }}>

            </View>
            <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ marginBottom: 50 }} source={ require('./imgs/logo2.png') }/>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RESULTADO')}>
                    <Image source={ require('./imgs/botao_jogar.png') }/>
                </TouchableOpacity>
                
            </View>
            
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'  }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SOBRE O JOGO')} >
                    <Image source={ require('./imgs/sobre_jogo.png') }/>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={ () => navigation.navigate('OUTROS JOGOS') }>
                    <Image source={ require('./imgs/outros_jogos.png') }/>
                </TouchableOpacity>
                
            </View>







     3       <TouchableOpacity
                style={{ backgroundColor: '#8A2BE2', alignItems: 'center', justifyContent: 'center', flex: 1 }}
                onPress={ () => navigation.navigate('App 1') }>
                <Text style={ styles.txtBotao }>Next</Text>
            </TouchableOpacity>

        </View>
    )
}