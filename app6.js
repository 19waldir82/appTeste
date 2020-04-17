import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Button } from 'react-native'
import styles from './styles'


export default App6 = ({ navigation }) => { 

    const [ data, setData ] = useState([])
    const [ isLoading, setLoading ] = useState(true)

    useEffect(() => {
        Down = () => {
        fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .finally(() => setLoading(false)) 
        }

        if(isLoading) {
            Down()
        }
    })

	return(
		<View style={ styles.principal }>
            <ScrollView>
                { isLoading ? 
                    <ActivityIndicator size="large" color="blue" /> :
                    data.map(item => 
                        <View key={ item.id }>
                            <View>
                                <Text style={ styles.txtBotao }>{ item.title }</Text>
                                <Text style={ styles.txtBotao }>{ item.releaseYear }</Text>
                            </View>
                        </View> 
                    ) 
                }

                <TouchableOpacity
                    style={ styles.touch }
                    onPress={ () => navigation.navigate('App 1') }
                    >
            	    <Text style={ styles.txtBotao }>Next</Text>
                </TouchableOpacity>
            </ScrollView>
    	</View>
	)
}