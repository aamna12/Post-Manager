import React, {useState} from 'react';
import axios from "axios";

function PostForm() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [userId, setUserId] = useState("");

    const createPost = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: title,
                body: desc,
                userId: parseInt(userId)
            });
            setTitle("");
            setDesc("")
            setUserId("");
        }catch(error){
            console.error(error);
        }
    }
    return (
        <>
            <form onSubmit={createPost}>
                <label htmlFor="title" className="text-sm text-white">Enter Title</label>
                <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} className="mb-2 text-sm rounded-md w-full p-2 bg-gray-300 text-black outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-indigo-600" />

                <label htmlFor="desc" className="text-sm text-white ">Enter Description</label>
                <textarea name="desc" id="desc" rows="3" value={desc} onChange={(e)=>setDesc(e.target.value)} className="w-full mb-2 text-sm rounded-md bg-gray-300 px-3 py-1.5 outline text-black outline-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-indigo-600 "></textarea>
                <label htmlFor="userId" className="text-sm text-white ">Select User Id</label>
                <select value={userId} className='text-black rounded-md ml-3 p-1 text-sm' onChange={(e)=>setUserId(e.target.value)}>
                    <option value="">Select User Id</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                <div className="mt-2 flex ">
                    <button type="submit" className="font-semibold text-gray-900 p-2 text-sm bg-white rounded-md hover:scale-110">Create Post</button>
                </div>
            </form>

        </>
    )
}

export default PostForm
