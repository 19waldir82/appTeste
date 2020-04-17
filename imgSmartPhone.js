import React from 'react'
import { View, Image } from 'react-native'

export default class ImgSmartPhone extends React.Component {

    imagensSmartPhone = () => {

        if(this.props.esc === 'Pedra') {
            return(
                <Image source={require('./imgs/pedraw.png')}/>
            )
        }

        if(this.props.esc === 'Papel') {
            return(
                <Image source={require('./imgs/papelw.png')}/>
            )
        }

        if(this.props.esc === 'Tesoura') {
            return(
                <Image source={require('./imgs/tesouraw.png')}/>
            )
        }        
    }

    render() {
        return(
            <View>
                { this.imagensSmartPhone() }
            </View>
        )
    }
}