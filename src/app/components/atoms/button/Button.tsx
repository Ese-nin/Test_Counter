import React from "react";
import s from "./style.module.css";
import classNames from "classnames";

type Props = {
  callBack: () => void;
  children: React.ReactNode;
  style?: "primary" | "secondary";
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  callBack,
  children,
  style,
  disabled,
}) => {
  const onClickHandler = () => {
    callBack();
  };

  const finalClassName = classNames(
    s.button,
    { [s.disabled]: disabled },
    { [s.red]: style === "primary" },
    { [s.secondary]: style === "secondary" },
    s.default,
  );

  return (
    <button className={finalClassName} onClick={onClickHandler}>
      {children}
    </button>
  );
};
