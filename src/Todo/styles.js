import {StyleSheet,Dimensions} from 'react-native';
const color='#ffa726'

const main =StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#607d8b'
},
banner:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    alignItems:'center'
    
},
todoText:{
    fontSize:50,
    fontWeight:'bold',
    color:color,
},
todoCount:{
    fontSize:25,
    color:color,
},
emptyComponent:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
}
})

const todo_input=StyleSheet.create({
    inputContainer:{
        backgroundColor:'#fafafa',
        padding:10,
        margin:10,
        borderRadius:10,
    },
    container:{
        backgroundColor:'#e0e0e0',
        padding:10,
        margin:10,
        borderRadius:5,
    },
    buttonContainer:{
        backgroundColor:'#37474f',
        width:Dimensions.get('window').width/2.5,
        alignSelf:'center',
        padding:10,
        margin:10,
        borderRadius:10,
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    }
})

const todo_cart=StyleSheet.create({
    container:{
        backgroundColor:'#bdbdbd',
        padding:8,
        margin:5,
        borderRadius:10,
    },
    text:{
        fontSize:20
    }
})

export {main,todo_input,todo_cart};