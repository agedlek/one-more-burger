import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import MenuPage from "./Menu/MenuPage";
import OrderPage from "./Order/OrderPage";
import SummaryPage from "./Summary/SummaryPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <MenuPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/summary",
        element: <SummaryPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
