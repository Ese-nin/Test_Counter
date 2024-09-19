"use client";
import React, { createContext, useCallback, useContext, useState } from "react";
import s from "./style.module.css";

type CounterContextType = {
  index: number;
  increment: () => void;
  decrement: () => void;
};

const CounterContext = createContext<CounterContextType | null>(null);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [index, setIndex] = useState(0);
  const increment = useCallback(() => setIndex((prev) => prev + 1), []);
  const decrement = useCallback(() => setIndex((prev) => prev - 1), []);

  return (
    <div className={s.container}>
      <CounterContext.Provider
        value={{
          index,
          increment,
          decrement,
        }}
      >
        {children}
      </CounterContext.Provider>
    </div>
  );
};
