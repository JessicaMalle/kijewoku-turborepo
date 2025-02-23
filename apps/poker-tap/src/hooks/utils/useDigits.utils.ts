import { useEffect, useState } from 'react';

interface UseDigitsProps {
  value: number;
  digits?: number;
}

const useDigits = ({ value, digits = 0 }: UseDigitsProps): number => {
  const [formattedValue, setFormattedValue] = useState<number>(Number(value.toFixed(digits)));

  useEffect(() => {
    setFormattedValue(Number(value.toFixed(digits)));
  }, [value, digits]);

  return formattedValue;
};

export default useDigits;
