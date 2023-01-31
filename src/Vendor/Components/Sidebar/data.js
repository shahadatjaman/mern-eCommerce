import { BiHome } from "react-icons/bi";
import { BsFillInboxFill, BsFillTagFill } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import CategoryIcon from "@mui/icons-material/Category";
import { FaBars, FaThList } from "react-icons/fa";
export const menuItem = [
  {
    path: "/dashboard",
    name: "Home",
    icon: <BiHome />,
  },
  {
    path: "/dashboard/customer_order",
    name: "Orders",
    icon: <BsFillInboxFill />,
  },
  {
    path: "/dashboard/collections",
    name: "Collections",
    icon: <BsFillInboxFill />,
  },
  {
    path: "/dashboard/newproduct",
    name: "New Products",
    icon: <BsFillTagFill />,
  },
  {
    path: "/dashboard/",
    name: "Customers",
    icon: <HiOutlineUser />,
  },
  {
    path: "/dashboard/categories",
    name: "Categories",
    icon: <CategoryIcon />,
  },
  {
    path: "/dashboard/analytics",
    name: "Analytics",
    icon: <GoGraph />,
  },
  {
    path: "/dashboard/setting",
    name: "Setting",
    icon: <FaThList />,
  },
];
