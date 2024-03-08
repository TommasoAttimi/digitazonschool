import { useState, useEffect } from "react";
export default function Tab({ number }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (number >= 1 && number <= 10) {
      let newValues = [];
      for (let i = 0; i <= 10; i++) {
        newValues.push(i * number);
      }
      setValues(newValues);
    }
  }, [number]);

  return (
    <>
      <h3 className="multiplicationtable">Multiplication Table</h3>
      {number && (
        <div>
          <div>
            {values.map((value, i) => {
              if (number >= 1 && number <= 10) {
                return (
                  <div className="multiplications">
                    {i} x {number} = {value}
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
}
