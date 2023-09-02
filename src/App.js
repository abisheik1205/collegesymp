import AllDepartmentPage from './Components/AllDepartmentpage/AllDepartmentPage';
import { Eventpage } from './Components/EventPage/Eventpage';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/login/Login";
import Signup from './Components/Login/signup/Signup';
import Register from './Components/Register/Register';
import storage from "./storage.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/allevents",
    element: <AllDepartmentPage />,
  },
  {
    path: "/eventpage",
    element: <Eventpage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/jsonData",
    element: <p>{storage}</p>,
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
