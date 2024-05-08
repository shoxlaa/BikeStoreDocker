import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetcher = async () => {
  try {
    const response = await axios.get('https://localhost:44383/api/Brand/get-brand');
    // Если запрос успешен, данные будут доступны в свойстве data объекта response
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Если произошла ошибка, вы можете обработать её здесь
    console.error('Ошибка при получении данных:', error);
    throw error; // Пробросить ошибку для обработки в вызывающем коде, если нужно
  }
};

export default DataFetcher;