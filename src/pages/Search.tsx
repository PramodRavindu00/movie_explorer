import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import { toast } from "react-toastify";
const API_KEY = import.meta.env.VITE_API_KEY;

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

const Search = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);

      if (data.Response === "True" && data.Search.length > 0) {
        setMovies((prev) => {
          const updated = [...prev, ...data.Search];
          if (updated.length >= 100 || data.Search.length < 10) {
            setHasMore(false);
          }
          return updated;
        });
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
        console.warn("API Error", data.Error);
      }
    } catch (error) {
      toast.error("An Error Occurred. Try Again Later");
      console.error("Fetch Error", error);
      setHasMore(false);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <SearchBar
        setMovies={setMovies}
        setSubmitting={setSubmitting}
        setSearchTerm={setSearchTerm}
        setHasSearchedExternal={setHasSearched}
        page={page}
      />
      {submitting ? (
        <p className="text-center text-gray-500 font-semibold">
          Searching Movies
        </p>
      ) : movies && movies.length > 0 ? (
        <InfiniteScroll
          className="px-5"
          dataLength={movies.length}
          next={fetchMovies}
          hasMore={hasMore}
          loader={
            <h4 className="text-center text-gray-500 font-semibold">
              Loading...
            </h4>
          }
          endMessage={
            <p className="text-center text-gray-500 font-semibold">
              End of Results
            </p>
          }
        >
          <MovieGrid movies={movies} />
        </InfiniteScroll>
      ) : hasSearched ? (
        <p className="text-center text-gray-500 font-semibold">
          No movies found
        </p>
      ) : (
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 text-center">
          Explore your favorite Movies here....
        </h1>
      )}
    </div>
  );
};

export default Search;
