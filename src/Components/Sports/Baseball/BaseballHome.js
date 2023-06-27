import React, { useState } from "react";
import Navbar from "../../NavbarWhite";
import {
  Avatar,
  Grid,
  Stack,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import pic1 from "../../images/baseballhome2.png";
import pic2 from "../../images/baseballhome1.png";
import game1 from "../../images/game1.png";
import game2 from "../../images/game2.png";
import game3 from "../../images/game3.png";
import heart from "../../images/heart.png";
import vector from "../../images/Vector.png";
import date from "../../images/date.png";
import Rectangle from "../../images/Rectangle.png";
import "./baseballhome.css";
import share from "../../Icons/share.png";
import seatingchart from "../../Icons/seatingchart.png";
import Footer from "../../Footer";
import BillingInfo from "./BillingInfo";
const BaseballHome = () => {
  //Functions and Objects
  const [showAll, setShowAll] = useState(false);
  const [Route,setRoute]=useState(true);
  const handleShowAll = () => {
    setShowAll(true);
  };
  const nextComponent = () =>{
    setRoute(false);
  }
  const tickets = [
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "MLB Futures and Legends Game",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
  ];
  const visibleCards = showAll ? tickets : tickets.slice(0, 6);
  const games = [
    {
      pic: game1,
      month: "",
      day: "TBD",
      team: "Atlanta Hawks",
      location: "San Juan, Puerto Rico",
    },
    {
      pic: game2,
      month: "May",
      day: "17",
      team: "Boston Celtics",
      location: "Wells Fargo Center • Philadelphia, PA",
    },
    {
      pic: game3,
      month: "",
      day: "TBD",
      team: "Brooklyn Nets",
      location: "Barclays Center • Brooklyn, NY",
    },
  ];
  //CSS
  const grid1 = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.9) 50%), url(${pic1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    width: "100%",
    pr: 4,
  };
  const Date = {
    backgroundImage: `url(${date})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    width: "100px",
  };
  const buyTicketButton = {
    background: "#fff",
    color: "#110D9A",
    px: 4,
    py: 2,
    borderRadius: "10px",
    fontFamily: 'Poppins'
  };
  const grid2 = {
    backgroundImage: `url(${pic2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    width: "100%",
  };
  const cardTicket = {
    borderRadius: "10px",
    background: "#E6E5FF",
    px: 1,
    boxShadow: "none",
  };
  const rectangle = {
    backgroundImage: `url(${Rectangle})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    width: "100px",
    p: 2,
  };
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
    {Route?
    <>
      <Navbar />
      <Grid container>
        <Grid item lg={8} sm={12} sx={grid1}>
          <Stack direction="row" pt={10} justifyContent="space-between">
            <Typography sx={Date}>
              <b>
                APR <br />
                20
              </b>
            </Typography>
            <Stack direction="row" spacing={2}>
              <div class="container">
                <img src={heart} style={{ width: "20px", height: "20px" }} />
              </div>
              <div class="container">
                <img src={vector} style={{ width: "20px", height: "20px" }} />
              </div>
            </Stack>
          </Stack>
          <br />
          <br />
          <Container maxWidth="lg">
            <Stack direction="column" spacing={1}>
              <Typography
                variant={isMatchmd ? "h6" : "h5"}
                sx={{ color: "#fff" }}
              >
                <b>
                  <span className="underline">Baseb</span>all
                </b>
              </Typography>
              <Typography variant={isMatchmd ? "body2" : "body1"} color="#fff">
                Tickets
              </Typography>
            </Stack>
            <br />
            <br />
            <Typography variant={isMatchmd ? "h6" : "h5"} color="#fff">
              <b>About:</b>
            </Typography>
            <br />
            <Typography color="#fff" variant={isMatchmd ? "body2" : "body1"} fontFamily="Poppins">
              The Major League Baseball All-Star Game is an annual sporting
              event that’s also known as the “Midsummer Classic.” A tradition
              that started in 1933, the MLB All-Star Game always takes place
              either the second or third Tuesday in July and is the halfway mark
              of the MLB season.
            </Typography>
            <br />
            <br />
            <Button  onClick={nextComponent} variant="contained" sx={buyTicketButton}>
              <b>Buy Tickets</b>
            </Button>
            <br />
            <br />
            <Stack direction="row" spacing={6}>
              <Stack
                direction="row"
                spacing={0}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img src={share} style={{ width: "24px", height: "24px" }} />
                <Button variant="text" size="medium" sx={{color:"#fff",textTransform:"capitalize"}}>
                  Share
                </Button>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={seatingchart}
                  style={{ width: "24px", height: "24px" }}
                />
                <Button variant="text" size="medium" sx={{color:"#fff",textTransform:"capitalize"}}>
                  Seating Chart
                </Button>
              </Stack>
            </Stack>
            <br />
          </Container>
        </Grid>
        <Grid item lg={4} sm={12} sx={grid2}></Grid>
      </Grid>
      <br />
      <br />
      <Grid container sx={{ pb: "50px" }}>
        <Grid item lg={8} md={8} sm={12}>
          <Container maxWidth="xl">
            <Typography
              variant={isMatchmd ? "h6" : "h5"}
              sx={{ color: "#000" }}
            >
              
                <span className="underline1">Even</span>ts
              
            </Typography>
            <hr></hr>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                sx={{
                  background: "#3E39D1",
                  px: isMatchmd ? null : 4,
                  textTransform: "capitalize",
                }}
              >
               American Fort, UT
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: "#fff",
                  textTransform: "capitalize",
                  px: isMatchmd ? null : 4,
                  color: "#000",
                  border: "1px solid black",
                }}
              >
                Filter By Date
              </Button>
            </Stack>
            <br />
            <Typography variant={isMatchmd ? "h6" : "h5"}>
              <b>Games near American Fork, UT</b>
            </Typography>
            <br />
            <Stack direction="column" spacing={4}>
              {visibleCards.map((ticket) => {
                return (
                  <>
                    <Card sx={cardTicket}>
                      <CardContent>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Stack direction="row" spacing={3}>
                            <Stack direction="column" justifyContent="center">
                              <Typography
                                variant="h6"
                                textAlign="center"
                                textTransform="uppercase"
                                color="#02004C"
                              >
                                <b>{ticket.month}</b>
                              </Typography>
                              <Typography
                                variant="h6"
                                color="#02004C"
                                textAlign="center"
                              >
                                <b>{ticket.day}</b>
                              </Typography>
                            </Stack>
                            <Stack direction="column" spacing={1}>
                              <Typography variant={isMatchmd ? "body2" : "h6"}>
                                <b>{ticket.name}</b>
                              </Typography>
                              <Typography
                                variant={isMatchmd ? "subtitle2" : "body1"}
                                color="#8b8b8b"
                              >
                                <b>{ticket.date}</b>
                              </Typography>
                            </Stack>
                          </Stack>
                          <Button
                            variant="contained"
                            sx={{
                              background: "#02004D",
                              px: isMatchsm ? null : 3,
                              fontFamily:'Poppins'
                            }}
                            
                          >
                            <b>From ${ticket.price}</b>
                          </Button>
                        </Stack>
                      </CardContent>
                    </Card>
                  </>
                );
              })}
            </Stack>
            <br />
            {!showAll && (
              <Button
                variant="contained"
                sx={{ borderRadius: "20px", background: "#3E39D1" }}
                onClick={handleShowAll}
              >
                View More
              </Button>
            )}
          </Container>
          <br />
          <br />
        </Grid>
        <Grid item lg={4} md={4} sm={12}>
          <Container >
            <Typography
              variant={isMatchmd ? "h6" : "h5"}
              sx={{ color: "#000" }}
            >
              
                <span className="underline1">All G</span>ames
              
            </Typography>
            <br />
            <Stack direction="column" spacing={1}>
              {games.map((game) => {
                return (
                  <>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="196"
                          image={game.pic}
                          alt="green iguana"
                        />
                        <CardContent
                          sx={{ background: "#8886B7", color: "#fff", pl: 2 }}
                        >
                          <Stack direction="row" spacing={2}>
                            <Typography sx={rectangle} fontFamily= 'Poppins'>
                              <b>
                                <Stack spacing={1}>
                                  <span>{game.month}</span>
                                  <span>{game.day}</span>
                                </Stack>
                              </b>
                            </Typography>
                            <Stack direction="column" spacing={0}>
                              <Typography
                                variant={isMatchsm ? "body1" : "h6"}
                                className="caraousalHeadings"
                              >
                                <b>{game.team}</b>
                              </Typography>
                              <Typography
                                variant={isMatchsm ? "body1" : "h6"}
                                className="caraousalHeadings"
                              >
                                {game.location}
                              </Typography>
                            </Stack>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </>
                );
              })}
            </Stack>
          </Container>
        </Grid>
      </Grid>
      <Footer />
      </>
      :
      <>
      <BillingInfo/>
      </>
      }
    </>
  );
};

export default BaseballHome;
