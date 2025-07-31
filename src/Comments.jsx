import Reac, { useState } from 'react'

function Comments() {
    let [formData, setFormData] = useState({
        Comment: ''
        
    });

    let handlechange = (joe) => {
        setFormData({ ...formData, [joe.target.name]: joe.target.value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send data to a server
        const response = async () => {
            try {
                // const res = await fetch('https://node-backend-4b8n.onrender.com/user/login', {
                    const res = await fetch('http://localhost:3001/Comment', {
                    method: 'COMMENT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include', // Include credentials for session management
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
        <h1 className=' text-4xl font-bold'>Create Your Comment here!!</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col space-y-4 mt-8 w-80'>
            <label className=' flex flex-col'>
                Comment:
                <input onChange={handlechange} type="text" name="Comment" className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
            </label>

            <button type="submit" className=' mt-4 p-2 bg-blue-600 rounded'>Submit</button>
        </form>
    </div>
  )
}

export default Comments