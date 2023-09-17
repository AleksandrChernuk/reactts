import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";

interface ILayautProps {}

const Layaut: FC<ILayautProps> = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header>
        <ResponsiveAppBar />
      </header>
      <Box component="main" sx={{ flex: "1 0 auto" }}>
        <Container>
          <Outlet />
        </Container>
      </Box>
      <Box component="footer" sx={{ flexShrink: 0 }}>
        <Box p={2} sx={{ backgroundColor: "#ff5722" }}>
          <Container>footer</Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Layaut;
