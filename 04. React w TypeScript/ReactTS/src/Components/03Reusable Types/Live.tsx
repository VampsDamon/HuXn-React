import React from 'react'

const Live = () => {
  return (
    <div>
      <UserInfo
      username='shahid_vk18'
      age={20}
      location={["Jaipur ,Delhi"]}
      email='sid@gmail.com'
      />
      <AdminInfo
      username='shahid_vk18'
      age={20}
      location={["Jaipur ,Delhi"]}
      email='sid@gmail.com'
      admin='true'
      />
    </div>
  )
}

export default Live


type Info={
    username:string,
    email:string,
    age:number,
    location:string[]
}



const UserInfo=({username,email,age,location}:Info)=>{
     return (
    <ul>
      <li>{username}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
    </ul>
  );
}
const AdminInfo=({username,email,age,location,admin}:Info & {admin:string})=>{
     return (
    <ul>
      <li>{username}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
      <li>
        {admin}
      </li>
    </ul>
  );
}