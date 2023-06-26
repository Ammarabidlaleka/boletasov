import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import Logo from "./images/LogoWhite.png";
import Fb from "./Icons/fb.png";
import Tweeter from "./Icons/tweeter.png";
import Insta from "./Icons/insta.png";

const Footer = () => {
  //CSS AND LISTS
  const theme = useTheme();
  const isMatchsm = useMediaQuery(theme.breakpoints.down("md"));
  const pages = ["About", "News", "BOLETASO Blog", "Sell on BOLETASO"];
  const extra = [
    "Privacy Preferences",
    "Term of Service",
    "Privacy Policy",
    "Site map",
    "$Usd",
  ];
  const socialMedia = [{
    icon:Fb,
    link:"#"
  },{
    icon:Tweeter,
    link:"#"
  },{
    icon:Insta,
    link:"#"
  }];
  return (
    <>
      <Container maxWidth="xxl" sx={{ background: "black", color: "white" }}>
        <Container maxWidth="xl" sx={{ pt: "80px", pb: "20px" }}>
          <div className="margin">
            <Grid container spacing={2}>
              <Grid item xs={12} lg={5} sx={{ mb: isMatchsm ? "40px" : null }}>
                <Stack spacing={2}>
                  <img
                    src={Logo}
                    style={{
                      width: "180px",
                      margin: isMatchsm ? "auto" : null,
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    textAlign={isMatchsm ? "justify" : null}
                  >
                    Lorem ipsum dolor sit amet consectetur. Faucibus cursus
                    mauris volutpat blandit integer turpis quis. Consequat
                    laoreet aliquet lectus dictum purus quis est. Nullam metus
                    quam potenti quis.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item lg={1}></Grid>
              <Grid
                item
                xs={12}
                lg={2}
                sx={{
                  textAlign: isMatchsm ? "center" : null,
                  mb: isMatchsm ? "40px" : null,
                }}
              >
                <Typography variant="h5">
                  <b>
                    <span className="underline">Resou</span>rces
                  </b>
                </Typography>
                <br />
                {pages.map((page) => {
                  return (
                    <>
                      <Button variant="text" sx={{ color: "#fff" }}>
                        {page}
                      </Button>
                      <br></br>
                    </>
                  );
                })}
              </Grid>
              <Grid
                item
                xs={12}
                lg={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Stack spacing={2}>
                  <Typography variant="h6" textAlign="center">
                    <b>Follow Us</b>
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {socialMedia.map((sm) => {
                      return (
                        <>
                          <a href={sm.link}><img src={sm.icon} /></a>
                        </>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <br></br>
            <br></br>
            <hr size="1"></hr>
            <br />
            <Container maxWidth="xl">
              <Grid container>
                <Grid item lg={6}>
                  <Typography variant={isMatchsm ? "body2" : "body1"}>
                    © 2023 BOLETASO. All rights reserved.
                  </Typography>
                </Grid>
                {isMatchsm ? null : (
                  <Grid
                    item
                    lg={6}
                    sx={{ display: "flex", justifyContent: "end" }}
                  >
                    <Stack direction="row" spacing={1}>
                      {extra.map((page) => {
                        return (
                          <>
                            <Button
                              variant="text"
                              sx={{
                                color: "#fff",
                                textTransform: "capitalize",
                              }}
                            >
                              {page}
                            </Button>
                            <br></br>
                          </>
                        );
                      })}
                    </Stack>
                  </Grid>
                )}
              </Grid>
            </Container>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
