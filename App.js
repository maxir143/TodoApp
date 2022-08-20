import { useState, useEffect } from 'react'
import { StyleSheet,Pressable , TextInput , View, SafeAreaView, Text, ScrollView} from 'react-native'

export default function App() {
  let todosList = [
  ]

  const [todos, setTodos] = useState(todosList)
  const [todoText, onChangeTodoText] = useState('')

  const toggleCompleted = (index) => {
    setTodos(todos.map((todo, i) => i === index ? {...todo, completed : !todo.completed} : todo))
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index ))
  }

  const addTodo = (todo) => {
    if (todoText.length === 0) return
    todo.title = todoText
    todo.completed = false
    setTodos(todos => [...todos, todo])
    onChangeTodoText('')
  }
  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.inputContainer, todoText.length === 0 ?  styles.inputError : null]}>
        <TextInput 
          style={styles.todoInput} 
          placeholder='todo' 
          onChangeText={text => onChangeTodoText(text)}
          value={todoText}
        />
        <Pressable style={styles.addButton} onPress={addTodo}>
          <Text style={{color:'white'}}>+</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.todoListContainer}>
        {todos.map((todo, index) => 
          (<View key={index} style={styles.todoListItem}>
            <Text style={styles.todoListTitle}>{todo.title}</Text>
            <Pressable  
            style={styles.completeButton} 
            onPress={() => toggleCompleted(index)} 
            onLongPress={() => deleteTodo(index)}> 
              <Text> {todo.completed ? '✔': '❌'} </Text>
            </Pressable>
          </View>)
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection:'row',
    margin:50,
    backgroundColor: '#EFEFEF'
  },
  todoInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputError:{
    backgroundColor: '#FFB7B7'
  },
  todoListContainer: {
    
  },
  todoListItem: {
    flexDirection:'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoListTitle:{
    width: '80%',
  },
  completeButton:{
    width: 50,
    height: 50,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems:'center'
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems:'center'
  }
});
