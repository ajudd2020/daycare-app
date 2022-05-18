import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      justifyContent="center"
      // position="fixed"
      // bottom={0}
      // width="100%"
      sx={{
        backgroundColor: "primary.dark",
        p: 1,
      }}
    >
      <Box>
        <Typography>99999 Frankfort Square Road</Typography>
        <Typography>Frankfort IL, 60423</Typography>
        <Typography>815-444-4444</Typography>
      </Box>
      {/* <Link to="/test" style={{ textDecoration: "none" }}>
        <NavBarItem>
          <NavBarText>Test</NavBarText>
        </NavBarItem>
      </Link> */}
    </Box>
  );
};

export default Footer;
