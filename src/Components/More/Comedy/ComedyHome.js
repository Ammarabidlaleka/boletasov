import React, { useState,useRef } from "react";
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
  Box
} from "@mui/material";
import pic1 from "../../images/comedyHome.png";
import pic2 from "../../images/comedyHome.png";
import artist1 from "../../images/iration.png";
import artist2 from "../../images/shaggy.png";
import artist3 from "../../images/elovators.png";
import artist4 from "../../images/sublime.png";
import artist5 from "../../images/pepper.png";
import heart from "../../images/heart.png";
import vector from "../../images/Vector.png";
import date from "../../images/date.png";
import Rectangle from "../../images/Rectangle.png";
import "./ComedyHome.css";
import share from "../../Icons/share.png";
import seatingchart from "../../Icons/seatingchart.png";
import Footer from "../../Footer";
import BillingInfo from "./BillingInfo";
import Left from "../../Icons/left.png";
import Right from "../../Icons/right.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comedy1 from "../../images/moreComedy.png";
import comedy2 from "../../images/moreComedy1.png";
import comedy3 from "../../images/moreComedy2.png";
const ComedyHome = () => {
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
      name: "Patrick Warburton",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Comedy Cellar",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Rich Little",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Patrick Warburton",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Rich Little",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Patrick Warburton",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Rich Little",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Patrick Warburton",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Patrick Warburton",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Patrick Warburton",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Patrick Warburton",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
    {
      month: "apr",
      day: "20",
      name: "Rich Little",
      date: "T-Mobile Park • Seattle, WA",
      price: "60",
    },
  ];
  const visibleCards = showAll ? tickets : tickets.slice(0, 6);
  const artists = [
    {
      pic: artist1,
      name:"Iration",
      event:"38 events"
    },
    {
        pic: artist2,
        name:"Shaggy",
        event:"25 events"
    },
    {
        pic: artist3,
        name:"The Evolators",
        event:"15 events"
    },
    {
        pic: artist5,
        name:"Pepper",
        event:"4 events"
    },
    {
        pic: artist3,
        name:"The Evolators",
        event:"15 events"
    },
    {
        pic: artist4,
        name:"Sublime",
        event:"16 events"
    },
    {
        pic: artist3,
        name:"The Evolators",
        event:"15 events"
    },
    {
        pic: artist4,
        name:"Sublime",
        event:"16 events"
    },
    {
        pic: artist5,
        name:"Pepper",
        event:"4 events"
    },{
        pic: artist3,
        name:"The Evolators",
        event:"15 events"
    },
  ];
   //trending events
   const sliderRef = useRef(null);

   const next = () => {
     sliderRef.current.slickNext();
   };
 
   const previous = () => {
     sliderRef.current.slickPrev();
   };
  var settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const trendingEvents = [
    {
      name: "Franco Escamilla",
      date: "Sat Jun 3 at 8:OOpm",
      location: "Abravanel Hall",
      price: "$135",
    },
    {
      name: "John Crist",
      date: "Sat Jun 10 at 4:00pm",
      location: "George S. and Dolores Dore Eccles",
      price: "$76",
    },
    {
        name: "Franco Escamilla",
        date: "Sat Jun 3 at 8:OOpm",
        location: "Abravanel Hall",
        price: "$135",
    },
    {
        name: "John Crist",
      date: "Sat Jun 10 at 4:00pm",
      location: "George S. and Dolores Dore Eccles",
      price: "$76",
    },
    {
        name: "Franco Escamilla",
      date: "Sat Jun 3 at 8:OOpm",
      location: "Abravanel Hall",
      price: "$135",
    },
    {
        name: "John Crist",
        date: "Sat Jun 10 at 4:00pm",
        location: "George S. and Dolores Dore Eccles",
        price: "$76",
    },
    {
     
        name: "Franco Escamilla",
      date: "Sat Jun 3 at 8:OOpm",
      location: "Abravanel Hall",
      price: "$135",
    },
    {
       name: "John Crist",
      date: "Sat Jun 10 at 4:00pm",
      location: "George S. and Dolores Dore Eccles",
      price: "$76",
    },
  ];
  //Comedy
  const sliderRef2 = useRef(null);

  const next2 = () => {
    sliderRef2.current.slickNext();
  };

  const previous2 = () => {
    sliderRef2.current.slickPrev();
  };
  const Comedy = [
    {
      pic: comedy1,
      name: "Basketball",
      date:"Apr 20 • Vivint Arena",
      price:"From $61"
    },
    {
      pic: comedy2,
      name: "Basketball",
      date:"Oct 19 • Vivint Arena",
      price:"From $152"
    },
    {
      pic: comedy3,
      name: "Basketball",
      date:"Jun 3 • Vivint Arena",
      price:"From $84"
      
    },
    {
      pic: comedy2,
      name: "Basketball",
      date:"Oct 19 • Vivint Arena",
      price:"From $152"
    },
    {
      pic: comedy1,
      name: "Basketball",
      date:"Apr 20 • Vivint Arena",
      price:"From $61"
    },
    {
      pic: comedy3,
      name: "Basketball",
      date:"Jun 3 • Vivint Arena",
      price:"From $84"
    },
    {
      pic: comedy2,
      name: "Basketball",
      date:"Oct 19 • Vivint Arena",
      price:"From $152"
    },
    {
      pic: comedy3,
      name: "Basketball",
      date:"Jun 3 • Vivint Arena",
      price:"From $84"
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
                  <span className="underline">Comedy T</span>ickets
                </b>
              </Typography>
            </Stack>
            <br />
            <br />
            <br />
            <Typography variant={isMatchmd ? "h6" : "h5"} color="#fff">
              <b>About:</b>
            </Typography>
            <br />
            <Typography color="#ffffff" variant={isMatchmd ? "body2" : "body1"} fontFamily="Poppins">
            Popular music, better known as “pop,” traces its roots back to the 1950s in both the United States and the United Kingdom. Most pop songs are known for repetitive, catchy lyrics that are easy to both sing and dance along too.
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
      <Container maxWidth="xxl" sx={{ background: "#000", py: "30px" }}>
        <Container maxWidth="xl">
          <br />
          <Typography
            variant={isMatchmd ? "body1" : "h6"}
            sx={{ color: "#fff" }}
          >
            <b>
              <span className="underline">Event</span>s near American Fork, UT
            </b>
          </Typography>
          <br />
          <div>
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-lg-12">
                  <Slider ref={sliderRef} {...settings}>
                    {trendingEvents.map((card) => {
                      return (
                        <>
                          <Card sx={{ borderRadius: "10px",  mr: isMatchlg?"20px":"40px",mr:isMatchsm?"0px":"20px" }}>
                            <CardContent sx={{ background: "#201D6B" }}>
                              <Typography
                                gutterBottom
                                color="white"
                                variant={isMatchmd ? "body1" : "h6"}
                                component="div"
                              >
                                <span className="caraousalHeadings">
                                  {card.name}
                                </span>
                              </Typography>
                              <Typography variant="body2" color="#ffffff">
                                {card.date}
                              </Typography>
                              <br />
                              <Typography variant="body2" color="#ffffff">
                                {card.location}
                              </Typography>
                            </CardContent>
                            <CardContent
                              sx={{ background: "#04032d", color: "#fff" }}
                            >
                              From {card.price}
                            </CardContent>
                          </Card>
                        </>
                      );
                    })}
                  </Slider>
                  </div>
              </div>
                  <a
                    onClick={previous}
                    style={{ textTransform: "none", cursor: "pointer" }}
                    className="arrows"
                  >
                    <img src={Left} />
                  </a>
                  <a
                    onClick={next}
                    style={{ textTransform: "none", cursor: "pointer" }}
                    className="arrows"
                  >
                    <img src={Right} />
                  </a>
                
            </div>
          </div>
          <br />
        </Container>
      </Container>
      <br />
      <br />

      <Container maxWidth="xxl" sx={{ py: "20px" }}>
        <Container maxWidth="xl">
          <Typography
            variant={isMatchmd ? "body1" : "h6"}
            sx={{ color: "#464646" }}
          >
            
              <span className="underline1">Popular</span> Comedy Shows
            
          </Typography>
          <br />
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-lg-12">
                <Slider ref={sliderRef2} {...settings}>
                {Comedy.map((card) => {
                    return (
                      <>
                        <Card sx={{ borderRadius: "10px",  mr: isMatchlg?"20px":"40px",mr:isMatchsm?"0px":"20px" }}>
                          <CardMedia
                            sx={{ height: "162px" }}
                            image={card.pic}
                            title="green iguana"
                          />
                          <CardContent sx={{ background: "#201D6B" }}>
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                            >
                              <Typography
                                gutterBottom
                                color="white"
                                variant="body1"
                                component="div"
                              >
                                <span className="caraousalHeadings">
                                 <b> {card.name}</b>
                                </span>
                              </Typography>
                              <Typography variant="body2" color="#ffffff">
                                {card.price}
                              </Typography>
                            </Stack>
                            <Typography variant="body2" color="#ffffff">
                              {card.date}
                            </Typography>
                            <br />
                          </CardContent>
                        </Card>
                      </>
                    );
                  })}
                </Slider>
                </div>
            </div>
                <a
                  onClick={previous2}
                  style={{ textTransform: "none", cursor: "pointer" }}
                  className="arrows"
                >
                  <img src={Left} />
                </a>
                <a
                  onClick={next2}
                  style={{ textTransform: "none", cursor: "pointer" }}
                  className="arrows"
                >
                  <img src={Right} />
                </a>
             
          </div>
          <br />
        </Container>
      </Container>

      <br />
      <br />
      <Grid container sx={{ pb: "50px" }}>
        <Grid item lg={8} md={8} sm={12}>
          <Container maxWidth="xl">
            <Typography
              variant={isMatchmd ? "h6" : "h5"}
              sx={{ color: "#000" }}
            >
              
                <span className="underline1">All sh</span>ows
              
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
                <b>American Fort, UT</b>
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
                                fontFamily='Poppins'
                              >
                                {ticket.date}
                              </Typography>
                            </Stack>
                          </Stack>
                          <Button
                            variant="contained"
                            sx={{
                              background: "#02004D",
                              px: isMatchsm ? null : 3,
                              fontFamily: 'Poppins'
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
              
                <span className="underline">Top A</span>rtists
              
            </Typography>
            <br />
            <Stack direction="column" spacing={2}>
              {artists.map((artist) => {
                return (
                  <>
                    <Card sx={{ display: 'flex' ,boxShadow:"none",border:"none"}}>
                        <Stack direction="row" spacing={2}>
                    <CardMedia
        component="img"
        sx={{ width: 70,height:80 }}
        image={artist.pic}
        alt="Live from space album cover"
      />
      <Stack spacing={0}>
        <Typography variant="h6"><b>{artist.name}</b></Typography>
        <Typography variant="h6">{artist.event}</Typography>
      </Stack>
      </Stack>
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

export default ComedyHome;
