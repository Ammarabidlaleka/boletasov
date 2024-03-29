import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "./images/LogoWhite.png";
import { useNavigate } from "react-router-dom";
import LoginModal from "./Authentication/LoginModal";
import SignupModal from "./Authentication/SignupModal";
import {
  Button,
  useMediaQuery,
  Stack,
  Link,
  MenuItem,
  Menu,
  Container,
} from "@mui/material";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const page = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "Start Selling",
    link: "/startselling",
  },
];

export default function PersistentDrawerLeft() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const [openModal1, setOpenModal1] = useState(false);

  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };

  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ background: "transparent" }}
        position="absolute"
        elevation={0}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          {open ? null : (
            <Typography variant="h6" noWrap component="div">
              <img
                src={Logo}
                style={{ width: isMatchmd ? "120px" : "180px" }}
              />
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {page.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemButton component={Link} onClick={()=>navigate(text.link)}>
                  {text.page}
                </ListItemButton>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Container>
          <div class="dropdown">
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#000000",
              }}
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Music
            </button>
            <ul
              class="dropdown-menu "
              aria-labelledby="dropdownMenuButton"
              id="myDropdown"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                background: "#393939",
              }}
            >
              <li>
                <a
                  class="dropdown-item"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Reggaetón
                </a>
              </li>
              <li class="dropdown-divider"></li>
              <li>
                <a
                  class="dropdown-item"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Rock
                </a>
              </li>
              <li class="dropdown-divider"></li>
              <li>
                <a
                  class="dropdown-item"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Pop
                </a>
              </li>
              <li class="dropdown-divider"></li>
              <li>
                <a
                  class="dropdown-item"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Salsa
                </a>
              </li>
            </ul>
          </div>
          <br />
          <div class="dropdown">
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#000000",
              }}
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sports
            </button>
            <ul
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                background: "#393939",
              }}
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              id="myDropdown1"
            >
              
                {" "}
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick = {()=>navigate('/homesport')}
                  >
                    Home
                  </a>
                </li>
              
              <li class="dropdown-divider"></li>
             
                {" "}
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick = {()=>navigate('/baseballhome')}
                  >
                    Basketball
                  </a>
                </li>
             
              <li class="dropdown-divider"></li>
             
                {" "}
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick = {()=>navigate('/baseballhome')}
                  >
                    Baseball
                  </a>
                </li>
             
              <li class="dropdown-divider"></li>
              
                {" "}
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick = {()=>navigate('/baseballhome')}
                  >
                    Boxing
                  </a>
                </li>
              
              <li class="dropdown-divider"></li>
             
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick = {()=>navigate('/baseballhome')}
                  >
                    WWE
                  </a>
                </li>
             
            </ul>
          </div>
          <br />
          <div class="dropdown">
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#000000",
              }}
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </button>
            <ul
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                background: "#393939",
              }}
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              id="myDropdown2"
            >
              
                {" "}
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={()=>navigate('/homemore')}
                  >
                    Home
                  </a>
                </li>
              
              
                {" "}
                <li class="dropdown-divider"></li>
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={()=>navigate('/comedyhome')}
                  >
                    Comedy
                  </a>
                </li>
              
              <li class="dropdown-divider"></li>
              
                {" "}
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={()=>navigate('/comedyhome')}
                  >
                    Festivals
                  </a>
                </li>
              
              <li class="dropdown-divider"></li>
             
                {" "}
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={()=>navigate('/comedyhome')}
                  >
                    Theatre
                  </a>
                </li>
             
              <li class="dropdown-divider"></li>
              
                {" "}
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={()=>navigate('/comedyhome')}
                  >
                    Other events
                  </a>
                </li>
              
              <li class="dropdown-divider"></li>
             
                <li>
                  <a
                    class="dropdown-item"
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={()=>navigate('/comedyhome')}
                  >
                    Museums
                  </a>
                </li>
             
            </ul>
          </div>
        </Container><br />
        <Container>
          <Stack direction="row" spacing={0}>
          <Button
                    onClick={handleOpenModal}
                    variant="text"
                    size="small"
                    sx={{
                      color: "#000000",
                      textTransform: "capitalize",
                    }}
                  >
                    <b>Login</b>
                  </Button>
                  <LoginModal open={openModal} handleClose={handleCloseModal} />
                  <Button
                      variant="text"
                      size="small"
                      onClick={handleOpenModal1}
                      sx={{
                        color: "#000000",
                        textTransform: "capitalize",
                      }}
                    >
                      <b>Get Started</b>
                    </Button>
                    <SignupModal open={openModal1} handleClose={handleCloseModal1} />
          </Stack>
        </Container>
      </Drawer>
    </Box>
  );
}
