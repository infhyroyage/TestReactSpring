import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main";
import { NotFound } from "../pages/NotFound";
import { UseSpring } from "../pages/UseSpring";
import { UseTrail } from "../pages/UseTrail";
import { UseTransition } from "../pages/UseTransition";

export const Router: FC<{}> = () => {
  return (
    <Routes>
      <Route path="/TestReactSpring/" element={<Main />} />
      <Route path="/TestReactSpring/useSpring" element={<UseSpring />} />
      <Route
        path="/TestReactSpring/useTransition"
        element={<UseTransition />}
      />
      <Route path="/TestReactSpring/useTrail" element={<UseTrail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
