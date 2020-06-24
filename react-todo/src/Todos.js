import React from 'react';

const Todos = (props) => {

    const {todos, deleteTodo} = props;

    const todoList  = todos.length ? (
        todos.map(todo => {
            const {id, content} = todo;

            return (
                <div className="collection-item" key={id}>
                    <span onClick={() => deleteTodo(id)}>{content}</span>
                </div>
            );
        })
    ) : (
        <p className="center">You have no todos left!</p>
    );

    return (
        <div className="todos collection">
            {todoList}
        </div>

    )
}

export default Todos;


