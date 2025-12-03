import { useEffect, useState } from "react";
import { Link } from "react-router";

export function SeriesListPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/schedule?country=US")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setError("Failed to fetch series data"));
  }, []);

  if (data === null && error === null) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>{error}</div>;
  }

  const shows = data.map((episode) => ({
    name: episode.show.name,
    id: episode.show.id,
  }));

  return (
    <div>
      <h1>Series App</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link to={`/series/${show.id}`}>{show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
