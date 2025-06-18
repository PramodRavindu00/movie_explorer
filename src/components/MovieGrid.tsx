interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

interface Movies {
  movies: Movie[];
}

const MovieGrid = ({ movies }: Movies) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-5 px-10">
      {movies &&
        movies.length > 0 &&
        movies.map((movie: Movie, index: number) => (
          <div
            key={index}
            className="w-full flex flex-col bg-slate-100 rounded-xl shadow-lg cursor-pointer hover:shadow-gray-500 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-auto sm:h-56 object-fit rounded-t-xl"
            />
            <div className="flex flex-col gap-1 px-2 items-center">
              <h1 className="text-sm font-semibold text-black text-center">
                {movie.Title}
              </h1>
              <h1 className="text-sm text-gray-900">{movie.Year}</h1>
              <h1 className="text-sm text-gray-700">{movie.Type}</h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieGrid;
