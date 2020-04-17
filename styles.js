import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
    principal: {
        flex: 1,
        backgroundColor: '#DAA520',
    },
    viewConteudo: {
        flex: 6,
        backgroundColor: '#DAA520',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touch: {
        flex: 1,
        backgroundColor: '#8A2BE2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtConteudo: {
        fontSize: 100,
        fontWeight: 'bold',
        color: '#8A2BE2'
    },
    txtBotao: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF'
    },
    txtBotaoConteudo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8A2BE2'
    },
    btnJokenpo: {
        flex: 1,
        backgroundColor: '#DAA520',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btnJokResultado: {
        flex: 1,
        backgroundColor: '#DAA520',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    palcoJok: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtResultado: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    },
    item: {
        borderWidth: 1,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#FFF'
    },
    foto: {
        height: 102,
        width: 102
    },
    detalhesItens: {
        marginLeft: 20,
        flex: 1
    },
    txtTitulo: {
        fontSize: 18,
        color: '#8A2BE2',
        paddingBottom: 5
    },
    txtValor: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDetalhes: {
        fontSize: 16
    },
    carregar: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 600
    },
    txtCarregar: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
})