import React, { useState, createContext } from "react";

export const DataContext = createContext();

export function DataProvider(props) {
  const [length, setLength] = useState(20);
  const [array, setArray] = useState([]);
  const [ogArray, setOgArray] = useState([]);

  const [speed, setSpeed] = useState(50);
  const [running, setRunning] = useState(false);
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);

  return (
    <DataContext.Provider
      value={[
        length,
        setLength,
        array,
        setArray,
        ogArray,
        setOgArray,
        speed,
        setSpeed,
        running,
        setRunning,
        disable,
        setDisable,
        disable2,
        setDisable2,
      ]}
    >
      {props.children}
    </DataContext.Provider>
  );
}
