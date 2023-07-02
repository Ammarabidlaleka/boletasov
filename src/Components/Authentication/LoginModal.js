import React, { useState } from "react";
import {
  Grid,
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  InputAdornment,
  styled,
  MenuItem,
  IconButton,
  Modal,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
function SignupModal({ open, handleClose }) {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleAdd = () => {
    console.log(user);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const countries = [
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" },
    // Add more countries as needed
  ];

  const handleCountryCodeChange = (event) => {
    // Handle country code change
  };

  //CSS
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const containerStyle = {};
  const signupFormContainer = {
    paddingTop: isMatchmd ? "10px" : "20px",
    display: "flex",
    justifyContent: "center",
  };

  const signupForm = {
    width: "100%",
  };

  const inputField = {
    width: isMatchsm ? "90vw" : "100%",
    borderRadius: "5px",
    background: "#fff",
  };

  const signUpButton = {
    width: isMatchsm ? null : "100%",
    background: "#3E39D1",
    fontFamily: "Poppins",
    textTransform: "capitalize",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#ffffff",
    borderRadius: "10px",
    boxShadow: 24,
    pt: 4,
    pb: 12,
    px: 4,
  };
  const fonts = {
    fontFamily: "Poppins",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          textAlign="end"
          variant="h5"
          sx={{ cursor: "pointer" }}
          onClick={handleClose}
          component="h2"
        >
          x
        </Typography>
        <br />
        <br />
        <Container sx={signupFormContainer}>
          <form onSubmit={handleAdd}>
            <Stack sx={signupForm} direction="column" spacing="20px">
              <Typography variant={isMatchsm ? "h6" : "h4"} textAlign="center">
                <b>Log in to BOLETASO</b>
              </Typography>
              <br />
              <Stack spacing={1}>
                <label style={fonts}>
                  <b>Email Address or Phone Number</b>
                </label>
                <TextField
                  type="email"
                  value={user.email}
                  name="email"
                  onChange={handleChange}
                  autoComplete="off"
                  sx={inputField}
                  required
                  size="small"
                />
              </Stack>

              <Stack spacing={1}>
                <label style={fonts}>
                  <b>Password</b>
                </label>
                <TextField
                  sx={inputField}
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  name="password"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePassword}
                          sx={{ color: "#3E39D1" }}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <br />
              <Stack spacing={1}>
                <Button variant="contained" type="submit" sx={signUpButton}>
                  Login
                </Button>

                <Typography variant="subtitle2" textAlign="center">
                  <b>Need a Boletaso account? </b>
                  <span style={{ color: "#3E39D1" }}>
                    <b>Sign up here</b>
                  </span>
                </Typography>
              </Stack>
            </Stack>
          </form>
        </Container>
      </Box>
    </Modal>
  );
}

export default SignupModal;
