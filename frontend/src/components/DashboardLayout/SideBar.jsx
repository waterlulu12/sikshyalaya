import React, { useContext } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";
import iconbig from "../../assets/logo-large.svg";
import Image from "../Image";
import { Link } from "react-router-dom";
import NavIcons from "./NavIcons";
import "./statics/css/sideBar.css";
import { UserContext } from "../../utils/Contexts/UserContext";
import configs from "../../utils/configs";

const sidebarItems = [
  [
    {
      id: 1,
      title: "Dashboard",
      route: "/dashboard",
      icon: <AiOutlineDashboard className="sideBar_iconStyle" />,
    },
    {
      id: 2,
      title: "Quiz",
      route: "/quiz",
      icon: <FaChalkboardTeacher className="sideBar_iconStyle" />,
    },
    {
      id: 3,
      title: "Note",
      route: "/note",
      icon: <BiNotepad className="sideBar_iconStyle" />,
    },
  ],

  [
    {
      id: 1,
      title: "Dashboard",
      route: "/admin",
      icon: <AiOutlineDashboard className="sideBar_iconStyle" />,
    },
    {
      id: 2,
      title: "Schools",
      route: "/admin/school",
      icon: <FaChalkboardTeacher className="sideBar_iconStyle" />,
    },
  ],
];

const SideBar = () => {
  const { user } = useContext(UserContext);
  const admin = configs.USER_TYPES.ADMIN === user.user_type;

  return (
    <div className="sideBar_root">
      <Grid
        container
        direction="column"
        alignItems="center"
        className="sideBar_sideBar"
      >
        <Grid item className="sideBar_logoContainerBig">
          <Link to="/">
            <Image src={iconbig} alt={{ iconbig }} />
          </Link>
        </Grid>
        <div className="sideBar_horizontalLine"></div>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          justify="center"
          className="sideBar_iconContainer"
        >
          {sidebarItems[admin ? 1 : 0].map((item) => (
            <Link to={item.route} className="sideBar_sidebarLink" key={item.id}>
              <NavIcons title={item.title} path={item.route} icon={item.icon} />
            </Link>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default SideBar;