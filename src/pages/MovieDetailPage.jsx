import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export function MovieDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id, setData]);

  console.log(data);

  return (
    <div>
      <h2>Movie {id}</h2>
      <p>Description for Movie {id}</p>
      <Link to="/">Back to Movie List</Link>
    </div>
  );
}
