import React from "react";
import Navbar from "../../NavbarBlack";
import { Grid, Container, Typography, Button } from "@mui/material";
import Footer from "../../Footer";
import Logo from "../../images/rawLogo.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Card,
  CardContent,
  Stack,
  TextField,
  useTheme,
  MenuItem,
  useMediaQuery,
  Modal,
  Box,
} from "@mui/material";
const BillingInfo = () => {
  //Functions and Objects
  const options = ["Option 1", "Option 2", "Option 3"];
  const [open, setOpen] = React.useState(false);
  const handleAdd = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  //CSS
  const form = {
    border: "none",
    boxShadow: "none",
    paddingLeft: 0,
  };
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
    borderRadius: "20px",
  };
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 10 }} maxWidth="xxl">
        <hr></hr>
      </Container>
      <Container maxWidth="xxl" sx={{ mt: 2 }}>
        <Typography variant="h6"> &lt; </Typography>
      </Container>
      <Grid container sx={{ mt: 4, mb: 8 }}>
        <Grid lg={6} sm={12}>
          <Container maxWidth="xl">
            <Typography variant={isMatchsm ? "h5" : "h4"}>
              <b>Billing information</b>
            </Typography>
            <Typography color="#3E39D1" variant={isMatchsm ? "body2" : "h6"}>
              BOLETASO checkout is always secure and encrypted.
            </Typography>
            <br />
            <Typography textAlign="end">
              <Button
                variant="contained"
                sx={{ background: "#3E39D1", textTransform: "capitalize" }}
              >
                <b>Create an account</b>
              </Button>
            </Typography>
            <br />
            <Typography variant={isMatchsm ? "h6" : "h5"}>
              <b>Pay With Card</b>
            </Typography>
            <br />
            <b><label>Credit card number</label></b>
            <br />
            <TextField size="small" fullWidth />
            <br />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={4}>
              <b><label>Exp. month</label></b>
                <TextField size="small" variant="outlined" select fullWidth />
                {/* Replace this with your dropdown component */}
              </Grid>
              <Grid item xs={4}>
              <b><label>Exp. month</label></b>
                <TextField size="small" variant="outlined" fullWidth select />
                {/* Replace this with your dropdown component */}
              </Grid>
              <Grid item xs={4}>
              <b><label>Exp. month</label></b>
                <TextField size="small" variant="outlined" fullWidth />
              </Grid>
            </Grid>
            <br />
            <Typography variant={isMatchsm ? "h6" : "h5"}>
              <b>Billing Address</b>
            </Typography>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <b><label>First Name</label></b>
                <TextField size="small" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
              <b><label>Last Name</label></b>
                <TextField size="small" variant="outlined" fullWidth />
              </Grid>
            </Grid>
            <br />
            <b><label>Country</label></b>
            <br />
            <TextField size="small" fullWidth select />
            <br />
            <br />
            <b><label>Address</label></b>
            <br />
            <TextField size="small" fullWidth />
            <br />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <b><label>City</label></b>
                <TextField size="small" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={3}>
              <b><label>State</label></b>
                <TextField size="small" variant="outlined" fullWidth select />
                {/* Replace this with your dropdown component */}
              </Grid>
              <Grid item xs={3}>
              <b><label>Zip Code</label></b>
                <TextField size="small" variant="outlined" fullWidth />
              </Grid>
            </Grid>
            <br />
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
              <b>Continue to Review</b>
            </Button>
          </Container>
          <br />
        </Grid>
        <Grid lg={6} sm={12} sx={{ px: 3 }}>
          <Typography textAlign="center">
            <img
              src={Logo}
              style={{
                width: isMatchsm ? "100%" : "100%",
                height: isMatchsm ? "300px" : "400px",
              }}
            />
          </Typography>
          <br />
          <Stack direction="column" spacing={1}>
            <Typography variant="h6">
              <b>BSN Final</b>
            </Typography>
            <Typography color="#464646"><b>Tue Apr 20, Time TBD</b></Typography>
            <Typography color="#464646"><b>T-Mobile Park, Seattle, WA</b></Typography>
            <Stack direction="row" justifyContent="space-between">
              <TextField
                size="small"
                label="1 Ticket"
                sx={{ width: "100px" }}
                select
              />
              <Typography color="#9C9C9C" variant="h5">
              </b><span style={{ color: "#3E39D1" }}>$1689</span>x1</b>
              </Typography>
            </Stack>
          </Stack>
          <br />
          <br />
          <Stack direction="row" spacing={1}>
            <MailOutlineIcon sx={{ color: "#3E39D1" }} />
            <Typography color="#3E39D1"><b>johnadam123@gamil.com</b></Typography>
          </Stack>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography textAlign="center">
            <CheckCircleOutlineIcon sx={{ color: "#3E39D1", fontSize: 60 }} />
          </Typography>
          <Typography
            textAlign="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <b>Congratulations</b>
          </Typography>
          <Typography
            textAlign="center"
            color="#575757"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            You have successfully bought your ticket.
          </Typography>
          <Typography textAlign="center" mt={2}>
            <Button
              variant="contained"
              sx={{ background: "#3E39D1", textTransform: "capitalize", px: 4 }}
            >
              <b>Continue Buying</b>
            </Button>
          </Typography>
        </Box>
      </Modal>
      <Footer />
    </>
  );
};

export default BillingInfo;
