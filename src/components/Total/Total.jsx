import './styles.scss';

export const Total = ({ finances }) => {
  const getSum = (action) => {
    return finances
      .filter((finance) => finance.action === action)
      .reduce((sum, finance) => sum + +finance.sum, 0);
  };

  console.log();

  const sumIncome = getSum('Income');
  const sumExpenditure = getSum('Expenditure');
  const sumTotal = sumIncome - sumExpenditure;

  return (
    <div className="total">
      <div className="total__wrapper">
        <div className="total__summ">
          Income:
          <div className="plus">{sumIncome.toLocaleString()}</div>$
        </div>
        <div className="total__summ">
          Expenditure:
          <div className="minus">{sumExpenditure.toLocaleString()}</div>$
        </div>
        <div className="total__summ">
          Total:
          <div className={sumTotal > 0 ? 'plus' : 'minus'}>{sumTotal.toLocaleString()}</div>$
        </div>
      </div>
    </div>
  );
};
