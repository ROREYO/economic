import React from 'react';

const useSaveToLocalStorage = (key, data) => {
  React.useEffect(() => {
    const json = JSON.stringify(data);
    localStorage.setItem(key, json);
  }, [key, data]);
};

export default useSaveToLocalStorage;
