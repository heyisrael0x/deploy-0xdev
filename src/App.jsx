import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

export default function App({ routes }) {
  return (
    <div className="box-sizing:border-box">
      <RouterProvider router={router} />
    </div>
  );
}
