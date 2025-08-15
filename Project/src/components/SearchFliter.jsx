import React from 'react';

export default function SearchFilter({ query, setQuery, genre, setGenre, genres }) {
  return (
    <div className="d-flex flex-wrap gap-2 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ maxWidth: '300px' }}
      />
      <select
        className="form-select w-auto"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
}
