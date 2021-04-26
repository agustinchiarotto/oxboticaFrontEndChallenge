import React from 'react';
import CardColor from '../cardColor/CardColor';
import { vehicle } from '../../types';

import styles from './styles.module.css';

const Table = ({
  theadData,
  tbodyData,
  onClick,
}: {
  theadData: string[];
  tbodyData: vehicle[];
  onClick: Function;
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
        {tbodyData.map((item: vehicle) => {
          return (
            <tr key={item.id} onClick={() => onClick(item.id)}>
              <td>{item.name}</td>
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
