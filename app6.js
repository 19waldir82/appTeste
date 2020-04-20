import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Button } from 'react-native'
import styles from './styles'


export default App6 = ({ navigation }) => { 

    const [ data, setData ] = useState([])
    const [ isLoading, setLoading ] = useState(true)

    useEffect(() => {
        Down = () => {
        fetch('https://api.jsonbin.io/b/5e95ce46435f5604bb41399b')
        .then((response) => response.json())
        .then((json) => setData(json.Familia))
        .finally(() => setLoading(false)) 
        }

        if(isLoading) {
            Down()
        }
    })

	return(
		<View style={ styles.principal }>  
            <ScrollView style={{ marginTop: 40 }}>
                { isLoading ? 
                    <ActivityIndicator size="large" color="blue" /> :
                    data.map(item => 
                        <View key={ item.id }>
                            <View>
                                <Text style={styles.txtConteudo}>{ item.nome }</Text>
                                <Text style={ styles.txtBotao }>{ item.idade }</Text>
                            </View>
                        </View> 
                    ) 
                }

                <TouchableOpacity
                    style={{ backgroundColor: '#8A2BE2', alignItems: 'center', justifyContent: 'center', marginTop: 80, padding: 30 }}
                    onPress={ () => navigation.navigate('HOME') }
                    >
            	    <Text style={ styles.txtBotao }>Next</Text>
                </TouchableOpacity>
            </ScrollView>
    	</View>
	)
}