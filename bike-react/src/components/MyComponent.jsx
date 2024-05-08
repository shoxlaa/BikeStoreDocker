import React, { useState, useEffect } from 'react';
import fetchData from "./DataFetcher"; // Предполагая, что это ваша функция для получения данных

const MyComponent = () => {
  const [data, setData] = useState(null); // Стейт для хранения данных

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(); // Получаем данные
        setData(result); // Обновляем стейт с полученными данными
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchDataAsync(); // Вызываем функцию для получения данных
  }, []); // Пустой массив зависимостей означает, что useEffect будет вызван только один раз после монтирования компонента

  // Если данные еще не загружены, отобразим загрузочное состояние
  if (!data) {
    return <div>Loading...</div>; 
  }

  // Рендерим полученные данные
  return (
    <div>
      <h1>Список брендов</h1>
      <ul>
        {data.map(brand => (
          <li key={brand.brandId}>
            {brand.brandName} 
          </li>
        ))}
      </ul>      
    </div>
  );
};

export default MyComponent;
