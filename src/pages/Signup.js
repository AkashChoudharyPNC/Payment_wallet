import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Name" className="w-full mb-3 p-2 border rounded" onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Signup</button>
        </form>
        <p className="text-center mt-4">Already have an account? <a href="/" className="text-green-500">Login</a></p>
      </div>
    </div>
  );
}

export default Signup;
