import { useDispatch, useSelector } from 'react-redux';

import DeleteSvg from '../../img/button/delete.svg';
import { deleteCategory } from '../../redux/slices/categoriesSlice';

import './styles.scss';

export const Category = ({ category: { titleCategory, id } }) => {
  const finances = useSelector((state) => state.finances);
  const dispatch = useDispatch();

  const doesFinanceExist = (titleCategory) => {
    return finances.some((finance) => finance.category === titleCategory);
  };

  const onClickDeleteCategory = (titleCategory, id) => {
    if (doesFinanceExist(titleCategory)) {
      alert('This category is related to finance. First delete or edit the finance');
      return;
    }

    dispatch(deleteCategory(id));
  };
  return (
    <div className="categories">
      <div className="categories__text">{titleCategory}</div>
      <div className="categories__buttons buttons">
        <button className="button" onClick={() => onClickDeleteCategory(titleCategory, id)}>
          <img src={DeleteSvg} alt="Delete" />
        </button>
      </div>
    </div>
  );
};
