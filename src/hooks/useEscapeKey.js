import React from 'react';

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const closeAllModals = (event) => {
      if (event.code === 'Escape') {
        callback(event);
      }
    };
    window.addEventListener('keydown', closeAllModals);

    return () => {
      window.removeEventListener('keydown', closeAllModals);
    };
  }, [callback]);
};
