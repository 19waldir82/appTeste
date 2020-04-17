import React, { useState } from 'react'
import { View, Text, TouchableOpacity  } from 'react-native'
import styles from './styles'
import ImgUser from './imgUser'
import ImgSmartPhone from './imgSmartPhone'
import Resultados from './resultados'


export default App4 = ({ navigation }) => { 

    const [ escolhaUser, setEscolhaUser ] = useState('')
    const [ escolhaSmart, setEscolhaSmart ] = useState('')


    Jokenpo = (escolha) => {

        setEscolhaUser(escolha)

        let num = Math.floor( Math.random() * 3 ) 
        
        if(num === 0){
            setEscolhaSmart('Pedra')
        }
        if(num === 1){
            setEscolhaSmart('Papel')
        }
        if(num === 2){
            setEscolhaSmart('Tesoura')
        }
    }


        return(
            <View style={ styles.principal }>
                    <View style={ styles.palcoJok }>
                        <View><ImgSmartPhone esc={ escolhaSmart } /></View>
                        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#8A2BE2' } }>X</Text>
                        <View><ImgUser esc={ escolhaUser } /></View>
                    </View>
                    <View style={styles.btnJokResultado}>
                        <Resultados escU={ escolhaUser } escS={ escolhaSmart } />
                    </View>
                    
                    
                    <View style={ styles.btnJokenpo }>
                        <TouchableOpacity
                        onPress={ () => { Jokenpo('Pedra')} }>
                        <Text style={ styles.txtBotaoConteudo }>Pedra</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={ () => { Jokenpo('Papel')} }>
                        <Text style={ styles.txtBotaoConteudo }>Papel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={ () => { Jokenpo('Tesoura')} }>
                        <Text style={ styles.txtBotaoConteudo }>Tesoura</Text>
                        </TouchableOpacity>
                    </View>
                
                <TouchableOpacity
                style={ styles.touch }
                onPress={ () => navigation.navigate('App 5') }
                >
                    <Text style={ styles.txtBotao }>Next</Text>
                </TouchableOpacity>
            </View>
        )   
}
