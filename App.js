import { StyleSheet, TextInput , View, SafeAreaView, Button, ScrollView, Text} from 'react-native';

export default function App() {
  const todos = [
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
            <Button style={styles.completeButton} title='hola' />
            {todo.completed ? <Button title='❌' style={styles.completeButton} /> :  <Button title='✔' style={styles.completeButton} /> }
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
    flexDirection:'row'
  },
  todoListTitle:{
    flex:1
  },
  completeButton:{
    width: 500,
    color: 'red',
    backgroundColor: 'yellow'
  },
  addButton: {
    justifyContent: 'center',
    width:10,
    height:10 
  }
});
