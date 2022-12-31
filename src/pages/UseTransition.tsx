import { animated, useTransition } from "@react-spring/web";
import { FC } from "react";

export const UseTransition: FC<{}> = () => {
  const transitions = useTransition([1, 2, 3], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions((style, item) => (
    <animated.div style={style}>{item}</animated.div>
  ));
};
