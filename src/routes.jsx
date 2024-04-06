import Home from "./pages/Home";
import Create from "./pages/Create";
import Airdropper from "./pages/Airdropper";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Create />} />
      <Route path="/airdropper" element={<Airdropper />} />
    </>
  )
);

export default router;
