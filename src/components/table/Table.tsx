import React from 'react';
import { Vehicle } from '../../constants/interfaces';
import CardColor from '../cardColor/CardColor';

import styles from './styles.module.css';

const Table = ({
  theadData,
  tbodyData,
  onClickRow,
}: {
  theadData: string[];
  tbodyData: Vehicle[];
  onClickRow: Function;
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {theadData.map((headTitle: React.Key | string | undefined) => {
            return <th key={headTitle}>{headTitle}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item: Vehicle) => {
          return (
            <tr key={item.id} onClick={() => onClickRow(item.id)}>
              <td className={styles.fontSizeXl}>{item.name}</td>
              <td>{item.plate_number}</td>
              <td>
                <CardColor color={item.color} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
