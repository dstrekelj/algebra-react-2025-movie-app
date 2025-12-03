import { useEffect, useState } from "react";
import { Link } from "react-router";

export function MovieListPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/schedule?country=US")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setData([]));
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  const shows = data.map((episode) => ({
    name: episode.show.name,
    id: episode.show.id,
  }));

  return (
    <div>
      <h1>Movie App</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link to={`/movies/${show.id}`}>{show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
