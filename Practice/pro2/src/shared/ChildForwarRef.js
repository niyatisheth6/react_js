import React,{forwardRef} from 'react'

function ChildForwarRef(props,ref) {
  return (
    <div>
        <input ref = {ref}/>
    </div>
  )
}

export default forwardRef(ChildForwarRef)