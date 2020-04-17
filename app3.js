import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'

export default App3 = ({ navigation }) => {

    const sorteio = () => {
        let num = Math.floor( Math.random() * 10)

        let sort = num.toString()
        Alert.alert(sort)
    }

    return(
        <View style={ styles.principal }>
            <View style={ styles.viewConteudo }>
                <TouchableOpacity
                onPress={ sorteio }
                onLongPress={ sorteio }>
                    <Text style={ styles.txtBotaoConteudo }>Sorteio 0 à 9</Text>
                </TouchableOpacity>
            </View>
        	
			<TouchableOpacity
            style={ styles.touch }
            onPress={ () => navigation.navigate('App 4') }
            >
            	<Text style={ styles.txtBotao }>Next</Text>
            </TouchableOpacity>
    	</View>
    )
}