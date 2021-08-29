import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    
    const [num, setTodoo] = useState({
        
    })
    
    const [todo, setTodo] = useState({

    })
    const [todos, setTodos] = useState( [
        {nume: '1', todoo: 'Manzanas'},
        {nume: '2', todoo: 'Gaseosa'},
        {nume: '3', todoo: 'Detergente'}
        
    ])
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleChang = e => setTodoo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim()=== '' || Object.keys(num).length === 0 || num.num.trim()=== ''){
alert('¡El campo no puede estar vacío!')
return
        }
        setTodos([...todos,{todoo: todo.todo.trim(), nume: num.num.trim()}]);
       
       
    }
    
   const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return (
        
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar producto</label><br/>
             <input type="text" name="todo" onChange={handleChange}/>
             <input type="text" name="num" onChange={handleChang}/>
            <button onClick={handleClick}>AGREGAR</button>
            </form>
            
       {
           todos.map((valu, index) => (
            <Todo todoss={ valu.todoo } numss={valu.nume}  key={index} indexx={index} deleteTodo={deleteTodo} />
            
            ))
           }
            
            {
       }
          {

       }
        </>
    )
}
export default Form
