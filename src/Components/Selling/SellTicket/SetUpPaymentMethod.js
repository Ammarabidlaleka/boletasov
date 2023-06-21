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
import NavbarBlack from "../../NavbarBlack";
import { useNavigate } from 'react-router-dom';
const SetUpPaymentMethod = () => {
  //Functions and Objects
  const options = ["Option 1", "Option 2", "Option 3"];

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
      <Container maxWidth="xxl" sx={{ mt: 3, mb: 12 }}>
        <Container maxWidth="md">
          <Card sx={form}>
            <CardContent>
              <Typography variant="h5" textAlign="center">
                <b>Set up Payment Method</b>
              </Typography>
              <br />
              <br />
              <Typography
                variant={isMatchsm ? "subtitle2" : "body1"}
                textAlign="justify"
                color="#757175"
              >
                <b>Note</b>:Your Vivid Seats can send payment if your tickets
                sell. This card will not be charged unless payment has been
                remitted and you or the customer reports an issue that is in
                breach of our Seller Terms and Conditions.
              </Typography>
              <br />
              <br />
              <Stack spacing={4}>
                <Stack>
                  <label>Enter your PayPal email address</label>
                  <TextField size="small" />
                </Stack>
                <Stack>
                  <label>Credit card number</label>
                  <TextField size="small" />
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  <Stack>
                    <label>Exp. month</label>
                    <TextField
                      select
                      sx={{ width: isMatchsm ? "130px" : "200px" }}
                      size="small"
                    >
                      {options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Stack>
                  <Stack>
                    <label>Exp. year</label>
                    <TextField
                      select
                      size="small"
                      sx={{ width: isMatchsm ? "130px" : "200px" }}
                    >
                      {options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Stack>
                  <Stack>
                    <label>CVV</label>
                    <TextField
                      size="small"
                      sx={{ width: isMatchsm ? "130px" : "200px" }}
                    />
                  </Stack>
                </Stack>
                <Stack direction="row">
                  <input type="checkbox" />
                  &nbsp;&nbsp;
                  <Typography variant={isMatchsm ? "subtitle2" : null}>
                    Agree to the Seller Terms and Conditions
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#3E39D1",
                    textTransform: "capitalize",
                  }}
                >
                  <b>Submit</b>
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

export default SetUpPaymentMethod;
