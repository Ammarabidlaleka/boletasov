import React from "react";
import Header from "./Header";
import {
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
  Button,
  useTheme,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import NavbarBlack from "../../NavbarBlack";
import { useNavigate } from "react-router-dom";
const LoginToVividSeatsAccount = () => {
  //Functions and Objects
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/EnterDetails");
    // window.location.href = "/EnterDetails";
  };
  //CSS
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  const form = {
    p: 4,
    border: "none",
    boxShadow: "3px 10px 40px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
  };
  return (
    <>
      <NavbarBlack />
      <Header />
      <Container maxWidth="xxl" sx={{ mt: 8, mb: 22 }}>
        <Container maxWidth="md">
          <Card sx={form}>
            <CardContent>
              <Typography variant="h5" textAlign="center">
                <b>Log into your Vivid Seats account</b>
              </Typography>
              <br />
              <Typography
                variant={isMatchsm ? "subtitle2" : "body1"}
                textAlign="center"
                color="#757175"
              >
                <b>Note</b>: If you use our site to purchase tickets, you don’t
                need a separate account to sell tickets with us.
              </Typography>
              <br />
              <br />
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#3E39D1",
                    textTransform: "capitalize",
                  }}
                  onClick={handleAdd}
                >
                  <b>Continue</b>
                </Button>
                <Typography textAlign="center">
                  Don't have an account?{" "}
                  <span style={{ color: "#3E39D1" }}>
                    <b>Create one</b>
                  </span>
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default LoginToVividSeatsAccount;
