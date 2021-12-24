import { useEffect, useState } from "react";

export const useNumbers = () => {
  const [list, setList] = useState<Array<string>>([]);

  const isPar = (item: number) => !!(item % 2 === 0);

  const isMultiplo = (item: number) => {
    const value: number = 5;
    let isMult: boolean = false;
    for (var i: number = 0; i <= 20; i++) {
      if (value * i === item) {
        isMult = true;
        break;
      }
    }
    return isMult;
  };

  useEffect(() => {
    const num: Array<string> = [];
    for (var i: number = 1; i <= 100; i++) {
      let value: string = `${i}`;
      if (isPar(i)) {
        value = `${value} buzz`;
        if (isMultiplo(i)) {
          value = `${value} bazz`;
        }
        num.push(value);
      }
    }
    setList(num);
  }, []);

  return {
    list,
  };
};
