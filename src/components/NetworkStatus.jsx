import React, { useEffect, useState } from "react";

const NetworkStatus = () => {
  const [status, setStatus] = useState(navigator.onLine ? "Online" : "Offline");
  const [networkInfo, setNetworkInfo] = useState({});

  useEffect(() => {
    const updateStatus = () => {
      setStatus(navigator.onLine ? "Online" : "Offline");
    };

    const updateNetworkInfo = () => {
      if (navigator.connection) {
        setNetworkInfo({
          type: navigator.connection.effectiveType,
          downlink: navigator.connection.downlink,
          rtt: navigator.connection.rtt,
        });
      }
    };

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    navigator.connection?.addEventListener("change", updateNetworkInfo);

    updateNetworkInfo();

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
      navigator.connection?.removeEventListener("change", updateNetworkInfo);
    };
  }, []);

  return (
    <div className="card">
      <h2>Network Status</h2>
      <p>Status: <strong>{status}</strong></p>
      {networkInfo.type && (
        <>
          <p>Type: {networkInfo.type}</p>
          <p>Downlink: {networkInfo.downlink} Mbps</p>
          <p>RTT: {networkInfo.rtt} ms</p>
        </>
      )}
    </div>
  );
};

export default NetworkStatus;
