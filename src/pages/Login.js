import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        </form>
        <p className="text-center mt-4">Don't have an account? <a href="/signup" className="text-blue-500">Signup</a></p>
      </div>
    </div>
  );
}

export default Login;
