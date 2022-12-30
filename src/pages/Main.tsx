import { FC } from "react";
import { Link } from "react-router-dom";

export const Main: FC<{}> = () => {
  return (
    <>
      <h1>Main</h1>
      <ul>
        <li>
          <Link to="/TestReactSpring/useTrail">useTrail</Link>
        </li>
      </ul>
    </>
  );
};
