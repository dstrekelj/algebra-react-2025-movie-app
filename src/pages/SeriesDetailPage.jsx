import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export function SeriesDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setError("Failed to fetch series data"));
  }, [id, setData]);

  if (data === null && error === null) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>{error}</div>;
  }

  const { name, image, summary, type } = data;

  return (
    <div>
      <h2>{name}</h2>
      {image && <img src={image.original} alt={name} width={240} />}
      <p>Type: {type}</p>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <Link to="/">Back to Series List</Link>
    </div>
  );
}
