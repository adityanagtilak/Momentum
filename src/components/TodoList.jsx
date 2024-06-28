import React from "react";
import InputTodo from "./InputTodo";
// import EditTodo from "./EditTodo";
import ListTodos from "./ListTodos";
import "./Style.css";

function TodoList() {
    return <div>
        <InputTodo></InputTodo>
        {/* <EditTodo></EditTodo> */}
        <ListTodos></ListTodos>
    </div>
}

export default TodoList;