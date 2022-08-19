import { useState } from 'react';
import { StyleSheet,Pressable , TextInput , View, SafeAreaView, Button, Text, Alert} from 'react-native';

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

  const toggleCompleted = (index) => {
    console.log(index)
    setTodos(todos.map((todo, i) => i === index ? {...todo, completed : !todo.completed} : todo))
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.todoInput} placeholder='todo' />
        <Button title='+' style={styles.addButton} />
      </View>
      <View style={styles.todoListContainer}>
        {todos.map((todo, index) => 
          (<View key={index} style={styles.todoListItem}>
            <Text style={styles.todoListTitle}>{todo.title}</Text>
            <Pressable  style={styles.completeButton} onPressIn={() => toggleCompleted(index)}>
              {todo.completed ? <Button title='❌' /> :  <Button title='✔'/> }
            </Pressable>
          </View>)
        )}
      </View>
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
    width: '80%',
    color: '#841584'
  },
  completeButton:{
    width: '10%'
  },
  addButton: {
  }
});
