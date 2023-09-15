import {useEffect, useState} from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedValue(input);
    }, time);
    //Limpieza
    return () => {
      clearTimeout(timeOut);
    };
  }, [input]);

  return debouncedValue;
};
