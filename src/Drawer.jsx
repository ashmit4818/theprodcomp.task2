import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "./Stack";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from "@mui/icons-material/GridView";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgb(39, 24, 124)",
        },
      },
    },
  },
});

const drawerWidth = 250;

export default function PermanentDrawerLeft() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        ></AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              color: "white",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Divider />
          <List>
            {[
              "Dashboard",
              "Manage Subscription",
              "Young Brain",
              "Mid Career",
              "Vendor",
              "Consultant",
              "Reports",
              "Signout",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {text === "Signout" ? (
                      <ExitToAppIcon sx={{ color: "white" }} />
                    ) : index % 6 === 0 ? (
                      <GridViewIcon sx={{ color: "white" }} />
                    ) : (
                      <BusinessCenterRoundedIcon sx={{ color: "white" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
        >
          <Stack />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
