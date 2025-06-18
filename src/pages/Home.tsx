import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <Link
        to="/search"
        className="bg-blue-400 px-6 py-3 rounded-full sm:text-xl text-white font-semibold hover:bg-blue-600 hover:scale-105 transition-transform duration-800 ease-in-out"
      >
        Explore Movies
      </Link>
    </div>
  );
};

export default Home;
