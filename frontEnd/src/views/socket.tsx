import React, { useEffect,useState} from "react";
import io from 'socket.io-client'

const socket = io('ws://localhost:8080')
export default function socket1() { 
  let [msg, setMsg] = useState("")
  useEffect(() => { 
    socket.on('connect', () => {
      console.log('connect....')
    });
    const handleMsg = (data: any) => {
      console.log(`receive data ${data}`)
      // setData()
      setMsg(msg + data)
    }
    socket.on('message', handleMsg);
    return () => { 
      socket.off('connect', (data: any) => {
        console.log(`off connect`)
      });
      socket.off('message', handleMsg);
    }
  },[])
  return (
  
    <div>
      <div>test</div>
      <div>{msg}</div>
    </div>
  )
}
// export default function Counter() {
//   // 注意这里变成 let
//   let [count, setCount] = useState(0);
//   console.log('outer1', count);
//   useEffect(() => {
//     console.log('outer',count);
//     const id = setInterval(() => {
//       // 这种写法是不好的
//       console.log(count);
//       // setCount(++count);
//       setCount(count + 1);
//     }, 1000);
//   }, []);
  
//   return <h1>{count}</h1>;
// }
