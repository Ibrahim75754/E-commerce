import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";

export const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
