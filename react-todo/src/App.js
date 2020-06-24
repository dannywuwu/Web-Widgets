import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      todos: [
        {id: 1, content: 'go biking'},
        {id: 2, content: 'read webtoon'},
        {id: 3, content: 'play piano'},

      ],
    };
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      // todos: todos;
      todos // key and value have same name
    }
    );

  }

  addTodo = (todo) => {
    todo.id = Math.random();
    
    let todos  = [...this.state.todos, todo];

    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="App container">
            <h1 className="center blue-text">Todo List</h1>
            <AddTodo addTodo={this.addTodo}></AddTodo>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
            
      </div>
    );

  }
}

export default App;
