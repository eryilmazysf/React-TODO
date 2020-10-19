import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import{todo_card, todo_cart} from '../styles'

const TodoCard =(props)=>{
    return (
        <TouchableOpacity 
        style={todo_cart.container}
        onPress={() => props.onDone()}
        onLongPress={()=>props.onRemove()}
        >
            <Text style={[todo_cart.text,{textDecorationLine:props.data.isDone ? 'line-through': null}]}>{props.data.todo}</Text>
        </TouchableOpacity>
    )
}

export {TodoCard}