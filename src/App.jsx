import { useState } from 'react'
import './App.css'
import PostForm from './components/PostForm'
import PostList from './components/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-900 text-white h-screen w-screen'>
      <h1 className='font-bold text-center text-3xl p-5'>Post Manager</h1>
      <div className='max-w-3xl mx-auto m-2 flex  flex-col p-5 border-2 border-white rounded-xl hover:shadow-sm hover:shadow-white  '>
        <h3 className='font-semibold text-xl text-center text-gray-300'>Add a New Post</h3>
        <PostForm />
      </div>
      <div className='mx-auto text-center m-10 bg-gray-400 p-2 text-gray-900'>
        <PostList />
      </div>
    </div>
    </>
  )
}

export default App
