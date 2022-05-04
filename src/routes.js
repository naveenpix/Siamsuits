
import Dashboard from "views/Dashboard.js";
import Login from "views/Login";
import Shipments from "Pages/Shipment/Shipments";
import Add from "./Pages/Addcustomer/Add";
import Orders from "./Pages/Order/Orders";
import Invoices from "./Pages/Invoice/Invoices";
import Customer from "Pages/Customers/Customer";
import Viewcustomer from "Pages/Customers/Viewcustomer";
import Searchcustomer from "Pages/Customers/Searchcustomer";
import Viewprofile from "Pages/Customers/Viewprofile"
import Repeatorder from "Pages/Order/Repeatorder"
import Grouporder from "Pages/Order/Grouporder"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-bell-55",
    component: Login,
    layout: "/admin",
  },
  {
    path: "/viewprofile",
    name: "Viewprofile",
    icon: "nc-icon nc-bell-55",
    component: Viewprofile,
    layout: "/admin",
  },
  {
    path: "/shipment",
    name: "Shipment",
    icon: "nc-icon nc-bell-55",
    component: Shipments,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Order",
    icon: "nc-icon nc-bell-55",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/viewcustomer",
    name: "Viewcustomer",
    icon: "nc-icon nc-bell-55",
    component: Viewcustomer,
    layout: "/admin",
  },
  {
    path: "/repeatorder",
    name: "Repeatorder",
    icon: "nc-icon nc-bell-55",
    component: Repeatorder,
    layout: "/admin",
  },
  {
    path: "/grouporder",
    name: "Grouporder",
    icon: "nc-icon nc-bell-55",
    component: Grouporder,
    layout: "/admin",
  },
  {
    path: "/add",
    name: "Add",
    icon: "nc-icon nc-bell-55",
    component: Add,
    layout: "/admin",
  },
  {
    path: "/customer",
    name: "Customer",
    icon: "nc-icon nc-bell-55",
    component: Customer,
    layout: "/admin",
  },
  {
    path: "/searchcustomer",
    name: "Searchcustomer",
    icon: "nc-icon nc-bell-55",
    component: Searchcustomer,
    layout: "/admin",
  },
  {
    path: "/invoices",
    name: "Invoice",
    icon: "nc-icon nc-bell-55",
    component: Invoices,
    layout: "/admin",
  }
];

export default dashboardRoutes;
