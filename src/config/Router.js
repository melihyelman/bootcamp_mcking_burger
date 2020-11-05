import Home from "../screens/Home";
import OrderCheck from "../screens/OrderCheck";

export const routes = [
  {
    path: "/",
    exact: true,
    title: "Home",
    component: () => <Home />,
  },
  {
    path: "/ordercheck",
    title: "Order Check",
    component: () => <OrderCheck />,
  },
];
