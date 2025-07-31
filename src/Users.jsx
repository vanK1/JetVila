import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

function Users() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          // "https://node-backend-4b8n.onrender.com/User"
            "http://localhost:3001/User" // Adjusted to match the local server endpoint
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/user/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
     
        const data = await response.json();
        console.log( data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  

  return (
    <div>
      <table className="border-collapse w-full text-left border border-gray-300 bg-red-100">
        <thead className="bg-blue-200">
          <tr className="border-b border-gray-300">
            <th className="p-2 text-center">Fullname</th>
            <th className="p-2 text-center">Email</th>
            <th className="p-2 text-center">Role</th>
            <th className="p-2 text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 text-center p-4">
          {loading ? (
            <tr>
              <td colSpan="2" className="p-4 text-center">Loading...</td>
            </tr>
          ) : (
            data.map((user) => (
              <tr key={user._id} className="border-b border-gray-300">
                <td className="p-2">{user.fullname}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2"><button onClick={()=> handleDelete(user._id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-800 hover:cursor-pointer"> <MdDelete /> </button></td>

              </tr>
            ))
          )}
        </tbody>
      </table>
        {data.length === 0 && !loading && (
            <div className="text-center p-4">No users found.</div>
        )}
        
    </div>
  );
}

export default Users;
