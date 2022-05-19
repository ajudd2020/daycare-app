import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { NavBarItem, NavBarText } from "../../../styles";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        border: "2px black dashed",
        backgroundColor: "primary.dark",
        display: "flex",
        p: 2,
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavBarItem>
            <NavBarText>Children's Country Club Too</NavBarText>
          </NavBarItem>
        </Link>
      </Box>
      <Box display="flex">
        <Link to="/view/classes" style={{ textDecoration: "none" }}>
          <NavBarItem>
            <NavBarText>Classes</NavBarText>
          </NavBarItem>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavBarItem>
            <NavBarText>TEST</NavBarText>
          </NavBarItem>
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
