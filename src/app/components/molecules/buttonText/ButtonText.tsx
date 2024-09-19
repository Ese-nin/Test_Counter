import React from "react";
import { Button } from "@/app/components/atoms";
import { Text } from "@/app/components/atoms";

type Props = {
  callBack: () => void;
  text: string;
  style?: "primary" | "secondary";
};

export const ButtonText: React.FC<Props> = React.memo(
  ({ text, callBack, style }) => {
    return (
      <Button style={style} callBack={callBack}>
        <Text text={text} />
      </Button>
    );
  },
);

ButtonText.displayName = "ButtonText";
