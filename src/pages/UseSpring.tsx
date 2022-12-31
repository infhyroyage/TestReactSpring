import { animated, useSpring } from "@react-spring/web";
import { FC } from "react";

export const UseSpring: FC<{}> = () => {
  const style = useSpring({
    from: { color: "black" },
    to: { color: "red" },
    delay: 2000,
  });

  return (
    <>
      <h1>useSpring</h1>
      <animated.div style={style}>Hello World</animated.div>
    </>
  );
};
