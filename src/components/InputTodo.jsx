import React, {useState, Fragment, useEffect} from "react";
import "./Style.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsPlus } from "react-icons/bs";

const InputTodo = () => {
    useEffect(() =>{
      Aos.init({duration: 1000})
    }, [])

    const [description, setDescription] = useState("");
    const [remove, removeDiv] = useState();

    const displayNone = () => {
        removeDiv({display: 'none' });
    }
    const onSubmitForm = async e =>{
    e.preventDefault();
    try {
        const body = { description};
        const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
                headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
            })

      window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    }

    return <Fragment>
        <div style={remove} className="search" data-aos="fade-up" onChange={removeDiv}>
        <h1 className="heading">Todo List</h1>
        <IoMdCloseCircleOutline className="close" onClick={displayNone}/>
        <form onSubmit={onSubmitForm}></form>
        <input style={{background: "#ebfffc", color: "#555" , textAlign: "center"}} type="text" placeholder="Add new todo" spellCheck="false" value={description} onChange={e => setDescription(e.target.value)}/>
        {/* <button className="butn" onClick={onSubmitForm}><i class="bi bi-plus-lg"></i></button> */}
        <BsPlus className="butn" onClick={onSubmitForm}/>

      </div>
    </Fragment>
}

export default InputTodo;