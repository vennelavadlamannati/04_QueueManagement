import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";
export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "Waiting" }]);
  };
  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) => (customer.id === id ? { ...customer, status: newStatus } : customer))
    );
  }
const removeFromQueue = (id) => {
    // Remove a customer from the queue
    setQueue(queue.filter((customer)=> customer.id !== id));
  };
  return (
    <>
    <div className="App">
      <header>
         <h1 className="app-title">Queue Management Application</h1>
         <p className="app-description">Manage your customers efficiently.</p>
      </header>
      <main className="app-main">
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay queue={queue} onUpdateStatus={updateStatus} onRemove={removeFromQueue} />
      </main>
    </div>
    </>
  );
};