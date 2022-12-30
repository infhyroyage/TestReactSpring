import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main";
import { NotFound } from "../pages/NotFound";

export const Router: FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
