import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root-layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);