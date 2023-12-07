import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from '../../redux/slices/currencySlice';

import './styles.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currencies.data);
  const status = useSelector((state) => state.currencies.status);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const getCurrency = (valueCurrency, symbol) => {
    const currency = currencies && currencies[valueCurrency]?.toFixed(2);
    return currency ? currency + ' ' + symbol : 'error';
  };

  return (
    <header className="header">
      <div className="header__currencies">
        {status === 'succeeded' ? (
          <>
            <div className="header__currencies--text">Exchange rate to euro:</div>

            <div className="header__currencies--value">{getCurrency('USD', '$')}</div>
            <div className="header__currencies--value">{getCurrency('GBP', '£')}</div>
            <div className="header__currencies--value">{getCurrency('JPY', '¥')}</div>
            <div className="header__currencies--value">{getCurrency('RUB', '₽')}</div>
          </>
        ) : (
          <div className="header__currencies--value">Loading currencies...</div>
        )}
      </div>
    </header>
  );
};
