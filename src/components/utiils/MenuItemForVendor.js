import {
    FaTh,
    FaUserAlt,
    // FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    // FaUserTie
  } from "react-icons/fa";

const MenuItemForVendor = [
    {
      path: "/vendor/Dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    // {
    //   path: "/agents",
    //   name: "Agents",
    //   icon: <FaUserTie />,
    // },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/vendor/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/vendor/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];

export default MenuItemForVendor