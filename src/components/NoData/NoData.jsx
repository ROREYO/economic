import noDataSvg from '../../img/noData.svg';

import './styles.scss';

export const NoData = ({ text }) => {
  return (
    <div className="no-data">
      <img className="no-data__img" src={noDataSvg} alt="No Data" />
      <h3 className="no-data__text">{`All your ${text} will be displayed here.`}</h3>
    </div>
  );
};
