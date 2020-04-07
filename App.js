import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Navbar} from "./src/component/Navbar";
import {AddTodo} from "./src/component/AddTodo";
import {Todo} from "./src/component/Todo";

export default function App() {
    const [todos, setTodos] = useState([
    ])

    const addTodo = title => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title
        }])
    }
    const removeTodo = id => {
        setTodos(prev => prev.filter(item => item.id !== id ))
    }
    return (
        <View>
            <Navbar title="Todo App"/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <FlatList
                    deleteTodo={removeTodo}
                    keyExtractor={item => item.id.toString()}
                    data={todos}
                    renderItem={({item}) => <Todo  todo={item}/>}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10
    }

});
