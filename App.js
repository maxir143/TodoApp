import { useState } from 'react'
import { StyleSheet,Pressable , TextInput , View, SafeAreaView, Text, ScrollView} from 'react-native'

export default function App() {
  let todosList = [
    {
      title: 'hacer app nativa',
      completed: false,
      time: 600
    },
    {
      title: 'hacer app nativa 2',
      completed: true,
      time: 500
    },
    {
      title: 'hacer app nativa 3',
      completed: false,
      time: 400
    }
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
    todo.title = todoText
    todo.completed = false

    setTodos(todos => [...todos, todo])
    onChangeTodoText('')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.inputContainer}>
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
    width: 400,
    justifyContent: 'space-around',
    flexDirection:'row',
    margin:50,
  },
  todoListContainer: {
    alignContent:'center',
    flex: 3,
    width: '90%'
  },
  todoListItem: {
    flexDirection:'row',
    marginBottom: 10
  },
  todoListTitle:{
    width: '80%'
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
