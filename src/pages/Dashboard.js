import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Welcome to Your Wallet</h2>
      <p className="text-xl">Your balance: <span className="font-bold text-green-600">$1000</span></p>
      <button onClick={() => navigate("/transfer")} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Transfer Money</button>
    </div>
  );
}

export default Dashboard;
