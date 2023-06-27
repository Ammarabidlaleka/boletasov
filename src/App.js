import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import StartSelling from "./Components/Selling/StartSelling";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Landing Site/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import MyTicket from "./Components/Selling/MyTicket/MyTicket";
import Event_Date from "./Components/Selling/SellTicket/Event_Date";
import LoginToVividSeatsAccount from "./Components/Selling/SellTicket/LoginToVividSeatsAccount";
import EnterDetails from "./Components/Selling/SellTicket/EnterDetails";
import SetUpPaymentMethod from "./Components/Selling/SellTicket/SetUpPaymentMethod";
import Account from "./Components/Selling/Account";
import HomeSport from "./Components/Sports/Home";
import BaseballHome from "./Components/Sports/Baseball/BaseballHome";
import BillingInfo from "./Components/Sports/Baseball/BillingInfo";
import HomeMore from "./Components/More/Home";
import ComedyHome from "./Components/More/Comedy/ComedyHome";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat', // Default font family for regular text
      h1: {
        fontFamily: 'Poppins', // Font family for h1 headers
      },
      h2: {
        fontFamily: 'Poppins', // Font family for h2 headers
      },
      h3: {
        fontFamily: 'Poppins', // Font family for h3 headers
      },
      h4: {
        fontFamily: 'Poppins', // Font family for h4 headers
      },
      h5: {
        fontFamily: 'Poppins', // Font family for h5 headers
      },
      h6: {
        fontFamily: 'Poppins', // Font family for h6 headers
      },
    },
    Button: {
      textTransform:"capitalize",
      fontFamily: 'Montserrat'
    }
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startselling" element={<StartSelling />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myticket" element={<MyTicket />} />
          <Route path="/sellTicketEvent_Date" element={<Event_Date />} />
          <Route
            path="/LoginToVividSeatsAccount"
            element={<LoginToVividSeatsAccount />}
          />
          <Route path="/EnterDetails" element={<EnterDetails />} />
          <Route path="/SetUpPaymentMethod" element={<SetUpPaymentMethod />} />
          <Route path="/account" element={<Account />} />
          <Route path="/homesport" element={<HomeSport />} />
          <Route path="/baseballhome" element={<BaseballHome />} />
          <Route path="/billinginfo" element={<BillingInfo />} />
          <Route path="/homemore" element={<HomeMore />} />
          <Route path="/comedyhome" element={<ComedyHome />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
