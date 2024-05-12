import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Header from "./routes/layouts/Header"
import Footer from "./routes/layouts/Footer"
import ErrorPage from "./error-page";
import { Anchor, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { ModalsProvider } from '@mantine/modals';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/tiptap/styles.css';
import Root from './routes/Root';
import { CookieConsent } from "react-cookie-consent";
import Cookie from './routes/Cookie';
import AboutMe from './routes/AboutMe';
import Community from "./routes/Community";
import Login from "./routes/Login";
import Admin from './routes/Admin';
import AdminLayout from "./routes/layouts/Admin"
import Obrazky from "./routes/Obrazky";
import Nasledky from './routes/Nasledky';
import NahratNovinku from './routes/NahratNovinku';
import ReactGA from 'react-ga4';
import Cookies from "js-cookie";
import { notifications } from '@mantine/notifications';

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (Cookies.get("PotvrdilCookie") == "true") {
      ReactGA.initialize("G-S7FFJ74S1J")
      ReactGA.send(window.location.pathname + window.location.search);

    }
  }, [Cookies.get("PotvrdilCookie")])

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
    notifications.show({
      title: `Odmietol si Cookies :(`,
      message: 'Ach jo.. Odmietol si Cookies, prosím zváž či by si ich nepovolil. Predsa, len ti prestane fungovať prihlásenie a nám pomáhaš robiť Analytiky, toho čo sa na našej stránke deje. Keby si zmenil názor, tak mrkni na Ochranu Osobných Údajov',
  });
  };

  const handleAcceptCookie = () => {
    notifications.show({
      title: `Prijal si Cookies ! YEY!`,
      message: 'YEY! Prijal si cookies, takže odteraz ti bude fungovať prihlásenie a Google Analytics. Ďakujeme <3',
  });
  };

  return (
    <>
      <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText="Súhlasím"
        cookieName="PotvrdilCookie"
        declineButtonText="Nesúhlasím"
        style={{ background: "#2a2b30" }}
        flipButtons={true}
        expires={30}
        hideOnAccept={true}
        onDecline={handleDeclineCookie}
        onAccept={handleAcceptCookie}
      >
        Pre správne používanie tejto stránky, používame súbory Cookies. Pre viac informácii navštívte <Anchor component={Link} to="/cookies" aria-label="Navigovanie do Cookies Policy">Cookies Policy</Anchor>{" "}
      </CookieConsent>
      <Header />
      <div style={{ minHeight: "71vh" }}>
        {children}
      </div>
      <Footer />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout children={<Root />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cookies",
    element: <SimpleLayout children={<Cookie />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/o-nas",
    element: <SimpleLayout children={<AboutMe />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/komunita",
    element: <SimpleLayout children={<Community />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <SimpleLayout children={<Login />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout children={<Admin />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/obrazky",
    element: <AdminLayout children={<Obrazky />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/novinky",
    element: <AdminLayout children={<NahratNovinku />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nehoda",
    element: <SimpleLayout children={<Nasledky />} />,
    errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={{ primaryColor: "blue" }} defaultColorScheme="dark">
    <ModalsProvider>
      <Notifications />
      <RouterProvider router={router} />
    </ModalsProvider>
  </MantineProvider>
)

