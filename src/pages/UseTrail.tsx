import { animated, useTrail } from "@react-spring/web";
import { FC, useReducer } from "react";

// https://zenn.dev/chot/articles/b7295f60e58b87

const items = [
  "First",
  "Second",
  "Third",
  "Forth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Ninth",
  "Tenth",
];

export const UseTrail: FC<{}> = () => {
  const [isShown, toggleIsShown] = useReducer((isShown) => !isShown, false);

  // useTrail: 時間差で動くアニメーション
  // * 第1引数: アニメーション対象
  // * 第2引数: 設定
  const trail = useTrail(items.length, {
    config: { mass: 4, tension: 2000, friction: 200 },
    opacity: isShown ? 1 : 0,
    x: isShown ? 0 : 20,
    height: isShown ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <>
      <h1>useTrail</h1>
      <button onClick={toggleIsShown}>{isShown ? "OFF" : "ON"}</button>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div
              style={{
                height,
                backgroundColor: "yellow",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {items[index]}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </>
  );
};
