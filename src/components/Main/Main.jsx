import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { NoData } from '../NoData/NoData';
import { AddForm } from '../AddForm/AddForm';
import { EditFinance } from '../EditFinance/EditFinance';
import { Category } from '../Category/Category';
import { Finance } from '../Finance/Finance';
import { Total } from '../Total/Total';

import { addCategory } from '../../redux/slices/categoriesSlice';
import { addFinance, toggleFinance } from '../../redux/slices/financesSlice';

import './styles.scss';

export const Main = () => {
  const categories = useSelector((state) => state.categories);
  const finances = useSelector((state) => state.finances);
  const dispatch = useDispatch();

  const onSubmitAddCategory = (titleCategory) => {
    let doesCategoryExist = categories.some(
      (categories) => categories.titleCategory === titleCategory,
    );

    if (doesCategoryExist) {
      alert('This category already exists');
      return;
    }

    dispatch(addCategory({ id: uuidv4(), titleCategory }));
  };
  const onSubmitAddFinance = (titleFinance) => {
    if (categories.length === 0) {
      alert('Add a category first!');
      return;
    }

    dispatch(addFinance({ id: uuidv4(), titleFinance, isEditing: true }));
  };
  const onClickToggleFinance = (id, payload = {}) => {
    dispatch(toggleFinance({ id, payload }));
  };

  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__categories border">
          <AddForm
            onSubmitFunc={onSubmitAddCategory}
            title="Financial categories"
            placeholder="Which category do you want to add?"
            inputName="category"
          />
          {categories.length === 0 && <NoData text="categories" />}
          {categories.map((category) => (
            <Category category={category} key={category.id} />
          ))}
        </div>
        <div className="main__finance border">
          <AddForm
            onSubmitFunc={onSubmitAddFinance}
            title="What's with your finances today?"
            placeholder="What operation do you want to add?"
            inputName="finance"
          />
          {finances.map((objFinance) =>
            objFinance.isEditing ? (
              <EditFinance
                key={objFinance.id}
                finance={objFinance}
                categories={categories}
                onClickConfirmFinance={(id, payload) => onClickToggleFinance(id, payload)}
              />
            ) : (
              <Finance
                key={objFinance.id}
                finance={objFinance}
                onClickEditFinance={(id) => onClickToggleFinance(id)}
              />
            ),
          )}
          {finances.length === 0 ? <NoData text="finances" /> : <Total finances={finances} />}
        </div>
      </div>
    </div>
  );
};
