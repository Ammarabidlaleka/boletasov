import {
  AppBar,
  Grid,
  Stack,
  TextField,
  Toolbar,
  InputAdornment,
  styled,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Menu,
  Button,
  FormControl,
  InputLabel,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Logo from "./Icons/LogoBlack.png";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme, useMediaQuery, Divider } from "@mui/material";
import DrawerCompBlack from "./DrawerCompBlack";
import User from "./images/john.png";
import InputBase from "@mui/material/InputBase";
const Navbar = () => {
  // CSS AND STATES
  const theme = useTheme();
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  function openDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.add("show");
  }
  function closeDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.remove("show");
  }
  function openDropdown1() {
    var dropdown = document.getElementById("myDropdown1");
    dropdown.classList.add("show");
  }
  function closeDropdown1() {
    var dropdown = document.getElementById("myDropdown1");
    dropdown.classList.remove("show");
  }
  function openDropdown2() {
    var dropdown = document.getElementById("myDropdown2");
    dropdown.classList.add("show");
  }
  function closeDropdown2() {
    var dropdown = document.getElementById("myDropdown2");
    dropdown.classList.remove("show");
  }
  function openDropdown3() {
    var dropdown = document.getElementById("myDropdown3");
    dropdown.classList.add("show");
  }
  function closeDropdown3() {
    var dropdown = document.getElementById("myDropdown3");
    dropdown.classList.remove("show");
  }
  return (
    <>
      <AppBar
        elevation={0}
        position="absolute"
        sx={{
          background: "transparent",
          pt: isMatchmd ? "4px" : "10px",
          pl: isMatchmd ? "10px" : "20px",
        }}
      >
        <Toolbar>
          {isMatchlg ? (
            <>
              <DrawerCompBlack />
            </>
          ) : (
            <Grid container>
              <Grid item lg={4} md={6}>
                <Stack direction="row" spacing={3}>
                  <img
                    src={Logo}
                    style={{ width: isMatchmd ? "100px" : "160px" }}
                  />
                  <TextField
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <SearchIcon
                          sx={{
                            color: "black",
                            marginRight: "8px",
                          }}
                        />
                      ),
                      style: {
                        border: "none",
                        borderRadius: "5px",
                        background: "rgba(255, 255, 255, 0.12)",
                        boxShadow: " 0px 6px 25px rgba(0, 0, 0, 0.07)",
                        paddingRight: "18px",
                          fontSize: "17px",
                      },
                      inputProps: {
                        style: {
                          color: "black",
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "black",
                      },
                    }}
                    placeholder="Search by team, artist, event, or venue"
                  />
                </Stack>
              </Grid>

              <Grid
                item
                lg={4}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div
                  class="dropdown"
                  onMouseLeave={closeDropdown}
                  onMouseOver={openDropdown}
                >
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "black",
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
                    style={{left: "50%", transform: "translateX(-50%)",background:"#393939"}}
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    id="myDropdown"
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
                <div
                  class="dropdown"
                  onMouseLeave={closeDropdown1}
                  onMouseOver={openDropdown1}
                >
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "black",
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
                    style={{left: "50%", transform: "translateX(-50%)",background:"#393939"}}
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    id="myDropdown1"
                  >
                     <Link to="/homesport" style={{textDecoration:"none"}}>  <li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Home
                      </a>
                    </li></Link>
                    <li class="dropdown-divider"></li>
                    <Link to="/baseballhome" style={{textDecoration:"none"}}> <li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Basketball
                      </a>
                    </li></Link>
                    <li class="dropdown-divider"></li>
                    <Link to="/baseballhome" style={{textDecoration:"none"}}> <li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Baseball
                      </a>
                    </li></Link>
                    <li class="dropdown-divider"></li>
                    <Link to="/baseballhome" style={{textDecoration:"none"}}><li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Boxing
                      </a>
                    </li></Link>
                    <li class="dropdown-divider"></li>
                    <Link to="/baseballhome" style={{textDecoration:"none"}}><li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        WWE
                      </a>
                    </li></Link>
                  </ul>
                </div>
                <div
                  class="dropdown"
                  onMouseLeave={closeDropdown2}
                  onMouseOver={openDropdown2}
                >
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "black",
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
                    style={{left: "50%", transform: "translateX(-50%)",background:"#393939"}}
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    id="myDropdown2"
                  >
                     <Link to="/homemore" style={{textDecoration:"none"}}>  <li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Home
                      </a>
                    </li></Link>
                    <li class="dropdown-divider"></li>
                    <Link to="/comedyhome" style={{textDecoration:"none"}}> <li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Comedy
                      </a>
                    </li></Link>
                    <li class="dropdown-divider"></li>
                    <Link to="/comedyhome" style={{textDecoration:"none"}}> <li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Festivals
                      </a>
                    </li></Link>
                    <li class="dropdown-divider"></li>
                    <Link to="/comedyhome" style={{textDecoration:"none"}}><li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Theatre
                      </a>
                    </li></Link>
                    <li class="dropdown-divider"></li>
                    <Link to="/comedyhome" style={{textDecoration:"none"}}><li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Other events
                      </a>
                    </li></Link>
                    <li class="dropdown-divider"></li>
                    <Link to="/comedyhome" style={{textDecoration:"none"}}><li>
                      <a
                        class="dropdown-item"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Museums
                      </a>
                    </li></Link>
                  </ul>
                </div>
              </Grid>

              <Grid lg={4} md={6}>
                <Stack
                  direction="row"
                  spacing={4}
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <Link to="/startselling" style={{ textTransform: "none" }}>
                    <Button
                      variant="text"
                      size="small"
                      sx={{ color: "#000", textTransform: "capitalize" }}
                    >
                      <b>Start Selling</b>
                    </Button>
                  </Link>
                  <div
                    className="vl"
                    style={{ borderLeft: "1px solid #979497", height: "34px" }}
                  ></div>
                  <Stack
                    direction="row"
                    sx={{ display: "flex", alignItems: "center" }}
                    spacing={1}
                  >
                    <Link to="/account" style={{ textTransform: "none" }}>
                      <Avatar src={User} />
                    </Link>
                    <Typography color="black">
                      <b>John</b>
                    </Typography>
                  </Stack>
                  <div
                    class="dropdown"
                    onMouseLeave={closeDropdown3}
                    onMouseOver={openDropdown3}
                  >
                    <button
                      style={{ background: "transparent", border: "none",color:"black" }}
                      class="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      $Usd
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                      id="myDropdown3"
                      style={{left: "50%", transform: "translateX(-50%)",background:"#393939"}}
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
                          Pkr
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
                          Dollar
                        </a>
                      </li>
                      <li class="dropdown-divider"></li> <li>
                        <a
                          class="dropdown-item"
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Dirham
                        </a>
                      </li>
                    </ul>
                  </div>
                </Stack>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
