import React from 'react'

const Exercise = () => {
  return (
    <div>
      <Button disabled={false} onClick={()=>alert("Button Clicked")} label='click me'/>
      <Button disabled={true} onClick={()=>alert("Button Clicked")} label='click me'/>
    </div>
  )
}

export default Exercise

const Button = ({label,onClick,disabled}:{
    label:string,
    onClick:()=>void,
    disabled:boolean
})=>{
    return <>
    <button disabled={disabled} onClick={onClick}>{label}</button>
    </>
}