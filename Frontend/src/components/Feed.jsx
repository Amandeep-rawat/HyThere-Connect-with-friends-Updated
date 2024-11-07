import React from 'react'
// import Post from '../Post'
import Posts from './Posts'
const Feed = () => {
  return (
    <>
    <div className='flex-1 my-8 flex-col  items-center pl-[20%] max-[450px]:px-2 max-[450px]:my-12 '>
        <Posts/>
    </div>
    </>
  )
}

export default Feed