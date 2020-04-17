import React from 'react'
import { View, Text, Alert, Image } from 'react-native'
import styles from './styles'

export default class Resultados extends React.Component {

    Res = () => {

        if((this.props.escS === 'Pedra') && (this.props.escU === 'Pedra')) {
            return(
                <Text style={styles.txtResultado}>Empate</Text>
            )
        }
        if((this.props.escS === 'Pedra') && (this.props.escU === 'Papel')) {
            return(
                <Text style={styles.txtResultado}>Ganhou</Text>
            )
        }
        if((this.props.escS === 'Pedra') && (this.props.escU === 'Tesoura')) {
            return(
                <Text style={styles.txtResultado}>Perdeu</Text>
            )
        }


        if((this.props.escS === 'Papel') && (this.props.escU === 'Papel')) {
            return(
                <Text style={styles.txtResultado}>Empate</Text>
            )
        }
        if((this.props.escS === 'Papel') && (this.props.escU === 'Tesoura')) {
            return(
                <Text style={styles.txtResultado}>Ganhou</Text>
            )
        }
        if((this.props.escS === 'Papel') && (this.props.escU === 'Pedra')) {
            return(
                <Text style={styles.txtResultado}>Perdeu</Text>
            )
        }


        if((this.props.escS === 'Tesoura') && (this.props.escU === 'Tesoura')) {
            return(
                <Text style={styles.txtResultado}>Empate</Text>
            )
        }

        if((this.props.escS === 'Tesoura') && (this.props.escU === 'Pedra')) {
            return(
                <Text style={styles.txtResultado}>Ganhou</Text>
            )
        }

        if((this.props.escS === 'Tesoura') && (this.props.escU === 'Papel')) {
            return(
                <Text style={styles.txtResultado}>Perdeu</Text>
            )
        }
    }

    render() {
        return( 
            <View>
                { this.Res() }
            </View>
        )
    }
}