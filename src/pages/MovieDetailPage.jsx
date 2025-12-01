import { useParams } from "react-router";

export function MovieDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>Movie {id}</h2>
      <p>Description for Movie {id}</p>
    </div>
  );
}
