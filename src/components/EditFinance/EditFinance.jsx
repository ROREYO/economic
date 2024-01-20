import { useForm } from 'react-hook-form';
import DoneSvg from '../../img/button/done.svg';
import './styles.scss';

export const EditFinance = ({ finance, categories, onClickConfirmFinance }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: finance });

  const inputBorderStyle = (fieldError) => ({
    borderColor: fieldError ? 'red' : '',
  });

  const onClickDoneEdit = (data) => {
    onClickConfirmFinance(finance.id, data);
  };

  return (
    <div className="edit_finances">
      <div className="edit_finances__wrapper">
        <input
          {...register('titleFinance', { required: true })}
          className="edit_finances__text"
          type="text"
          style={inputBorderStyle(errors.titleFinance)}
        />
        <select className="edit_finances__select" {...register('category', { required: true })}>
          {categories.map((category) => (
            <option key={category.titleCategory} value={category.titleCategory}>
              {category.titleCategory}
            </option>
          ))}
        </select>
        <div className="edit_finances__value">
          <input
            {...register('date', { required: true })}
            className="value__date"
            type="date"
            style={inputBorderStyle(errors.date)}
          />
          <select className="edit_finances__select" {...register('action')}>
            <option value="Income">Income</option>
            <option value="Expenditure">Expenditure</option>
          </select>
          <input
            {...register('sum', {
              required: true,
              pattern: {
                value: /^[0-9.]+$/,
              },
            })}
            type="number"
            placeholder="Sum money"
            style={inputBorderStyle(errors.sum)}
          />
        </div>
        <input {...register('note')} className="edit_finances__note" placeholder="Your note" />
      </div>
      <form className="edit_finances__buttons buttons" onSubmit={handleSubmit(onClickDoneEdit)}>
        <button type="submit" className="button">
          <img src={DoneSvg} alt="Done" />
        </button>
      </form>
    </div>
  );
};
