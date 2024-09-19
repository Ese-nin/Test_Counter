import React from "react";

type Props = {
  text: string;
};

export const Text: React.FC<Props> = ({ text }) => {
  return <span>{text}</span>;
};
