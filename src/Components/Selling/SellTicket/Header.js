import React from "react";
import {
  Container,
  Grid,
  Stack,
  TextField,
  useTheme,
  useMediaQuery,
  Typography,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Vector from "../../Icons/Vector.png";
const Header = () => {
  //CSS
  const theme = useTheme();
  const isMatchlg = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Container maxWidth="xxl" sx={{ pt: 18 }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item lg={6} md={6} sm={12} sx={{ mb: 1 }}>
              <Stack direction="column" spacing={0}>
                <Typography variant="h4">
                  <b>Sell your Tickets</b>
                </Typography>
                <Typography color="#616161" variant="h6">
                  Sell Now
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
    </>
  );
};

export default Header;
