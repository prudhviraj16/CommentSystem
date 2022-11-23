import React,{useState} from 'react';
import './App.css'
import Comment from './Components/comments/Comments';
import { comments } from './data';

const App = () => {

  const [data,setData] = useState(comments)
  return (
    <>
      {data.map((item,index)=>(
        <div key={index}>
          <Comment comment={item} />
        </div>
      ))}
    </>
  )
}

export default App