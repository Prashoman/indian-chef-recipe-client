import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import ChefSection from "../pages/home/ChefSection";
import DetailsLayout from "../layouts/DetailsLayout";
import ChefBanner from "../pages/details/ChefBanner";
import RecipesCard from "../pages/details/RecipesCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <ChefSection></ChefSection>,
        loader: () => fetch("http://localhost:5000/chef"),
      },
    ],
  },
  {
    path: "",
    element: <DetailsLayout></DetailsLayout>,
    children: [
      {
        path: "chef/:id",
        element: <ChefBanner></ChefBanner>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
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
