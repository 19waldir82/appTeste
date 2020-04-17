import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'

export default App2 = ({ navigation }) => { 

    const frases = () => {
        let num = Math.floor(Math.random() * 10 )

        const frases = ['Não importa a cor do céu. Quem faz o dia bonito é você.', 
                        'Enquanto o dia semeia sonhos, a noite rega a esperança.', 
                        'Quanto mais agradecemos, mais coisas boas acontecem.', 
                        'Não coloque limites em seus sonhos, coloque fé.', 
                        'Sorrir torna tudo mais bonito.', 
                        'As melhores coisas da vida não são coisas.', 
                        'Nem tudo na vida são flores, mas quando for, regue.', 
                        'Nada é em vão. Se não é bênção, é lição.', 
                        'Assim como a lua, a vida tem fases.', 
                        'Nunca desista daquilo que te faz sorrir.']

        const fraseEscolhida = frases [num]
   
        Alert.alert(fraseEscolhida)
    }

	return(
		<View style={ styles.principal }>
            <View style={ styles.viewConteudo }>
                <TouchableOpacity
                    onPress={ frases }
                    onLongPress={ frases }>
                    <Text style={ styles.txtBotaoConteudo }>Frase Do Dia</Text>
                </TouchableOpacity>
            </View>
        	
			<TouchableOpacity
            style={ styles.touch }
            onPress={ () => navigation.navigate('App 3') }
            >
            	<Text style={ styles.txtBotao }>Next</Text>
            </TouchableOpacity>
    	</View>
	)
}