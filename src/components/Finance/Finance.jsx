import { useDispatch } from 'react-redux';

import { deleteFinance } from '../../redux/slices/financesSlice';

import EditSvg from '../../img/button/edit.svg';
import DeleteSvg from '../../img/button/delete.svg';

import './styles.scss';

export const Finance = ({ finance, onClickEditFinance }) => {
  const dispatch = useDispatch();

  const { titleFinance, category, date, action, sum, note, id } = finance;

  return (
    <div className="finances">
      <div className="finances__wrapper">
        <div className="finances__text">{titleFinance}</div>
        <div className="finances__category">{category}</div>
        <div className="finances__value">
          <input className="value__date" type="date" value={date} disabled />
          <div>{action}</div>
          <div className="value__money">{`${sum} $`}</div>
        </div>
        <div className="finances__note">{note}</div>
      </div>
      <div className="finances__buttons buttons">
        <button className="button" onClick={() => onClickEditFinance(id)}>
          <img src={EditSvg} alt="Edit" />
        </button>
        <button className="button" onClick={() => dispatch(deleteFinance(id))}>
          <img src={DeleteSvg} alt="Delete" />
        </button>
      </div>
    </div>
  );
};
