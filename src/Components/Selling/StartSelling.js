import React from "react";
import {
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Stack,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StartSell from "../images/StartSelling.png";
import Footer from "../Footer";
import Navbar from "../NavbarWhite";
import { Link } from "react-router-dom";

const StartSelling = () => {
  //Functions and Objects
  const activity = [
    {
      name: "Low & transparent fees",
      desc: "See exactly how much you’ll get paid when you list. We keep our seller fees low, so you take home more money.",
    },
    {
      name: "Reach millions of fans",
      desc: "Get access to millions of fans who are already browsing and buying tickets on SeatGeek.",
    },
    {
      name: "List in a couple of taps",
      desc: "We’ll fill in all the necessary info when you upload your tickets. Just tell us how much you want for them.",
    },
  ];

  //CSS
  const theme = useTheme();
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const frontPic = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 70%), url(${StartSell})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  };
  const sellingButton = {
    backgroundColor: "#fff",
    py: isMatchmd ? null : "10px",
    px: isMatchmd ? null : "80px",
    textTransform: "capitalize",
    color: "#000",
  };
  const StyledTextField = styled(TextField)({
    width: "260px",
    borderRadius: "50px",
    background: "#fff",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.23)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0, 0, 0, 0.23)",
      },
    },
  });
  const cards = {
    width: "500px",
    px: "20px",
    py: "20px",
    background: "#fff",
    color: "#000",
    my: "10px",
    borderRadius: "10px",
    boxShadow: "3px 10px 40px rgba(0, 0, 0, 0.05)"
  }
  return (
    <>
      <Navbar />
      <Container maxWidth="xxl" sx={frontPic}>
        <Container
          maxWidth="xl"
          sx={{
            pt: isMatchmd ? "120px" : "240px",
            pb: isMatchmd ? "80px" : "160px",
            color: "#fff",
          }}
        >
          <Typography variant={isMatchmd ? "h6" : "h3"}>
            <b>
              Sell your seats <br /> where the fans are
            </b>
          </Typography>
          <br />
          <Typography variant={isMatchmd ? "body2" : "h6"} color="white">
            Upload tickets, set a price and get paid. Our transparent
            <br />
            pricing means more money in your pocket.
          </Typography>
          <br />
          <Link to="/myticket" style={{ textTransform: "none" }}>
            {" "}
            <Button variant="contained" sizd="large" sx={sellingButton}>
              <b> Start Selling</b>
            </Button>
          </Link>
        </Container>
      </Container>
      <Container maxWidth="xxl" sx={{ background: "#000", py: "50px" }}>
        <Typography
          textAlign="center"
          variant={isMatchmd ? "h6" : "h4"}
          color="#fff"
        >
          <b>Sell your tickets now</b>
        </Typography>
        <br />
        <Typography textAlign="center">
          {" "}
          <StyledTextField
            placeholder="Event, artist, team, or venue"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              position: "end",
              shrink: true,
            }}
          />
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ mt: "100px", mb: "200px" }}>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {activity.map((a) => {
            return (
              <>
                <Card
                  sx={cards}
                >
                  <CardContent>
                    <Typography>
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
      <Footer />
    </>
  );
};

export default StartSelling;
