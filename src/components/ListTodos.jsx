import React, {Fragment, useEffect, useState} from "react";
// import EditTodo from "./EditTodo.jsx";
import "./Style.css";

const ListTodos = () =>{

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) =>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
            
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () =>{
        try {
            const response = await fetch(`http://localhost:5000/todos`)
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getTodos();
    }, []);

    console.log(todos);
    return <Fragment>
    {" "}      
        <table className="table">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
            </tr> */}
            {todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    {/* <td><EditTodo todo={todo} /></td> */}
                    <td><button onClick={() => deleteTodo(todo.todo_id)}><i class="bi bi-trash-fill"></i></button></td>
                </tr>
            ))

            }
            </tbody>
            </table>
    </Fragment> 
}

export default ListTodos;