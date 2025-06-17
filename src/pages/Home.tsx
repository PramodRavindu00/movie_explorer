import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Link to={"/search"} className="bg-blue-800 text-white px-3 py-2 rounded">
        Go To Movies
      </Link>
    </div>
  );
};

export default Home;
