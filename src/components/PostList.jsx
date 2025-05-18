import React, {useEffect, useState} from 'react';
import axios from "axios";

function PostList() {

    const [posts, setPosts] = useState([]);

    const getPosts = async()=>{
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const data = res.data;
            setPosts(data);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        getPosts();
    },[])

  return (
    <>
    {
        posts.length === 0 ? <p>No Posts to Display.</p> : (
            <div>
                <h3 className="font-bold text-2xl ">Posts</h3>
            <div className='grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3'>
                
                {posts.map((post, ind)=>{
                    return (<div key={ind} className='p-2 rounded-xl bg-gray-200 text-gray-800 border-2 border-gray-800'>
                        <h3 className='text-center font-bold'>{post.title}</h3>
                        <p>{post.body}</p>
                        <p className='font-semibold text-left m-3 text-black'>{`User Id: ${post.userId}`}</p>
                    </div>)
                })}
            </div>
            </div>
        )
            
            
            
        
    }
    </>
  )
}

export default PostList
