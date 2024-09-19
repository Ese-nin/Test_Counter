"use client";
import React, { useCallback } from "react";
import { ButtonText } from "@/app/components/molecules/buttonText/ButtonText";
import { useCounter } from "@/app/components/organisms";
import s from "./style.module.css";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes/routes";

export const CounterView: React.FC = () => {
  const { index, increment, decrement } = useCounter();
  const router = useRouter();

  const goToHome = useCallback(() => {
    router.push(ROUTES.HOME_PAGE);
  }, [router]);

  return (
    <div className={s.wrapper}>
      <div className={s.backBtn}>
        <ButtonText callBack={goToHome} text={"back"} />
      </div>
      <div className={s.counter}>
        <span className={s.count}>{index}</span>
        <div className={s.buttons}>
          <ButtonText callBack={increment} text="Increment" />
          <ButtonText style={"primary"} callBack={decrement} text="Decrement" />
        </div>
      </div>
    </div>
  );
};
