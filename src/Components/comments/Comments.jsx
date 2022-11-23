import React from 'react'
import './comment.css'

const Comment = ({comment}) => {
  return (
    <div className='Comment'>
      <div >{comment.comment_text}</div>
      {comment.children.length > 0 && comment.children.map(function(child) {
        return <Comment key={child.id} comment={child}/>
      })}
    </div>
  )
}

export default Comment
