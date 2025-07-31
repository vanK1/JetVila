import React, { useState } from 'react'

function Posts() {
    let [formData, setFormData] = useState({
        title: '',
        snippet: '',
        content: ''
    });

    let handlechange = (joe) => {
        setFormData({ ...formData, [joe.target.name]: joe.target.value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send data to a server
        const response = async () => {
            try {
                // const res = await fetch('https://node-backend-4b8n.onrender.com/Post', {
                const res = await fetch('http://localhost:3001/Post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify(formData)
                });
                const data = await res.json();
                console.log('Success:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        response();
    }

  return (
    <div className=' h-screen flex items-center justify-center bg-black text-white flex-col'>
        <h1 className=' text-4xl font-bold'> Create Post</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col space-y-4 mt-8 w-80'>
            <label className=' flex flex-col'>
                Title:
                <input onChange={handlechange} type="text" name="title" className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
            </label>
            <label className=' flex flex-col'>
                Snippet:
                <textarea onChange={handlechange} type="text" name="snippet" className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
            </label>
            <label className=' flex flex-col'>
                Content:
                <textarea onChange={handlechange} type="text" name="content" className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
            </label>
          
            <button type="submit" className=' mt-4 p-2 bg-blue-600 rounded'>Create Post</button>
        </form>
    </div>
  )
}

export default Posts