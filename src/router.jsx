import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Item from "./pages/item/Item";
import Items from "./pages/items/Items";
import AddItem from "./pages/addItem/AddItem";

const router = createBrowserRouter([
  {
    path: "/gestordeestoque",
    index: true,
    element: <Dashboard />,
  },
  {
    path: "/items",
    element: <Items />,
  },
  {
    path: "/addItem",
    element: <AddItem />,
  },
  {
    path: "/items/:itemId",
    element: <Item />,
  },
]);

export default router;
