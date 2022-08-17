import { StyleSheet, TextInput , View, SafeAreaView, Button, ScrollView, Text} from 'react-native';

export default function App() {
  const todos = [
    {
      title: 'hacer app nativa',
      completed: false,
      time: 600
    }
  ]
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.inputView}>
        <TextInput placeholder='todo' />
        <Button title='+' style={styles.addButton} />
      </View>
      <View style={styles.todoList}>
        {todos.map((todo, index) => 
          (<Text key={index}>
            {todo.title}
            {todo.completed ? <Button title='❌' /> :  <Button title='✔' /> }
            {todo.completed ? null :  <Button title='+ 1hora'/> }
          </Text>)
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    flex:1,
    flexDirection:'row',
    margin:50,
    justifyContent: 'space-around',
    width: '90%'
  },
  todoList: {
    flex: 3
  },
  addButton: {
    width:10,
    height:10 
  }
});
