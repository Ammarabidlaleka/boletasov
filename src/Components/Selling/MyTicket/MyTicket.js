import {
  Container,
  Grid,
  Stack,
  TextField,
  useTheme,
  useMediaQuery,
  Typography,
  InputAdornment,
  styled,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import React from "react";
import Addcircle from "../../Icons/addcircle.png";
import myTicket from "../../Icons/ticket2.png";
import Clock from "../../Icons/clock.png";
import SearchIcon from "@mui/icons-material/Search";
import image from "../../images/ticket.png";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import Vector from "../../Icons/Vector.png";
import NavbarBlack from "../../NavbarBlack";
import { useNavigate } from 'react-router-dom';
const MyTicket = () => {
  //Functions and Objects
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('/sellTicketEvent_Date');
    // window.location.href = "/sellTicketEvent_Date";
  };
  const tickets = [
    {
      avatarImage: image,
      name: "Thousand Below with Until I Wake",
      date: "Thu Jul 13 at 7:00pm",
      price: "60",
    },
    {
      avatarImage: image,
      name: "Thousand Below with Until I Wake",
      date: "Thu Jul 13 at 7:00pm",
      price: "60",
    },
    {
      avatarImage: image,
      name: "Thousand Below with Until I Wake",
      date: "Thu Jul 13 at 7:00pm",
      price: "60",
    },
  ];
  //CSS
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  const cardTicket = {
    borderRadius: "10px",
    border: "0.1px solid #ccc",
    px: 1,
    boxShadow: "none",
  };
  const addTicket = {
    height: "260px",
    display: "flex",
    boxShadow: "none",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: "0.1px solid #ccc",
    cursor: "pointer",
  };
  return (
    <>
      <NavbarBlack />
      <Container maxWidth="xxl" sx={{ pt: 18 }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={6} md={12} sm={12} sx={{ mb: 1 }}>
              <Stack direction="row" spacing={6}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src={myTicket}
                    style={{ width: "24px", height: "24px" }}
                  />
                  <Typography variant="h6">
                    <b> My Ticket</b>
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img src={Clock} style={{ width: "24px", height: "24px" }} />
                  <Typography color="#616161" variant="h6">
                    History
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              lg={6}
              md={12}
              sm={12}
              sx={{
                display: "flex",
                justifyContent: isMatchlg ? "start" : "end",
              }}
            >
              <TextField
                placeholder="Search"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={Vector} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
      <br />
      <br />
      <Container maxWidth="xl" sx={{ mb: 18 }}>
        <Grid container>
          <Grid item lg={7} sm={12} sx={{ mb: 1 }}>
            <Stack direction="column" spacing={4}>
              {tickets.map((ticket) => {
                return (
                  <>
                    <Card sx={cardTicket}>
                      <CardContent>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Stack direction="row" spacing={3}>
                            <Avatar
                              src={ticket.avatarImage}
                              sx={{ height: "70px", width: "70px" }}
                            />
                            <Stack direction="column" spacing={1}>
                              <Typography variant={isMatchmd ? "body1" : "h6"}>
                                <b>{ticket.name}</b>
                              </Typography>
                              <Typography variant="body1" color="#8b8b8b">
                                {ticket.date}
                              </Typography>
                            </Stack>
                          </Stack>
                          <Typography variant="h5" color="#3e39d1">
                            <b>${ticket.price}</b>
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </>
                );
              })}
            </Stack>
          </Grid>
          <Grid
            item
            lg={5}
            sm={12}
            sx={{
              pl: isMatchlg ? null : "50px",
              width: isMatchsm ? "100vw" : null,
            }}
          >
            <Card
              sx={addTicket}
              onClick={handleAdd}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#000000";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#ccc";
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <img src={Addcircle} />
                  <Typography variant="h6">
                    <b>Add Ticket</b>
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default MyTicket;
