import { useState } from "react";

function TransferFunds() {
  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();
    alert(`$${amount} transferred to ${receiver}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Transfer Money</h2>
        <form onSubmit={handleTransfer}>
          <input type="text" placeholder="Receiver's Email" className="w-full mb-3 p-2 border rounded" onChange={(e) => setReceiver(e.target.value)} required />
          <input type="number" placeholder="Amount" className="w-full mb-3 p-2 border rounded" onChange={(e) => setAmount(e.target.value)} required />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send Money</button>
        </form>
      </div>
    </div>
  );
}

export default TransferFunds;
