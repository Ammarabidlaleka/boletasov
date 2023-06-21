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
import { useNavigate } from 'react-router-dom';
const Event_Date = () => {
  //Functions and Objects
  const navigate = useNavigate();
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleAdd = () => {
    navigate('/LoginToVividSeatsAccount');
  //   window.location.href = "/LoginToVividSeatsAccount";
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
      <Container maxWidth="xxl" sx={{ mt: 8, mb: 12 }}>
        <Container maxWidth="md">
          <Card sx={form}>
            <CardContent>
              <Typography variant="h5" textAlign="center">
                <b>Select Event & Date</b>
              </Typography>
              <br />
              <Typography
                variant={isMatchsm ? "subtitle2" : "body1"}
                textAlign="center"
                color="#757175"
              >
                Select the event name and then the specific date you’re selling
                ticket
              </Typography>
              <br />
              <Stack spacing={2}>
                <Stack>
                  <label>Event Name</label>
                  <TextField select size="small">
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <Stack>
                  <label>Date</label>
                  <TextField select size="small">
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <Button
                  variant="contained"
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

export default Event_Date;
