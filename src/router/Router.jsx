import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import ChefSection from "../pages/home/ChefSection";
import DetailsLayout from "../layouts/DetailsLayout";
import ChefBanner from "../pages/details/ChefBanner";
import RecipesCard from "../pages/details/RecipesCard";
import PrivateRute from "./PrivateRute";
import Error from "../pages/Error/Error";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
    path: "/",
    element: <DetailsLayout></DetailsLayout>,
    errorElement: <Error></Error>,
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
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
export default router;
