import React from 'react'
import { View, Image } from 'react-native'

export default class ImgUser extends React.Component {

    imagensUser = () => {
        if(this.props.esc === 'Pedra') {
            return(
                <Image source={require('./imgs/pedral.png')}/>
            )
        }

        if(this.props.esc === 'Papel') {
            return(
                <Image source={require('./imgs/papell.png')}/>
            )
        }

        if(this.props.esc === 'Tesoura') {
            return(
                <Image source={require('./imgs/tesoural.png')}/>
            )
        }
    }

    render() {
        return(
            <View>
                {this.imagensUser()} 
            </View>
        )
    }
}