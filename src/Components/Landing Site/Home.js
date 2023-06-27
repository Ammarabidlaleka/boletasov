import React, { useRef, useState } from "react";
import {
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  TextField
} from "@mui/material";
import "./Home.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import HomePic from "../images/Home.png";
import Image from "../images/IMAGE.png";
import Image2 from "../images/IMAGE2.png";
import Image3 from "../images/IMAGE3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";
import concert1 from "../images/Concerts1.png";
import concert2 from "../images/Concerts2.png";
import concert3 from "../images/Concerts3.png";
import comedy1 from "../images/Comedy1.png";
import comedy2 from "../images/Comedy2.png";
import comedy3 from "../images/Comedy3.png";
import Left from "../Icons/left.png";
import Right from "../Icons/right.png";
const Home = () => {
  //Functions

  //trending events
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  //catogories
  const sliderRef1 = useRef(null);

  const next1 = () => {
    sliderRef1.current.slickNext();
  };

  const previous1 = () => {
    sliderRef1.current.slickPrev();
  };

  //Popular MLB Teams
  const sliderRef2 = useRef(null);

  const next2 = () => {
    sliderRef2.current.slickNext();
  };

  const previous2 = () => {
    sliderRef2.current.slickPrev();
  };

  //Concerts
  const sliderRef3 = useRef(null);

  const next3 = () => {
    sliderRef3.current.slickNext();
  };

  const previous3 = () => {
    sliderRef3.current.slickPrev();
  };
  //Comedy
  const sliderRef4 = useRef(null);

  const next4 = () => {
    sliderRef4.current.slickNext();
  };

  const previous4 = () => {
    sliderRef4.current.slickPrev();
  };
  //Caraousal settings for trending events, concerts, comedy, popular mlb teams
  const [currentSlide, setCurrentSlide] = useState(0);

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
  //Caraousal settings for Catogory
  var settings1 = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
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

  //Lists
  const trendingEvents = [
    {
      pic: Image,
      name: "Plaza Las Américas",
      date: "Sat, Apr 22, 7:30pm",
      location: "San Juan, Puerto Rico",
      price: "15$",
    },
    {
      pic: Image2,
      name: "Jardin Botånico y Cultural de Caguas",
      date: "Sat, Apr 22, 7:30pm",
      location: "San Juan, Puerto Rico",
      price: "15$",
    },
    {
      pic: Image3,
      name: "Vivo Beach Club",
      date: "Sat, Apr 22, 7:30pm",
      location: "San Juan, Puerto Rico",
      price: "15$",
    },
    {
      pic: Image,
      name: "Plaza Las Américas",
      date: "Sat, Apr 22, 7:30pm",
      location: "San Juan, Puerto Rico",
      price: "15$",
    },
    {
      pic: Image2,
      name: "Vivo Beach Club",
      date: "Sat, Apr 22, 7:30pm",
      location: "San Juan, Puerto Rico",
      price: "15$",
    },
    {
      pic: Image3,
      name: "Plaza Las Américas",
      date: "Sat, Apr 22, 7:30pm",
      location: "San Juan, Puerto Rico",
      price: "15$",
    },
    {
      pic: Image2,
      name: "Plaza Las Américas",
      date: "Sat, Apr 22, 7:30pm",
      location: "San Juan, Puerto Rico",
      price: "15$",
    },
    {
      pic: Image3,
      name: "Plaza Las Américas",
      date: "Sat, Apr 22, 7:30pm",
      location: "San Juan, Puerto Rico",
      price: "15$",
    },
  ];
  const catogory = [
    "Concerts",
    "Baseball",
    "Basketball",
    "Soccer",
    "Concerts",
    "Baseball",
    "Basketball",
    "Soccer",
  ];
  const popularMlbTeams = [
    {
      pic: team1,
      name: "Los Angeles Dodgers",
    },
    {
      pic: team2,
      name: "New York Yankees",
    },
    {
      pic: team3,
      name: "Atlanta Braves",
    },
    {
      pic: team2,
      name: "Atlanta Braves",
    },
    {
      pic: team1,
      name: "Atlanta Braves",
    },
    {
      pic: team3,
      name: "Atlanta Braves",
    },
    {
      pic: team2,
      name: "Atlanta Braves",
    },
    {
      pic: team3,
      name: "Atlanta Braves",
    },
  ];
  const concert = [
    {
      pic: concert1,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: concert2,
      name: "SZA",
      date: "Oct 19 • Vivint Arena",
      price: "From $152",
    },
    {
      pic: concert3,
      name: "Duran Duran with Bastille and Nile Rodgers",
      date: "Jun 3 • Vivint Arena",
      price: "From $84",
    },
    {
      pic: concert2,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: concert3,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: concert1,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: concert2,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: concert3,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
  ];
  const comedy = [
    {
      pic: comedy1,
      name: "Impractical Jokers",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: comedy2,
      name: "Franco Escamilla",
      date: "Oct 19 • Vivint Arena",
      price: "From $152",
    },
    {
      pic: comedy3,
      name: "Bert Kreischer's Fully Loaded Comedy Festival",
      date: "Jun 3 • Vivint Arena",
      price: "From $84",
    },
    {
      pic: comedy2,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: comedy3,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: comedy1,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: comedy2,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: comedy3,
      name: "Muse with Evanescence",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
  ];
  //CSS
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Navbar />
      <Container
        maxWidth="xxl"
        sx={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0) 70%), url(${HomePic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            pt: isMatchsm ? "120px" : "240px",
            pb: isMatchsm ? "80px" : "160px",
            color: "#fff",
          }}
        >
          <Typography variant={isMatchsm ? "h6" : "h3"}>
            <b>Let there be live</b>
          </Typography>
          <br />
          <Typography
            faontFamily="Montserrat"
            variant={isMatchsm ? "body1" : "h5"}
            color="white"
          >
            
              Your next best-night-ever is waiting.
              <br />
              And we have the tickets.
            
          </Typography>
          <br />
          <Button
            variant="contained"
            sizd="large"
            sx={{
              backgroundColor: "#3E39D1",
              py: isMatchsm ? null : "10px",
              px: isMatchsm ? null : "80px",
              textTransform: "capitalize",
            }}
          >
            Get Started
          </Button>
        </Container>
      </Container>

      <Container maxWidth="xxl" sx={{ background: "#000", py: "30px" }}>
        <Container maxWidth="xl">
          <br />
          <Typography
            variant={isMatchsm ? "body1" : "h6"}
            sx={{ color: "#ffffff" }}
          >
            <b>
              <span className="underline">Tren</span>ding Events
            </b>
          </Typography>
          <br />
          <div>
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-lg-12 ">
                  <Slider ref={sliderRef} {...settings}>
                    {trendingEvents.map((card) => {
                      return (
                        <>
                          <Card sx={{ borderRadius: "10px", mr: isMatchlg?"20px":"40px",mr:isMatchsm?"0px":"20px" }}>
                            <CardMedia
                              sx={{ height: "162px" }}
                              image={card.pic}
                              title="green iguana"
                            />
                            <CardContent sx={{ background: "#201D6B" }}>
                              <Typography
                                gutterBottom
                                color="white"
                                variant={isMatchsm ? "body1" : "h6"}
                                component="div"
                              >
                                <span className="caraousalHeadings">
                                  {card.name}
                                </span>
                              </Typography>
                              <Typography variant="body2"color="#ffffff">
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
                    className="arrows"
                    style={{ textTransform: "none", cursor: "pointer" }}
                  >
                    <img src={Left} />
                  </a>
                  <a
                    onClick={next}
                    className="arrows"
                    style={{ textTransform: "none", cursor: "pointer" }}
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

      <Container maxWidth="xxl">
        <Container maxWidth="xl">
          <Stack direction="column" spacing={1}>
            <Typography
              variant={isMatchsm ? "body1" : "h6"}
              sx={{ color: "#464646" }}
            >
              <b>
                <span className="underline">Browse</span> Events
              </b>
            </Typography>
            <Typography variant={isMatchsm ? "h6" : "h4"}>
              America Fort, UT
            </Typography>
            <Stack direction="row" spacing={2}>
             <TextField size="small" sx={{width:"179px",border:"0.982199px solid #464646",borderRadius:"5px"}} label="Change Location" select/>
             <TextField size="small" sx={{width:"179px",border:"0.982199px solid #464646",borderRadius:"5px"}} label="Filter By Date" select/>
            </Stack>
          </Stack>
          <br />
          <hr></hr>
          <br />
        </Container>
      </Container>

      <Container maxWidth="xxl" sx={{ py: "20px" }}>
        <Container maxWidth="xl">
          <Typography
            variant={isMatchsm ? "body1" : "h6"}
            sx={{ color: "#464646" }}
          >
            
              <span className="underline">Cato</span>gories
            
          </Typography>
          <br />
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-lg-12">
                <Slider ref={sliderRef1} {...settings1}>
                  {catogory.map((card) => {
                    return (
                      <>
                        <Card
                          sx={{
                            mr: isMatchlg?"20px":"40px",
                            mr:isMatchsm?"0px":"20px",
                            height: "195px",
                            display: "flex",
                            alignItems: "end",
                            borderRadius: "10px",
                            color: "#fff",
                            background: "#000",
                          }}
                        >
                          <CardContent>
                            <span className="caraousalHeadings">
                              {" "}
                              <b>{card}</b>
                            </span>
                          </CardContent>
                        </Card>
                      </>
                    );
                  })}
                </Slider>
                </div>
            </div>
                <a
                  onClick={previous1}
                  style={{ textTransform: "none", cursor: "pointer" }}
                  className="arrows"
                >
                  <img src={Left} />
                </a>
                <a
                  onClick={next1}
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

      <Container maxWidth="xxl" sx={{ py: "20px" }}>
        <Container maxWidth="xl">
          <Typography
            variant={isMatchsm ? "body1" : "h6"}
            sx={{ color: "#464646" }}
          >
            
              <span className="underline">Popular</span> MLB Teams
            
          </Typography>
          <br />
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-lg-12">
                <Slider ref={sliderRef2} {...settings}>
                  {popularMlbTeams.map((card) => {
                    return (
                      <>
                        <Card
                          sx={{
                            mr: isMatchlg?"20px":"40px"
                            ,mr:isMatchsm?"0px":"20px" ,
                            display: "flex",
                            alignItems: "end",
                            pt: "170px",
                            borderRadius: "10px",
                            color: "#fff",
                            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.4) 50%), url(${card.pic})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                          }}
                        >
                          <CardContent>
                            <span className="caraousalHeadings">
                              {" "}
                              <b>{card.name}</b>
                            </span>
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

      <Container maxWidth="xxl" sx={{ py: "20px" }}>
        <Container maxWidth="xl">
          <Typography
            variant={isMatchsm ? "body1" : "h6"}
            sx={{ color: "#464646" }}
          >
            
              <span className="underline">Concer</span>ts
            
          </Typography>
          <br />
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-lg-12">
                <Slider ref={sliderRef3} {...settings}>
                  {concert.map((card) => {
                    return (
                      <>
                        <Card sx={{ borderRadius: "10px", mr: isMatchlg?"20px":"40px", mr:isMatchsm?"0px":"20px" }}>
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
                                  {card.name}
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
                  onClick={previous3}
                  style={{ textTransform: "none", cursor: "pointer" }}
                  className="arrows"
                >
                  <img src={Left} />
                </a>
                <a
                  onClick={next3}
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

      <Container maxWidth="xxl" sx={{ py: "20px" }}>
        <Container maxWidth="xl">
          <Typography
            variant={isMatchsm ? "body1" : "h6"}
            sx={{ color: "#464646" }}
          >
            
              <span className="underline">Comed</span>y
            
          </Typography>
          <br />
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-lg-12">
                <Slider ref={sliderRef4} {...settings}>
                  {comedy.map((card) => {
                    return (
                      <>
                        <Card sx={{ borderRadius: "10px",  mr: isMatchlg?"20px":"40px",mr:isMatchsm?"0px":"20px"  }}>
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
                                  {card.name}
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
                  onClick={previous4}
                  style={{ textTransform: "none", cursor: "pointer" }}
                  className="arrows"
                >
                  <img src={Left} />
                </a>
                <a
                  onClick={next4}
                  style={{ textTransform: "none", cursor: "pointer" }}
                  className="arrows"
                >
                  <img src={Right} />
                </a>
              
          </div>
          <br />
          <br />
          <br />
        </Container>
      </Container>

      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
