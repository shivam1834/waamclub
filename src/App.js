import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Franchise from "./pages/Franchise.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NavBar from "./components/NavBar";
import NewFranchise from "./pages/NewFranchise";
import EditFranchise from "./pages/EditFranchise";
import LockScreen from "./pages/LockScreen";
import PrivateRoute from "./components/PrivateRoute";
import Agent from "./pages/Agent";
import EditAgent from './pages/EditAgent';
import NewAgent from './pages/NewAgent';
import MenuItem from "./components/utiils/menuItems";
// import MenuItemForFranchise from "./components/utiils/MenuItemForFranchise";
import FrenchiseDashboard from "./pages/FrenchiseDashboard";
import FullProduct from "./pages/FullProduct";
import VendorList from "./pages/VendorList";
import VendorDashboard from "./pages/VendorDashboard";
import VendorProduct from './pages/VendorProduct';
import VandorAddProduct from './pages/VandorAddProduct';
import Percentage from './pages/Percentage';
import SetPercentage from './pages/SetPercentage';
import LandingPage from './pages/LandingPage';
import NewDemat from './pages/NewDemat';

const ROLES = {
  'Admin': 1,
  'Franchise': 2,
  'Agent': 3,
  'Vendor': 4
}

const App = () => {
  return (
    // TODO ADD Error Boundaries
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<LandingPage/>} />
        <Route path="*"  element={<LandingPage/>} />
        <Route path="/ragister/demat" exact={true} element={<NewDemat/>} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/signup" exact={true} element={<Signup />} />
        <Route path="/lockscreen" exact={true} element={<LockScreen />} />
        {/* <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}>
          <Route
            exact={true}
            path="/dashboard"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Main Dashboard" />
                  </div>
                  <div>
                    <Dashboard />
                  </div>
                </div>
              </div>
            }
          />
          
          <Route
            path="/comment"
            element={
              <Sidebar menuItem={MenuItem}>
                <Comment />
              </Sidebar>
            }
          />
          <Route
            path="/set-percentage"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Percentage" />
                  </div>
                  <Percentage />
                </div>
              </div>
            }
          />
          <Route
            path="/set-percentage/:id"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Percentage" />
                  </div>
                  <SetPercentage />
                </div>
              </div>
            }
          />
          <Route
            path="/franchise"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar menuItem={MenuItem} />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Franchise" />
                  </div>
                  <Franchise />
                </div>
              </div>
            }
          />
          <Route
            path="/franchise/new"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar menuItem={MenuItem} />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="New Franchise" />
                  </div>
                  <NewFranchise />
                </div>
              </div>
            }
          />
          <Route
            path="/franchise/edit"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar menuItem={MenuItem} />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Edit Franchise" />
                  </div>
                  <EditFranchise />
                </div>
              </div>
            }
          />
          <Route
            path="/product"
            element={
              <Sidebar menuItem={MenuItem}>
                <Product />
              </Sidebar>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Sidebar menuItem={MenuItem}>
                <FullProduct />
              </Sidebar>
            }
          />
          <Route
            path="/productList"
            element={
              <Sidebar menuItem={MenuItem}>
                <ProductList />
              </Sidebar>
            }
          />
          <Route
            path="/vendorList"
            element={
              <Sidebar menuItem={MenuItem}>
                <VendorList />
              </Sidebar>
            }
          />
        </Route>
        <Route element={<PrivateRoute allowedRoles={[ROLES.Franchise]} />}>
          <Route
            path="/Frenchise/Dashboard"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Frenchise Dashboard" />
                  </div>
                  <div>
                    <FrenchiseDashboard />
                  </div>
                </div>
              </div>
            } />
        </Route>
        <Route element={<PrivateRoute allowedRoles={[ROLES.Admin, ROLES.Franchise]} />}>
          <Route
            path="/agents"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Agents" />
                  </div>
                  <Agent />
                </div>
              </div>
            }
          />
          <Route
            path="/agent/edit"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Edit Agent" />
                  </div>
                  <EditAgent />
                </div>
              </div>
            }
          />
          <Route
            path="/agent/new"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="New Agent" />
                  </div>
                  <NewAgent />
                </div>
              </div>
            }
          />
        </Route>

        <Route element={<PrivateRoute allowedRoles={[ROLES.Vendor]} />}>
          <Route
            path="/vendor/Dashboard"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Vandor Dashboard" />
                  </div>
                  <div>
                   <VendorDashboard />
                  </div>
                </div>
              </div>
            } />

          <Route
            path="/vendor/productList"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Vandor Product" />
                  </div>
                  <div>
                   <VendorProduct />
                  </div>
                </div>
              </div>
            } />

<Route
            path="/vendor/product/add"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Vandor Add Product" />
                  </div>
                  <div>
                   <VandorAddProduct />
                  </div>
                </div>
              </div>
            } />
            
        </Route>
        
        <Route element={<PrivateRoute allowedRoles={[ROLES.Admin, ROLES.Franchise,ROLES.Vendor,ROLES.Agent]} />}>
        <Route
            path="/profile"
            element={
              <div className="dashboard-layout">
                <div className="side-main">
                  <div className="sticky-side">
                    <Sidebar />
                  </div>
                </div>
                <div>
                  <div className="sticky-nav">
                    <NavBar page="Profile" />
                  </div>
                  <Profile />
                </div>
              </div>
            }
          />
          </Route> */}
      </Routes>
      {/* <Sidebar>
        <Routes>
          <Route path="/" exact={true} element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar> */}
    </BrowserRouter>
  );
};

export default App;
