import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'


export default App1 = ({ navigation }) => { 

    const [count, setCount] = useState(0)
    const [letraSelec, setLetraSelec] = useState('')

    ContadorSoma = () => {
        setCount( count + 1 )

        const letra = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                        'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z' ]

        setLetraSelec( letra[count] )  

        if(count === 26) {
            setCount(0)
        }
    }

    Zerar = () => {
        setCount(0)
        setLetraSelec('')
    }

	return(
		<View style={ styles.principal }>
            <View style={ styles.viewConteudo }>
                <Text style={styles.txtConteudo}>{ letraSelec }</Text>
                <View>
                    <TouchableOpacity
                        onPress={ () => ContadorSoma() }
                        onLongPress={ () => Zerar() }>
                        <Text style={ styles.txtBotaoConteudo }>Alfabeto</Text>
                    </TouchableOpacity>
                </View>
            </View>

			<TouchableOpacity
            style={ styles.touch }
            onPress={ () => navigation.navigate('App 6') }
            >
            	<Text style={ styles.txtBotao }>Next</Text>
            </TouchableOpacity>
    	</View>
	)
}