import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo} from '../store/slices/todoSlice';

const Todo = () => {
  const [todo, setTodo] = useState('');
  // const [datas, setData] = useState([]);
  const dispatch = useDispatch();

  const dataFromStore = useSelector(state => state.todos);
  // console.log(dataFromStore);

  const addTodoHandler = () => {
    if (todo !== '') {
      // setData([...datas, {id: Math.random() * 10, text: todo}]);
      // setTodo('');
      dispatch(addTodo({text: todo}));
      setTodo('');
    }
  };

  const removeTodoHandler = id => {
    // const filteredList = datas.filter(eachTodo => eachTodo.id !== id);
    // setData(filteredList);
    dispatch(removeTodo(id));
  };

  useEffect(() => {
    removeTodoHandler;
  }, []);

  return (
    <ImageBackground
      source={require('../assets/todo.jpg')}
      style={{height: '100%'}}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add todo"
          onChangeText={input => setTodo(input)}
          value={todo}
        />
        <Button
          title="Add Todo"
          onPress={() => {
            addTodoHandler();
          }}
        />

        <FlatList
          data={dataFromStore}
          style={{width: '100%'}}
          renderItem={({item}) => {
            return (
              <View style={styles.eachTodo}>
                <Text style={{color: 'black'}}>{item.text}</Text>
                <AntDesign
                  name={'delete'}
                  size={20}
                  color={'red'}
                  onPress={() => removeTodoHandler(item.id)}
                />
              </View>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 40,
  },

  input: {
    height: 50,
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    fontSize: 20,
    padding: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },

  eachTodo: {
    borderColor: 'blue',
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderRadius: 15,
    padding: 10,
    marginTop: 15,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});
