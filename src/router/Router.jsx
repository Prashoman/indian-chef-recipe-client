import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import ChefSection from "../pages/home/ChefSection";
import DetailsLayout from "../layouts/DetailsLayout";
import ChefBanner from "../pages/details/ChefBanner";
import RecipesCard from "../pages/details/RecipesCard";
import PrivateRute from "./PrivateRute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <ChefSection></ChefSection>,
        loader: () =>
          fetch("https://indian-chef-recipe-server.vercel.app/chef"),
      },
    ],
  },
  {
    path: "",
    element: <DetailsLayout></DetailsLayout>,
    children: [
      {
        path: "chef/:id",
        element: (
          <PrivateRute>
            <ChefBanner></ChefBanner>
          </PrivateRute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://indian-chef-recipe-server.vercel.app/chef/${params.id}`
          ),
      },
      ,
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
