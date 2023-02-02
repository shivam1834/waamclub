import {
    FaTh,
    FaUserAlt,
    // FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaUserTie
  } from "react-icons/fa";

const MenuItemForFranchise = [
    {
      path: "/Frenchise/Dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/agents",
      name: "Agents",
      icon: <FaUserTie />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];

export default MenuItemForFranchise