import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [message, setMessage] = useState(null);

  const showToast = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && <ToastBanner message={message} />}
    </ToastContext.Provider>
  );
}

function ToastBanner({ message }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 bg-[#0CC8A8] text-black px-5 py-3 rounded-lg font-semibold text-sm z-50 shadow-[0_4px_20px_rgba(12,200,168,0.4)] animate-slideUp"
    >
      {message}
    </div>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
