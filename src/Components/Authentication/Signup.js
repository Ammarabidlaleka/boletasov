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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BackColor from "../images/Back_color.png";
import {Link} from 'react-router-dom';
const Signup = () => {
  //Functions and objects

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

  const gridStyle1 = {
    backgroundImage: `URL(${BackColor})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: isMatchmd ? "60vh" : "100vh",
  };

  const signupFormContainer = {
    paddingTop: isMatchmd ? "20px" : "102px",
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
    height: "52px",
    background: "#3E39D1",
  };

  //JSX
  return (
    <>
      <Grid container sx={containerStyle}>
        <Grid item xs={12} md={6} lg={6} xxl={6}>
          <Box sx={gridStyle1} />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Container sx={signupFormContainer}>
            <form onSubmit={handleAdd}>
              <Stack sx={signupForm} direction="column" spacing="28px">
                <Typography
                  variant={isMatchsm ? "h4" : "h3"}
                >
                  <b>Sign Up For Boletaso</b>
                </Typography>

                <Stack spacing={1}>
                  <label>
                    <b>Email Address</b>
                  </label>
                  <TextField
                    type="email"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    autoComplete="off"
                    sx={inputField}
                    required
                  />
                </Stack>

                <Stack spacing={1}>
                  <label>
                    <b>Phone Number (Optional)</b>
                  </label>

                  <TextField
                    type="number"
                    sx={inputField}
                    value={user.phone}
                    name="phone"
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TextField
                            select
                            value={countries[0].code}
                            onChange={handleCountryCodeChange}
                            variant="standard"
                            sx={{
                              width: "50px",
                              background: "#fff",
                            }}
                          >
                            {countries.map((country) => (
                              <MenuItem key={country.code} value={country.code}>
                                {country.code}
                              </MenuItem>
                            ))}
                          </TextField>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>

                <Stack spacing={1}>
                  <label>
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

                <Stack spacing={1}>
                  <label>
                    <b>Confirm Password</b>
                  </label>
                  <TextField
                    sx={inputField}
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="off"
                    required
                    value={user.confirmpassword}
                    name="confirmpassword"
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleToggleConfirmPassword}
                            sx={{ color: "#3E39D1" }}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
                <Stack spacing={3}>
                  <Button variant="contained" type="submit" sx={signUpButton}>
                    Sign Up
                  </Button>
                  <Link to = "/login" style={{textTransfrom:"none"}}><Button sx={{textTransform:"capitalize",color:"#000"}} variant="text">
                  <Typography pl={isMatchsm ? null : "80px"} variant="body1">
                    <b>Already have an account? </b>
                    <span style={{ color: "#3E39D1" }}>
                      <b>Log in here</b>
                    </span>
                  </Typography>
                  </Button></Link>
                </Stack>
              </Stack>
            </form>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;