import React, { ReactNode } from 'react'

const Live = () => {
  return (
    <div>
      <User name='Shahid' age={18} isStudent={true}/>
      <User2 name='Shahil' age={20} isStudent={true}/>
      <User2 name='Shahil' age={20} isStudent={true}>Children of User 2</User2>
    </div>
  )
}

export default Live


const User = (props: { name: string; age: number; isStudent: boolean }) => {
  return (
    <main>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.isStudent}</p>
    </main>
  );
};


type UserProps={
  name:string,
  age:number,
  isStudent:boolean,
  children?:ReactNode
}

const User2 = ({name,age,isStudent,children}:UserProps)=>{
   return (
    <main>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{isStudent}</p>
      {children}
    </main>
  );
}