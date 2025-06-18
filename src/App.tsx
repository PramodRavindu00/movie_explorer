import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import { Bounce, ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
// import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500 font-semibold text-2xl">
        Authenticating...
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default App;
