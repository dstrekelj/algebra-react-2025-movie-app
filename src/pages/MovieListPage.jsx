import { useEffect, useState } from "react";
import { Link } from "react-router";

export function MovieListPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/schedule?country=US")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Movie App</h1>
      <ul>
        <li>
          <Link to="/movies/1">Movie 1</Link>
        </li>
        <li>
          <Link to="/movies/2">Movie 2</Link>
        </li>
        <li>
          <Link to="/movies/3">Movie 3</Link>
        </li>
      </ul>
    </div>
  );
}
