import React from "react";
import Header from "./SellTicket/Header";
import {
  Container,
  Typography,
  Card,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Grid,
  CardContent,
  Stack,
} from "@mui/material";
import Footer from "../Footer";
import NavbarBlack from "../NavbarBlack";
import Vector from "../Icons/Vector.png";
import SearchIcon from "@mui/icons-material/Search";
const Account = () => {
  //Functions and Objects
  const activity = [
    {
      name: "Personal info",
      desc: "Edit and verify your personal details.",
    },
    {
      name: "Login & security",
      desc: "Update password and secure your account.",
    },
    {
      name: "Payments & shipping",
      desc: "Manage your payment, delivery and payout information.",
    },
    {
      name: "Notifications",
      desc: "Let us know what kinds of messages you'd like to receive.",
    },
    {
      name: "Log out",
      desc: "Sign-out from this device",
    },
  ];
  //CSS
  const theme = useTheme();
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  const cards = {
    width: 666,
    px: "20px",
    py: "20px",
    mb: "10px",
    background: "#fff",
    color: "#000",
    my: "20px",
    borderRadius: "10px",
    boxShadow: "3px 10px 40px rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
  };
  return (
    <>
      <NavbarBlack />
      <Container maxWidth="xxl" sx={{ pt: 18 }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={6} md={6} sm={12} sx={{ mb: 1 }}>
              <Stack direction="column" spacing={0}>
                <Typography variant="h4">
                  <b>Account</b>
                </Typography>
                <Typography color="#616161" variant="h6">
                  Welcome Back, John
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
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
      <Container maxWidth="xxl" sx={{ mt: 4, mb: 14 }}>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {activity.map((a) => {
              return (
                <>
                  <Card sx={cards}>
                    <CardContent>
                      <Typography variant="h5">
                        <strong>{a.name}</strong>
                      </Typography>
                      <br />
                      <Typography color="#979497">{a.desc}</Typography>
                    </CardContent>
                  </Card>
                </>
              );
            })}
          </Stack>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Account;
