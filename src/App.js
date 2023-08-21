import AllDepartmentPage from './Components/AllDepartmentpage/AllDepartmentPage';
import { Eventpage } from './Components/EventPage/Eventpage';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
