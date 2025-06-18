import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useScrollDirection } from "../hooks/scrollDetectHook";

const Navbar = () => {
  const showNav = useScrollDirection();
  const { logout, loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className={`sticky top-0 left-0 w-full h-20 flex z-20 pt-5 px-5 sm:p-5 sm:shadow-md text-gray-700 bg-white transform transition-transform duration-300 ease-in-out
      ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <button
        className="cursor-pointer sm:hidden"
        onClick={() => {
          setMenuOpen(true);
        }}
      >
        <FaBars size={25} />
      </button>
      <div
        className={`bg-white  absolute top-0 left-0 w-full sm:static sm:flex transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-1000 ease-in-out sm:translate-x-0 sm:left-auto`}
      >
        <div
          className={`flex flex-col sm:flex-row gap-5  w-full h-screen sm:h-auto items-center justify-start sm:justify-between p-5 sm:p-0`}
        >
          <button
            className="absolute right-5 top-5 sm:hidden"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <FaTimes size={20} className="cursor-pointer" />
          </button>
          <h1 className="sm:flex-1 text-2xl font-semibold hidden sm:block">
            Movie Explorer
          </h1>
          {isAuthenticated ? (
            <>
              <div className="flex sm:flex-1 flex-col items-start justify-center font-semibold">
                <p>Welcome Back!</p>
                <p className="text-sm"> {user?.name}</p>
              </div>

              <button
                className="absolute sm:static bottom-5  border-2 border-slate-400 px-4 py-1 rounded-2xl bg-white  cursor-pointer text-sm hover:bg-slate-400 hover:text-white hover:scale-125 transition-transform duration-800 ease-in-out"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/search"
              className="border-2 border-slate-400 px-4 py-1 rounded-2xl bg-white  cursor-pointer text-sm hover:bg-slate-400 hover:text-white hover:scale-125 transition-transform duration-800 ease-in-out"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
