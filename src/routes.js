import Blog from "./components/Blog";
import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Post from "./pages/PostPage";
import Profile from "./pages/Profile";

const routes = [
    {path: "/", element:<HomePage/>},
    {path: "/about-us", element:<AboutUs/>},
    {path: "/profile/*", element:<Profile/>},
    {path: "/blog", element:<BlogPage/>},
    {path: "/blogs/:id", element:<Blog/>},
    // {path: "/post/:id([0-9]+)?", element:<Post/>},
    {path: "/post", element:<Post/>},
    {path: "*", element:<NotFound/>},

]
 export default routes;