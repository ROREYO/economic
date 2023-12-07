const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState();

  const saveToLocalStorage = (sliceName) => {
    if (state[sliceName]) {
      const jsonState = JSON.stringify(state[sliceName]);
      localStorage.setItem(sliceName, jsonState);
    }
  };

  saveToLocalStorage('categories');
  saveToLocalStorage('finances');

  return result;
};

export default localStorageMiddleware;
