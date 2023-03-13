// import React, { useState } from "react";

// const Todo = () => {
//   const [todo, setTodo] = useState("");
//   const [todoList,setTodoList]=useState<string[]>([]);

// const AddTodo=()=>{
//     setTodoList([...todoList,todo])
//     setTodo(" ")
// }
// const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//    setTodo(e.target.value)
// }
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="type todo"
//         value={todo}
//         onChange={handleChange}
//       />
//       <button onClick={AddTodo}>Submit</button>

//       <ul>
//       {
//         todoList.map(item=>{
//             return <li key={item}>{item}</li>
//         })
//       }
//       </ul>
//     </div>
//   );
// };

// export default Todo;





// ...............using..useRef......................................






import React, { useRef, useState } from 'react'

const Todo = () => {
const inputRef=useRef<HTMLInputElement|null>(null);
const[todoList,setTodoList]=useState<string[]>([]);

const AddTodo=()=>{
    if(inputRef.current){
        const todo=inputRef.current.value;
         setTodoList([...todoList,todo])
    }
   
}
return (
    <div>
    <input 
    ref={inputRef}
    type="text"
    placeholder='type-todo'
    />
    <button onClick={AddTodo}>AddTodo</button>
    <ul>
    {
        todoList.map(item=>{
            return <li key={item}>{item}</li>
        })
    }
</ul>
    </div>
  )
}
export default Todo;