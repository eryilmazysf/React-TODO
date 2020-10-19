import React,{useState} from 'react';
import {SafeAreaView,View,Text,FlatList,KeyboardAvoidingView} from 'react-native';


import {main} from '../Todo/styles';
import {TodoInput,TodoCard} from '../Todo/component';



const App = ()=>{
    const [list,setList]=useState([])
    function addTodo(text){
        const element={ //eklenen her todo obje haline sokuyoruz
            id:list.length,
            todo:text,  // eger text todo olursa todo:text, yerine sadece todo, yazmak yeterli
            isDone:false
        }
        const newArray=[element,...list] //...list list copy to newArray kopyalama islemi yapar  spread operator cunku list readonly push yapilmiyor
        // newArray.push(element)  ustteki ile ayni element iceride kullaniyoruz ustte daha kisa
        setList(newArray);

       
        
    }
    
    function doneTodo(todoId){
        const newArray =[...list];
        const todoIndex=newArray.findIndex(item=>item.id==todoId);

        newArray[todoIndex].isDone=!newArray[todoIndex].isDone;

        setList(newArray);
    }

    function removeTodo(todoId){
        const newArray=[...list];
        const todoIndex=list.findIndex(t =>t.id==todoId);
        newArray.splice(todoIndex,1);
        setList(newArray);
    }

    const renderTodo=({item})=>{
    return(
    <TodoCard  
        data={item} 
        onDone={() =>doneTodo(item.id)}
        onRemove={()=>removeTodo(item.id)}
        />
    )}

    return(
        <SafeAreaView style={main.container}>
            <KeyboardAvoidingView style={main.container} behavior='padding'>
                <View style={main.banner}> 
                    <Text style={main.todoText}>TODO</Text>
                    <Text style={main.todoCount}>{list.filter(t=>t.isDone===false).length}</Text> 
                </View>
                <FlatList
                
                    keyExtractor={(item,index)=>index.toString()}
                    data={list}
                    renderItem={renderTodo}
                    ListEmptyComponent={() => <Text style={main.emptyComponent}>Nothing ToDo</Text>}
                
                />

                <TodoInput
                    onTodoEnter={todoText=>addTodo(todoText)}
                
                />
            
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default App;