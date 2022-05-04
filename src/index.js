
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";
import Login from "../src/views/Login";
import Shipments from "./Pages/Shipment/Shipments";
import Add from "./Pages/Addcustomer/Add";
import Orders from "./Pages/Order/Orders"
import Invoices from "./Pages/Invoice/Invoices"
import Customer from "./Pages/Customers/Customer"
import Viewcustomer from "./Pages/Customers/Viewcustomer"
import Searchcustomer from "./Pages/Customers/Searchcustomer"
import Viewprofile from "./Pages/Customers/Viewprofile"
import Repeatorder from "./Pages/Order/Repeatorder"
import Grouporder from "./Pages/Order/Grouporder"

ReactDOM.render(
<BrowserRouter>
 <Switch> 
     <Route  path="/admin" render={(props) => <AdminLayout {...props} />} />
     <Route exact path="/" render={(props) => <Login {...props} />} />
     <Route exact path="/admin/order" render={(props) => <Orders {...props} />} />
     <Route exact path="/admin/shipment" render={(props) => <Shipments {...props} />} /> 
     <Route exact path="/admin/add" render={(props) => <Add {...props} />} />
     <Route exact path="/admin/invoices" render={(props) => <Invoices {...props} />} />
     <Route exact path="/admin/customer" render={(props) => <Customer {...props} />} />
     <Route exact path="/admin/viewcustomer" render={(props) => <Viewcustomer {...props} />} /> 
     <Route exact path="/admin/searchcustomer" render={(props) => <Searchcustomer {...props} />} />
     <Route exact path="/admin/viewprofile" render={(props) => <Viewprofile {...props} />} />
     <Route exact path="/admin/repeatorder" render={(props) => <Repeatorder {...props} />} />
     <Route exact path="/admin/grouporder" render={(props) => <Grouporder {...props} />} />
  </Switch>
</BrowserRouter>,
document.getElementById("root")
);