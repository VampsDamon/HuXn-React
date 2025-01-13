import React, { FC } from 'react'

const Alternative = () => {
  return (
    <div>
     <User name='shahid Khan' age={19} isStudent={true}/>
    </div>
  )
}


interface UserShape{
  name:string;
  age:number;
  isStudent:boolean
}

const User : FC<UserShape>=({age,isStudent,name})=>{
 return (
    <article>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </article>
  );
}
export default Alternative