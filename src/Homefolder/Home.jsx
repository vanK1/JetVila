import React, { useEffect, useState } from "react";

function Home() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://node-backend-4b8n.onrender.com/post"
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
    fetchBlogs();
  }, []);
  

  return (
    <div>
      <table className="border-collapse w-full text-left border border-gray-300 bg-red-100">
        <thead className="bg-blue-200">
          <tr className="border-b border-gray-300">
            <th className="p-2 text-center">Title</th>
            <th className="p-2 text-center">Snippet</th>
            <th className="p-2 text-center">Content</th>
            <th className="p-2 text-center">Author</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 text-center p-4">
          {loading ? (
            <tr>
              <td colSpan="2" className="p-4 text-center">Loading...</td>
            </tr>
          ) : (
            data.map((blog) => (
              <tr key={blog._id} className="border-b border-gray-300">
                <td className="p-2">{blog.title}</td>
                <td className="p-2">{blog.snippet}</td>
                <td className="p-2">{blog.content}</td>
                <td className="p-2">By: {blog.author?.fullname} ({blog.author?.email})</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
