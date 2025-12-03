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

  if (data === null) {
    return <div>Loading...</div>;
  }

  const { name, image, summary, type } = data;

  return (
    <div>
      <h2>{name}</h2>
      {image && <img src={image.original} alt={name} width={240} />}
      <p>Type: {type}</p>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <Link to="/">Back to Movie List</Link>
    </div>
  );
}
