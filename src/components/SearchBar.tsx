import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaSearch, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const API_KEY = import.meta.env.VITE_API_KEY;

interface FormData {
  searchTerm: string;
}

interface PropTypes {
  setMovies: (movies: []) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  setSearchTerm: (searchTerm: string) => void;
  setHasSearchedExternal: (hasSearched: boolean) => void;
  page: number;
}

const SearchBar = ({
  setMovies,
  setSubmitting,
  setSearchTerm,
  setHasSearchedExternal,
  page,
}: PropTypes) => {
  const [hasSearched, setHasSearched] = useState(false);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { searchTerm } = data;
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=${API_KEY}`
      );
      const data = await res.json();
      const movies = data.Search;
      setMovies(movies);
      setSearchTerm(searchTerm);
      setHasSearched(true);
      setHasSearchedExternal(true);
    } catch (error) {
      toast.error("An Error Occurred.Try Again Later");
      console.error(error);
    }
  };

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
    setMovies([]);
    reset();
    setHasSearched(false);
    setHasSearchedExternal(false);
  };

  useEffect(() => {
    setSubmitting(isSubmitting);
  }, [setSubmitting, isSubmitting]);

  return (
    <div className="w-full flex items-center justify-center py-5">
      <form className="w-full md:w-1/3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row flex-grow gap-x-5 items-center relative">
          <input
            {...register("searchTerm", {
              required: "Enter a Movie Name to Search",
            })}
            type="text"
            className={`search-input ${
              errors?.searchTerm?.message ? "input-error" : "input-focus"
            }`}
            placeholder="Search Movies..."
          />
          <button
            type="submit"
            className="absolute right-5 text-gray-300 hover:text-gray-700 cursor-pointer"
          >
            <FaSearch size={15} />
          </button>

          {hasSearched && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute left-5 text-red-400 hover:text-red-600 cursor-pointer"
            >
              <FaTimes size={15} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
