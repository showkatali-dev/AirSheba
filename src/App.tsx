import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  const [loading, setLoading] = useState(true);
  const [pageOpen, setPageOpen] = useState(false);

  // for false loading
  useEffect(() => {
    const loadingDisable = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const openPage = setTimeout(() => {
      setPageOpen(true);
    }, 2010);

    return () => {
      clearTimeout(loadingDisable);
      clearTimeout(openPage);
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <div
        className={`fixed top-0 bottom-0 left-0 z-30 bg-base-100 origin-left delay-100 duration-1000 transition-all ${
          pageOpen ? "w-0" : "w-1/2"
        }`}
      />
      <div
        className={`fixed top-0 bottom-0 right-0 z-30 bg-base-100 origin-right delay-100 duration-1000 transition-all ${
          pageOpen ? "w-0" : "w-1/2"
        }`}
      />
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </>
  );
}

export default App;
