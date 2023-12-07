import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from './slices/categoriesSlice';
import financesSlice from './slices/financesSlice';
import currencySlice from './slices/currencySlice';
import localStorageMiddleware from './localStorageMiddleware';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    finances: financesSlice,
    currencies: currencySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
