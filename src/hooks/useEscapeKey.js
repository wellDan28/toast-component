import React from 'react';

export const useEscapeKey = (func) => {
  React.useEffect(() => {
    const closeAllModals = (event) => {
      if (event.code === 'Escape') {
        func();
      }
    };
    window.addEventListener('keydown', closeAllModals);

    return () => {
      window.removeEventListener('keydown', closeAllModals);
    };
  }, [func]);
};
