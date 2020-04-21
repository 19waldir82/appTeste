import React from 'react'
import { Image, View } from 'react-native'


export default Resultado = () => {    
    
    
    const num = Math.floor(Math.random() * 2)

    
    if(num === 0) {
        return(
            <View style={{ backgroundColor: '#000', flex: 1, alignItems:'center', justifyContent: 'center' }}>
                <View>
                    <Image source={ require('./imgs/moeda_cara.png') }/>
                </View>
            </View>
            
        )   
    }
      
    if(num === 1) {
        return(
            <View style={{ backgroundColor: '#000', flex: 1, alignItems:'center', justifyContent: 'center' }}>
                <View>
                    <Image source={ require('./imgs/moeda_coroa.png') }/>
                </View>
            </View>
            
        )   
    } 
}