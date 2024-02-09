import React from 'react'

function PostShare({img,title,num}) {
  return (
    <>
         <div className="flex items-center gap-2 hover:bg-[#DAE0E6] p-2 cursor-pointer">
            {img}
            <span>{num} {title}</span>
          </div>
    </>
  )
}

export default PostShare