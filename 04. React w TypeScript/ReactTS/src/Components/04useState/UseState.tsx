import React, { useRef, useState } from 'react'

const UseState = () => {
  return (
    <div>
      <Counter/>
      <UserProfile/>
      <TodoList/>
    </div>
  )
}

const Counter=()=>{
    const [count, setCount] = useState<number>(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
  return <>
     <h1>Counter: <span>{count}</span> </h1>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
  </>
}


const UserProfile=()=>{
    type UserShape={
        name:string;
        age:number
    }
    const [profile, setProfile] = useState<UserShape>({
        name:"Shahid",
        age:20
    });
    return <>
      <h1>Profile Info</h1>
      <p>{profile.name}</p>
      <p>{profile.age}</p>
    </>
}


const TodoList=()=>{
    type TODO={
        id:number,
        title:string | undefined,
        description:string | undefined
    }

    const [todoList, setTodoList] = useState<TODO[]>([]);
    const titleRef=useRef<HTMLInputElement| null>(null)
    const descRef=useRef<HTMLInputElement| null>(null)
    return (<>
        <h1>TODO LIST </h1>
         <form  onSubmit={(e)=>{
            
            e.preventDefault();
           if(todoList?.length) setTodoList((prev)=>{
            return [
                ... prev ,
                {
                  id:todoList.length+1,
                 title:titleRef.current?.value,
                 description:descRef.current?.value
                }
            ]
           })
           else{
            setTodoList(
              [{
                 id:1,
                 title:titleRef.current?.value,
                 description:descRef.current?.value
             
                }]
            )
           }

        //    if (titleRef.current) titleRef.current.value = "";
        //    if (descRef.current) descRef.current.value = "";
         }}>
            <input ref={titleRef} type="text" placeholder='TODO Title' required />
            <input ref={descRef} type="text" placeholder='TODO Description' required />
            <button type="submit">ADD TODO</button>
         </form>

       {
        todoList &&
        todoList.map(({id,title,description})=>(
            <div key={id}>
                <h3>  {id+ "    "+title}</h3>
                <p>{description}</p>
            </div>
        ))
       }
    </>)
}

export default UseState