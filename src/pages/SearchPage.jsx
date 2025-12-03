import { useEffect, useState } from "react";
import { Link } from "react-router";

export function SearchPage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setError("Failed to fetch search results"));
  }, [query]);

  const isLoading = query !== "" && data === null && error === null;
  const isError = error !== null;
  const isSuccess = data !== null && !isLoading && !isError;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const q = formData.get("q");
    setQuery(q);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" name="q" placeholder="Search for series..." />
        <button type="submit">Search</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}
      {isSuccess && (
        <ul>
          {data.map((score) => (
            <li key={score.show.id}>
              <Link to={`/series/${score.show.id}`}>{score.show.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
