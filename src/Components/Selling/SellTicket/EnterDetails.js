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
const EnterDetails = () => {
  //Functions and Objects
  const navigate = useNavigate();
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleAdd = () => {
    navigate("/SetUpPaymentMethod");
    // window.location.href = "/SetUpPaymentMethod";
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
      <Container maxWidth="xxl" sx={{ mt: 4, mb: 12 }}>
        <Container maxWidth="md">
          <Card sx={form}>
            <CardContent>
              <Typography variant="h5" textAlign="center">
                <b>Enter Details</b>
              </Typography>
              <br />
              <Typography
                variant={isMatchsm ? "subtitle2" : "body1"}
                textAlign="justify"
                color="#757175"
              >
                <b>Note</b>You must include any disclosures that are printed on
                the ticket or that were presented to you at the time of ticket
                purchase (i.e. obstructed view, ADA seating, etc.).
              </Typography>
              <br />
              <br />
              <Stack spacing={2}>
                <Stack>
                  <label>Ticket</label>
                  <TextField size="small" />
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Stack>
                    <label>Section</label>
                    <TextField size="small" />
                  </Stack>
                  <Stack>
                    <label>Row</label>
                    <TextField size="small" />
                  </Stack>
                  <Stack>
                    <label>Seat No.</label>
                    <TextField size="small" />
                  </Stack>
                </Stack>
                <Stack>
                  <label>Delivery Method</label>
                  <TextField select size="small">
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <Stack>
                  <label>Your Location</label>
                  <TextField select size="small">
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <br />
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
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default EnterDetails;
