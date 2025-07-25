
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const TMDB_API_KEY = "2ca22f700bb9eff7e814bfbe16ba6831";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w500";

function TvSeries() {
  const seriesURL = `${BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular-tv"],
    queryFn: () =>
      fetch(seriesURL)
        .then((res) => res.json())
        .then((data) => data.results),
  });

  if (isLoading)
    return <p className="text-xl text-center text-gray-900">Loading...</p>;

  if (isError)
    return (
      <p className="text-red-600 text-xl text-center">
        Error: fetching series
      </p>
    );

  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-600 pt-10">Popular TV Series</h1>
      {data.length === 0 ? (
        <p className="text-black">No series found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:mx-24  ">
          {data.map((series) => (
            <Link to={`/tv/${series.id}`} key={series.id}> 
              <div className="h-full w-full p-2 rounded shadow-md hover:transform hover:scale-105 transition-transform duration-200 cursor-pointer">
                <img
                  src={`${IMAGE_BASE_URL}${POSTER_SIZE}${series.poster_path}`}
                  alt={series.name}
                  className=" rounded"
                />
                <h2 className="text-black mt-2 text-xl font-medium">
                  {series.name}
                </h2>
                <p className="text-black text-xs">First Air Date: {series.first_air_date}</p>
                <p className="text-xs text-amber-400 font-bold flex space-x-2 items-center">
                  <FaStar /> <span>{series.vote_average.toFixed(1)}</span>
                </p>
                {/* <p className="text-gray-400 text-xs">
                  Genres: {series.genre_ids.join(", ")}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default TvSeries;