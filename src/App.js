import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import MenuPage from "./Menu/MenuPage";
import OrderPage from "./Order/OrderPage";
import SummaryPage from "./Summary/SummaryPage";
import { AppProvider } from "./appContext";

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
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App;
