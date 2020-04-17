import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'


export default App1 = ({ navigation }) => { 

    const [ contador, setCont ] = useState(0)

	return(
		<View style={ styles.principal }>
            <View style={ styles.viewConteudo }>
                <Text style={ styles.txtConteudo }>{ contador }</Text>
                <TouchableOpacity
                    onPress={ () => setCont(contador + 1) }
                    onLongPress={ () => setCont(0) }>
                    <Text style={ styles.txtBotaoConteudo }>Contador</Text>
                </TouchableOpacity>
            </View>


			<TouchableOpacity
            style={ styles.touch }
            onPress={ () => navigation.navigate('App 2') }
            >
            	<Text style={ styles.txtBotao }>Next</Text>
            </TouchableOpacity>
    	</View>
	)
}