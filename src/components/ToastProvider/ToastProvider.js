import React from 'react';

export const ToastContext = React.createContext('toast');

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const removeToast = (id) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  };
  const addToast = (message, variant) =>
    setToasts((current) => [
      ...current,
      { message, variant, id: crypto.randomUUID() },
    ]);
  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, [setToasts]);
  return (
    <ToastContext.Provider
      value={{ toasts, removeToast, addToast, clearToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
