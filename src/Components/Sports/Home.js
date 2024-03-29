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
import Navbar from "../NavbarWhite";
import HomePic from "../images/homesport.png";
import Image from "../images/wweRawSports.png";
import Image2 from "../images/mlbSports.png";
import Image3 from "../images/IMAGE3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import basketball from "../images/basketball.png";
import baseball from "../images/baseball.png";
import boxing from "../images/boxing.png";
import wwe from "../images/wwe.png";
import team1 from "../images/basketball1sports.png";
import team2 from "../images/basketball2sports.png";
import team3 from "../images/basketball3sports.png";
import baseball1 from "../images/baseball1sports.png";
import baseball2 from "../images/baseball2sports.png";
import baseball3 from "../images/baseball3sports.png";
import boxing1 from "../images/boxing1sports.png";
import boxing2 from "../images/boxing2sports.png";
import boxing3 from "../images/boxing3sports.png";
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

  //basketball
  const sliderRef2 = useRef(null);

  const next2 = () => {
    sliderRef2.current.slickNext();
  };

  const previous2 = () => {
    sliderRef2.current.slickPrev();
  };

  //baseball
  const sliderRef3 = useRef(null);

  const next3 = () => {
    sliderRef3.current.slickNext();
  };

  const previous3 = () => {
    sliderRef3.current.slickPrev();
  };
  //Boxing
  const sliderRef4 = useRef(null);

  const next4 = () => {
    sliderRef4.current.slickNext();
  };

  const previous4 = () => {
    sliderRef4.current.slickPrev();
  };
  //Caraousal settings for trending events, concerts, Boxing, popular mlb teams
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
      name: "WWE RAW",
      date: "Fri, Jul 21, 7:00pm",
      location: "Maverik Center",
      price: "98$",
    },
    {
      pic: Image2,
      name: "MLB All-Star Game",
      date: "Thu, Oct 19, 8:OOpm",
      location: "Vivint Arena",
      price: "135$",
    },
    {
      pic: Image3,
      name: "Shania Twain with HSat,ailey Whitters",
      date: "Wed, May 24, 7:30pm",
      location: "USANA Amphitheatre",
      price: "126$",
    },
    {
        pic: Image,
        name: "WWE RAW",
        date: "Fri, Jul 21, 7:00pm",
        location: "Maverik Center",
        price: "98$",
    },
    {
        pic: Image2,
        name: "MLB All-Star Game",
        date: "Thu, Oct 19, 8:OOpm",
        location: "Vivint Arena",
        price: "135$",
    },
    {
        pic: Image,
        name: "WWE RAW",
        date: "Fri, Jul 21, 7:00pm",
        location: "Maverik Center",
        price: "98$",
    },
    {
        pic: Image2,
        name: "MLB All-Star Game",
        date: "Thu, Oct 19, 8:OOpm",
        location: "Vivint Arena",
        price: "135$",
    },
    {
        pic: Image3,
        name: "Shania Twain with HSat,ailey Whitters",
        date: "Wed, May 24, 7:30pm",
        location: "USANA Amphitheatre",
        price: "126$",
    },
  ];
  const catogory = [
    {
        pic:basketball,
        name:"Basketball"
    },{
        pic:baseball,
        name:"Baseball"
    },{
        pic:boxing,
        name:"Boxing"
    },{
        pic:wwe,
        name:"WWE"
    }, {
        pic:basketball,
        name:"Basketball"
    },{
        pic:baseball,
        name:"Baseball"
    },{
        pic:boxing,
        name:"Boxing"
    },{
        pic:wwe,
        name:"WWE"
    }
  ];
  const Basketball = [
    {
      pic: team1,
      name: "Basketball",
      date:"Apr 20 • Vivint Arena",
      price:"From $61"
    },
    {
      pic: team2,
      name: "Basketball",
      date:"Oct 19 • Vivint Arena",
      price:"From $152"
    },
    {
      pic: team3,
      name: "Basketball",
      date:"Jun 3 • Vivint Arena",
      price:"From $84"
      
    },
    {
      pic: team2,
      name: "Basketball",
      date:"Oct 19 • Vivint Arena",
      price:"From $152"
    },
    {
      pic: team1,
      name: "Basketball",
      date:"Apr 20 • Vivint Arena",
      price:"From $61"
    },
    {
      pic: team3,
      name: "Basketball",
      date:"Jun 3 • Vivint Arena",
      price:"From $84"
    },
    {
      pic: team2,
      name: "Basketball",
      date:"Oct 19 • Vivint Arena",
      price:"From $152"
    },
    {
      pic: team3,
      name: "Basketball",
      date:"Jun 3 • Vivint Arena",
      price:"From $84"
    },
  ];
  const baseBall = [
    {
      pic: baseball1,
      name: "Baseball",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: baseball2,
      name: "Baseball",
      date: "Oct 19 • Vivint Arena",
      price: "From $152",
    },
    {
      pic: baseball3,
      name: "Baseball",
      date: "Jun 3 • Vivint Arena",
      price: "From $84",
    },
    {
      pic: baseball2,
      name: "Baseball",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: baseball3,
      name: "Baseball",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: baseball1,
      name: "Baseball",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: baseball2,
      name: "Baseball",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
    {
      pic: baseball3,
      name: "Baseball",
      date: "Apr 20 • Vivint Arena",
      price: "From $61",
    },
  ];
  const Boxing = [
    {
      pic: boxing1,
      name: "Boxing",
      date: "May 5 • Maverik Center",
      price: "From $72",
    },
    {
      pic: boxing2,
      name: "Boxing",
      date: "Jun 3 • Abravanel Hall",
      price: "From $121",
    },
    {
      pic: boxing3,
      name: "Boxing",
      date: "Jul 13 • Vivint Arena",
      price: "From $97",
    },
    {
        pic: boxing2,
        name: "Boxing",
        date: "Jun 3 • Abravanel Hall",
        price: "From $121",
    },
    {
        pic: boxing3,
        name: "Boxing",
        date: "Jul 13 • Vivint Arena",
        price: "From $97",
    },
    {
        pic: boxing1,
      name: "Boxing",
      date: "May 5 • Maverik Center",
      price: "From $72",
    },
    {
        pic: boxing2,
        name: "Boxing",
        date: "Jun 3 • Abravanel Hall",
        price: "From $121",
    },
    {
        pic: boxing3,
        name: "Boxing",
        date: "Jul 13 • Vivint Arena",
        price: "From $97",
    },
  ];
  //CSS
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
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
            pt: isMatchmd ? "120px" : "240px",
            pb: isMatchmd ? "80px" : "200px",
            color: "#fff",
          }}
        >
          <Typography variant={isMatchmd ? "h6" : "h3"}>
            <b>Stadium Tickets</b>
          </Typography>
          <br />
          <Typography
            faontFamily="Montserrat"
            variant={isMatchmd ? "body1" : "h5"}
            color="white"
          >
          
            Tickets of your favorite sport.<br /> All right here. Let's go.
          
          </Typography>
        </Container>
      </Container>

      <Container maxWidth="xxl" sx={{ background: "#000", py: "30px" }}>
        <Container maxWidth="xl">
          <br />
          <Typography
            variant={isMatchmd ? "body1" : "h6"}
            sx={{ color: "#fff" }}
          >
            <b>
              <span className="underline">Tren</span>ding Events
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
                          <Card sx={{ borderRadius: "10px",  mr: isMatchlg?"20px":"40px", mr:isMatchsm?"0px":"20px"}}>
                            <CardMedia
                              sx={{ height: "162px" }}
                              image={card.pic}
                              title="green iguana"
                            />
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

      <Container maxWidth="xxl">
        <Container maxWidth="xl">
          <Stack direction="column" spacing={1}>
            <Typography
              variant={isMatchmd ? "body1" : "h6"}
              sx={{ color: "#464646" }}
            >
              
                <span className="underline">Browse</span> Events
              
            </Typography>
            <Typography variant={isMatchmd ? "h6" : "h4"}>
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
            variant={isMatchmd ? "body1" : "h6"}
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
                            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 50%), url(${card.pic})`,
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
            variant={isMatchmd ? "body1" : "h6"}
            sx={{ color: "#464646" }}
          >
            
              <span className="underline">Basketb</span>all
            
          </Typography>
          <br />
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-lg-12">
                <Slider ref={sliderRef2} {...settings}>
                {Basketball.map((card) => {
                    return (
                      <>
                        <Card sx={{ borderRadius: "10px",  mr: isMatchlg?"20px":"40px", mr:isMatchsm?"0px":"20px"}}>
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
                                  <b>{card.name}</b>
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

      <Container maxWidth="xxl" sx={{ py: "20px" }}>
        <Container maxWidth="xl">
          <Typography
            variant={isMatchmd ? "body1" : "h6"}
            sx={{ color: "#464646" }}
          >
            
              <span className="underline">Base</span>ball
            
          </Typography>
          <br />
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-lg-12">
                <Slider ref={sliderRef3} {...settings}>
                  {baseBall.map((card) => {
                    return (
                      <>
                        <Card sx={{ borderRadius: "10px", mr: isMatchlg?"20px":"40px", mr:isMatchsm?"0px":"20px"}}>
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
                                  <b>{card.name}</b>
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
            variant={isMatchmd ? "body1" : "h6"}
            sx={{ color: "#464646" }}
          >
            
              <span className="underline">Bo</span>xing
            
          </Typography>
          <br />
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-lg-12">
                <Slider ref={sliderRef4} {...settings}>
                  {Boxing.map((card) => {
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
                                  <b>{card.name}</b>
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
