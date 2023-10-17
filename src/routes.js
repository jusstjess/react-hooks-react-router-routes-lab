import Home from "./components/Home";
import Movies from "./components/Movies";
import Directors from "./components/Directors";
import Actors from "./components/Actors";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
      path: `/Home`,
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: `/Movies`,
      element: <Movies />
    },
    {
      path: `/directors`,
      element: <Directors />
    },
    {
      path:`/actors`,
      element: <Actors />
    }
  ]

export default routes;