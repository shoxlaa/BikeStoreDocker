import React from 'react';

const Table = ({ data, selectedTable }) => {
  // Фильтрация данных по выбранной таблице
 // const filteredData = data.filter(item => item.table === selectedTable);

  return (
    <table>
      <thead>
        <tr>
          <th>Заголовок 1</th>
          <th>Заголовок 2</th>
          {/* Добавьте другие заголовки, если необходимо */}
        </tr>
      </thead>
      <tbody>
       
      </tbody>
    </table>
  );
};

export default Table;