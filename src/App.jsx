import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/error/NotFound";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import HomeView from "./pages/home/homeview";
import Products from "./pages/Products/products";
import Details from "./pages/Products/details";
import Login from "./pages/auth/login";
import Car from "./pages/Car/car";
import Profile from "./pages/auth/profile";
import Perfil from "./pages/auth/Perfil/perfil";
import { AuthLayout, LoginLayout } from "./components/AuthLayout.jsx";
import Historia from "./pages/auth/Perfil/historia";
import Bills from "./pages/Products/bills";
import Search, { RedirectSearch } from "./pages/Products/search";
import ProductsCategory from "./pages/Products/productsCategory";
import SearchProducts from "./components/products/searchProducts";
import Test from "./pages/test";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  //const [count, setCount] = useState(0)
  /**
  const themeColor = localStorage.getItem("themeColor");

  if (themeColor == null) localStorage.setItem("themeColor", "dark");

  const [theme, settheme] = useState(themeColor);

  const toggleTheme = () => {
    settheme((curr) =>
      curr === "light"
        ? localStorage.setItem("themeColor", "dark")
        : localStorage.setItem("themeColor", "light")
    );
  };
   */
  const [theme, settheme] = useState("dark");

  const toggleTheme = () => {
    settheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  //const changeTheme = 1;

  const darkTheme = createTheme({
    palette: {
      mode: theme == "dark" ? "dark" : "light",
      primary: {
        main: theme == "dark" ? "#F2059F " : "#F2059F",
      },
      secondary: {
        main: "#FFD700",
      },
      info: {
        main: "#048ABF",
      },
      background: {
        default: theme == "dark" ? "#141425" : "#ffffff",
        paper: theme == "dark" ? "#18062C" : "#ECDBF7",
      },
    },
  });

  /*const darkTheme = createTheme({
    palette: {
      mode: changeTheme == 1 ? "dark" : "light",
      primary: {
        main: changeTheme == 1 ? "#F2059F " : "#F2059F",
      },
      secondary: {
        main: "#FFD700",
      },
      info: {
        main: "#048ABF",
      },
      background: {
        default: changeTheme == 1 ? "#141425" : "#ffffff",
        paper: changeTheme == 1 ? "#18062C" : "#ECDBF7",
      },
    },
  });*/

  /**
  palette: {
      mode: changeTheme == 1 ? "dark" : "light",
      primary: {
        main: changeTheme == 1 ? "#c954a2 " : "#c954a2",
      },
      secondary: {
        main: "#FFD700",
      },
      info: {
        main: "#E53935",
      },
      background: {
        default: changeTheme == 1 ? "#141425" : "#F0F0F0",
        paper: changeTheme == 1 ? "#18062C" : "#9A17EA",
      },
    },
   */

  /*palette: {
      mode: changeTheme == 1 ? "dark" : "light",
      primary: {
        main: changeTheme == 1 ? "#6A0DAD" : "#81CC96",
      },
      secondary: {
        main: "#FFD700",
      },
      info: {
        main: "#E53935",
      },
      background: {
        default: changeTheme == 1 ? "#1d212c" : "#F0F0F0",
        paper: changeTheme == 1 ? "#212B36" : "#333333",
      },
    },*/

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <HomeView />,
        },
        {
          path: "search",
          element: <Search />,
          children: [
            {
              index: true,
              element: <RedirectSearch />,
            },
            {
              path: ":category",
              element: <ProductsCategory />,
            },
            {
              path: ":category/:name",
              element: <SearchProducts />,
            },
          ],
        },
        {
          path: "searchP/details/:id",
          element: <Details />,
        },
        {
          path: "products",
          children: [
            {
              index: true,
              element: <Products />,
            },
            {
              path: "details/:id",
              element: <Details />,
            },
          ],
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: "carrito",
              element: <Car />,
            },
            {
              path: "profile",
              element: <Profile />,
              children: [
                {
                  index: true,
                  element: <Perfil />,
                },
                {
                  path: "historia",
                  element: <Historia />,
                },
              ],
            },
            {
              path: "bills/:id",
              element: <Bills />,
            },
          ],
        },
      ],
    },
    {
      element: <LoginLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "test",
      element: <Test />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
