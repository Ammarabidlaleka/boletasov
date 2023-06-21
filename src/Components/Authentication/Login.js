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
import {Link} from 'react-router-dom';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BackColor from "../images/login.png";
const Login = () => {
  //Functions and objects
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
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

  const loginFormContainer = {
    paddingTop: isMatchmd ? "20px" : "24%",
    display: "flex",
    justifyContent: "center",
  };

  const loginForm = {
    width: "100%",
  };

  const inputField = {
    width: isMatchsm ? "90vw" : "100%",
    borderRadius: "5px",
    background: "#fff",
  };

  const loginButton = {
    width: isMatchsm ? null : "100%",
    height: "52px",
    background: "#3E39D1",
    textTransform:"capitalize",
    fontSize:20
  };

  //JSX
  return (
    <>
      <Grid container sx={containerStyle}>
        <Grid item xs={12} md={6} lg={6} xxl={6}>
          <Box sx={gridStyle1} />
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Container sx={loginFormContainer}>
            <form onSubmit={handleAdd}>
              <Stack sx={loginForm} direction="column" spacing="28px">
                <Typography
                  variant={isMatchsm ? "h4" : "h3"}
                >
                  <b>Log in to BOLETASO</b>
                </Typography>

                <Stack spacing={1}>
                  <label>
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

                <Stack spacing={3}>
                  <Button variant="contained" type="submit" sx={loginButton}>
                    <b>Login</b>
                  </Button>
                  <Link to = "/signup" style={{textTransfrom:"none"}}><Button sx={{textTransform:"capitalize",color:"#000"}} variant="text"><Typography pl={isMatchsm ? null : "80px"} variant="body1">
                    <b>Need a BOLETASO account?</b>
                    <span style={{ color: "#3E39D1" }}>
                   <b>Sign up here</b>
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

export default Login;
