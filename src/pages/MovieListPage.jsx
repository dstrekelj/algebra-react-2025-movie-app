import { useEffect, useState } from "react";

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
        <li>Movie 1</li>
        <li>Movie 2</li>
        <li>Movie 3</li>
      </ul>
    </div>
  );
}
