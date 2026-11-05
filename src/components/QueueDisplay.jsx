

function QueueDisplay({ queue, onUpdateStatus, onRemove }) {

  const getStatusColor = (status) => {
    switch (status) {
      case "Waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "Completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  return (
    <div className="queue-display">
      <h2>Current Queue</h2>

      {queue.length === 0 ? (
        <p>No customers in the queue.</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div key={customer.id} className="queue-item">

              {/* Left side: Customer details */}
              <div className="customer-details">
                <span className="customer-name">
                  {customer.name}
                </span>

                <span className="customer-service">
                  {customer.service}
                </span>

                <span
                  className="customer-status"
                  style={{ color: getStatusColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>

              {/* Right side: Action button */}
              <div className="customer-actions">
                {customer.status === "Waiting" && (
                  <button onClick={() => onUpdateStatus(customer.id, "serving")}>
                    Serve
                  </button>
                )}

                {customer.status === "serving" && (
                  <button onClick={() => onUpdateStatus(customer.id, "Completed")}>
                    Complete
                  </button>
                )}

                {customer.status === "Completed" && (
                  <button className="remove-btn" onClick={() => onRemove(customer.id)}>
                    Remove
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
