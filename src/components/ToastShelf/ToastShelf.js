import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, removeToast, clearToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    const closeAllModals = (event) => {
      if (event.code === 'Escape') {
        clearToasts();
      }
    };
    window.addEventListener('keyup', closeAllModals);

    return () => {
      window.removeEventListener('keyup', closeAllModals);
    };
  }, [clearToasts]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            variant={variant}
            message={message}
            onClose={() => removeToast(id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
