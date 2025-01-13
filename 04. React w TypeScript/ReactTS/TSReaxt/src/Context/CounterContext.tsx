import React, { createContext,FC,useContext,useState,type ReactNode} from 'react'

type CountContextProps=
{
    count:number,
    increment:()=>void,
    decrement:()=>void,
}


const countContext = createContext<CountContextProps> ({
    count:0,
    increment:()=>{},
    decrement:()=>{}
});




interface CounterProviderProps {
  children: ReactNode;
}

const CounterProvider:FC<CounterProviderProps> = ({children}) => {
  const [count, setCount] = useState<number>(0);

  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);

  return (
    <countContext.Provider value={{count,increment,decrement}}>
      {children}
    </countContext.Provider>
  )
}

export const useCountContext=()=>{
  const context=useContext(countContext)
  

  if(!context){
   throw new Error ("useCountContext only use inside CountProvider")
  }

  return {...context};
}


export default CounterProvider;