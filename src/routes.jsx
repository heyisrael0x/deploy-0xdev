import Home from "./pages/Home";
import Create from "./pages/Create";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Create />} />
      <Route path="/create" element={<Home />} />
    </>
  )
);

export default router;
